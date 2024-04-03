import { db } from "@/lib/db";
import { $Enums } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Stripe.Event;

  console.log(body.type);

  switch (body.type) {
    case "checkout.session.completed": {
      const session = body.data.object as Stripe.Checkout.Session;
      const stripeCustomerId = session.customer;
      const user = await findUserFromCustomerId(stripeCustomerId);

      if (!user?.id) {
        break;
      }
      console.log("Add session");
      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          plan: "MASTER",
        },
      });
      break;
    }

    case "invoice.paid": {
      const invoice = body.data.object as Stripe.Invoice;
      const stripeCustomerId = invoice.customer;
      const user = await findUserFromCustomerId(stripeCustomerId);

      if (!user?.id) {
        break;
      }

      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          plan: "MASTER",
        },
      });
      break;
    }
    case "invoice.payment_failed": {
      const invoice = body.data.object as Stripe.Invoice;
      const stripeCustomerId = invoice.customer;
      const user = await findUserFromCustomerId(stripeCustomerId);

      if (!user?.id) {
        break;
      }

      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          plan: "FREE",
        },
      });
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = body.data.object as Stripe.Subscription;
      const stripeCustomerId = subscription.customer;
      const user = await findUserFromCustomerId(stripeCustomerId);

      if (!user?.id) {
        break;
      }

      await db.user.update({
        where: {
          id: user?.id,
        },
        data: {
          plan: "FREE",
        },
      });
      break;
    }
    default: {
      console.log("Unhandled event type", body.type);
    }
  }
  return NextResponse.json({
    ok: true,
  });
};

export const findUserFromCustomerId = async (stripeCustomerId: unknown) => {
  if (typeof stripeCustomerId !== "string") {
    return null;
  }
  return db.user.findFirst({
    where: {
      stripeCustomerId,
    },
  });
};
