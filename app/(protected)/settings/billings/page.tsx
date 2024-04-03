import { auth } from "@/auth";
import BuyButton from "@/components/buy/buy-button";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const SettingsBillingPage = async () => {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col py-12 gap-y-8">
        <h1 className="text-xl font-bold">Billing Information</h1>
        <p>Plan : </p>
        <BuyButton />
      </div>
    </>
  );
};

export default SettingsBillingPage;
