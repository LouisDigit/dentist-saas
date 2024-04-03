import { auth } from "@/auth";
import { Button } from "../ui/button";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

const BuyButton: React.FC = () => {
  return (
    <form>
      <Button
        variant="default"
        formAction={async () => {
          "use server";

          const authSession = await auth();
          const user = await db.user.findUnique({
            where: {
              name: authSession?.user?.name ?? "",
              email: authSession?.user?.email ?? "",
            },
            select: {
              stripeCustomerId: true,
            },
          });
          const stripeCustomerId = user?.stripeCustomerId ?? undefined;

          const session = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            mode: "subscription",
            payment_method_types: ["card", "link"],
            line_items: [
              {
                price:
                  process.env.NODE_ENV === "development"
                    ? "price_1OmFpOHgUmBiEmnfGKQLSpHC"
                    : "",
                quantity: 1,
              },
            ],
            success_url: `http://localhost:3000/dashboard`,
            cancel_url: `http://localhost:3000/`,
          });
          if (!session.url) {
            throw new Error("Session URL is missing");
          }
          redirect(session.url);
        }}
      >
        Upgrade to MASTER PLAN
      </Button>
    </form>
  );
};

export default BuyButton;
