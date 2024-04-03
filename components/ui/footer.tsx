import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const links = [
    {
      href: "/",
      label: "Home",
    },

    {
      href: "/contact",
      label: "Contact us",
    },
  ];
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col justify-center py-16 gap-y-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-6">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={40}
                height={40}
                alt="Le logo de ma marque d'e-commerce"
              />
            </Link>
            <p>Create a new SaaS</p>
          </div>
          <ul className="hidden md:flex h-full items-center justify-center">
            {links.map((link, index) => (
              <li key={index} className={`h-full w-[100px]`}>
                <Link
                  href={link.href}
                  className="w-full text-sm h-full flex items-center justify-center"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-b-0 w-full" />
        <div className="flex text-sm justify-between">
          <ul className="flex gap-x-6">
            <li>Copyright © 2024 SaaS. All rights reserved</li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>Terms of Use</li>
          </ul>
          <ul className="flex gap-x-3">
            <li>
              <InstagramLogoIcon width={30} height={30} />
            </li>
            <li>
              <FacebookIcon width={30} height={30} />
            </li>
            <li>
              <LinkedInLogoIcon width={30} height={30} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
