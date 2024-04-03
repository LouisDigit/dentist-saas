"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { EditProfilePasswordSchema } from "@/schemas";
import * as z from "zod";

export const editProfilePassword = async (
  values: z.infer<typeof EditProfilePasswordSchema>
) => {
  const session = await auth();

  const validateFields = EditProfilePasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { currentPassword, newPassword, confirmPassword } = validateFields.data;

  if (!session) {
    return { error: "Unauthorized" };
  }

  try {
    if (session.user?.email) {
      const currentUser = await getUserByEmail(session.user.email);
      if (currentUser?.password) {
        const passwordMatch = await bcrypt.compare(
          currentPassword,
          currentUser.password
        );
        if (passwordMatch) {
          const hashedPassword = await bcrypt.hash(newPassword, 10);
          await db.user.update({
            where: {
              email: session.user.email,
            },
            data: {
              password: hashedPassword,
            },
          });
          return { success: "Password changed!" };
        } else {
          return { error: "Current password incorrect!" };
        }
      }
    }
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
