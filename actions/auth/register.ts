"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { resend } from "@/lib/resend";
import RaycastMagicLinkEmail from "@/emails/magic-link";
import { RegisterSchema } from "@/schemas";

import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already used" };
  }

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  resend.emails.send({
    from: process.env.RESEND_EMAIL_SENDER || "onboarding@resend.dev",
    to: email,
    subject: "Email Verification",
    react: RaycastMagicLinkEmail({
      magicLink: `http:localhost:3000/auth/verified-account/${newUser.id}`,
    }),
  });

  return { success: "User created!" };
};
