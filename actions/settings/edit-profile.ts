"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import * as z from "zod";
import { EditProfileSchema } from "@/schemas";

export const editProfile = async (
  values: z.infer<typeof EditProfileSchema>
) => {
  const session = await auth();

  const validatedFields = EditProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name } = validatedFields.data;

  if (!session) {
    return { error: "Unauthorized!" };
  }

  try {
    if (session.user?.email) {
      await db.user.update({
        where: {
          email: session.user?.email,
        },
        data: {
          name,
          email,
        },
      });
    }

    return {
      success: "User updated! Please reconnect for apply correctly",
      email,
      name,
    };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
