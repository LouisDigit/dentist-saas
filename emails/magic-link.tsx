import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
import { Img } from "@react-email/components";

interface RaycastMagicLinkEmailProps {
  magicLink?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `http://${process.env.VERCEL_URL}/`
  : "";

console.log(baseUrl);

export const RaycastMagicLinkEmail = ({
  magicLink,
}: RaycastMagicLinkEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <div className="bg-white font-sans">
      <div
        className="mx-auto px-6 pt-8 pb-12 bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url("/assets/raycast-bg.png")` }}
      >
        <Img
          src={`http://localhost:3000/logo.svg`}
          alt="SaaS Boilerplate logo"
          width="48"
          height="48"
        />

        <h1 className="text-2xl font-bold mt-6">🪄 Your magic link</h1>
        <section className="my-6">
          <p className="text-base leading-6">
            <a className="text-red-500" href={magicLink}>
              👉 Click here confirm your account 👈
            </a>
          </p>
          <p className="text-base leading-6">
            If you didn't request this, please ignore this email.
          </p>
        </section>
        <p className="text-base leading-6">
          Best,
          <br />- SaaS Team
        </p>
        <hr className="border-gray-300 mt-6" />
        <img
          src={`http://localhost:3000/logo.svg`}
          width={32}
          height={32}
          className="filter grayscale-100 my-5"
        />
        <p className="text-sm text-gray-600">SaaS Technologies Inc.</p>
        <p className="text-sm text-gray-600">
          25 rue Jules Ferry, Béthune, France 62300
        </p>
      </div>
    </div>
  </Tailwind>
);

RaycastMagicLinkEmail.PreviewProps = {
  magicLink: "https://raycast.com",
} as RaycastMagicLinkEmailProps;

export default RaycastMagicLinkEmail;
