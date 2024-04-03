import SectionContainer from "@/components/ui/section-container";
import Container from "@/components/container";
import React from "react";
import PricingCard from "./pricing-card";

const PricingSection = () => {
  const datas = [
    {
      price: "10",
      plan: "Basic plan",
      features: [
        "Access to all basic features",
        "Basic reporting and analytics",
        "Up to 10 individual users",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
    },
    {
      price: "20",
      plan: "Business plan",
      features: [
        "200+ integrations",
        "Advanced reporting and analytics",
        "Up to 20 individual users",
        "40GB individual data each user",
        "Priority chat and email support",
      ],
    },
    {
      price: "40",
      plan: "Enterprise plan",
      features: [
        "Advanced custom fields",
        "Audit log and data history",
        "Unlimited individual users",
        "Unlimited individual data",
        "Personalised+priotity service",
      ],
    },
  ];

  return (
    <SectionContainer>
      <div className="flex flex-col gap-y-3">
        <span className="text-blue-700 text-lg">Pricing</span>
        <h2 className="text-5xl font-semibold">Simple, transparent pricing</h2>
        <p className="font-light text-lg">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
        <div className="mt-6 flex flex-col md:flex-row  gap-x-0 gap-y-3 md:gap-y-0 md:gap-x-3 justify-center">
          {datas.map((data, index) => (
            <PricingCard
              key={index}
              price={data.price}
              features={data.features}
              plan={data.plan}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
