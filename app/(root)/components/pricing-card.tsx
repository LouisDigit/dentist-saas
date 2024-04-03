import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import { CheckCheckIcon } from "lucide-react";

interface PricingCardProps {
  price: string;
  plan: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ price, plan, features }) => {
  return (
    <div className="p-4 border rounded-lg flex flex-col items-center gap-y-4 w-full md:w-[350px]">
      <p className="text-4xl font-bold">{price}€/mth</p>
      <p className="font-semibold text-2xl">{plan}</p>
      <span>Billed annually</span>
      <ul className="flex flex-col gap-y-5 w-full">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-x-3 items-center font-light text-sm"
          >
            <CheckIcon
              height={26}
              width={26}
              color="green"
              className="border bg-neutral-100 dark:bg-white rounded-full"
            />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-3 w-full">
        <Button variant="secondary">Get started</Button>
        <Button variant="signIn">Chat to sales</Button>
      </div>
    </div>
  );
};

export default PricingCard;
