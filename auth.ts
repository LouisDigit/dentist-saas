import NextAuth, { User } from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { getUserById } from "@/data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session, user }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
    async jwt({ token, trigger, session }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) {
        return token;
      }

      token.role = existingUser.role;

      if (trigger === "update" && session?.firstname && session?.lastname) {
        token.name = session.name;
        token.email = session.email;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  events: {
    createUser: async (message) => {
      const userId = message.user.id;
      const email = message.user.email;
      const name = message.user.name;

      if (!userId || !email) {
        return;
      }

      const stripeCustomer = await stripe.customers.create({
        email,
        name: name ?? undefined,
      });

      await prisma?.user.update({
        where: { id: userId },
        data: {
          stripeCustomerId: stripeCustomer.id,
        },
      });
    },
  },
  ...authConfig,
});
