import { Mail, ReceiptEuro, Trash2, User } from "lucide-react";
import Link from "next/link";

const SettingsMainNav: React.FC = () => {
  const links = [
    {
      label: "Edit profile",
      href: "/settings/profile",
      icon: <User size={20} />,
    },
    {
      label: "Delete profile",
      href: "/settings/delete-profile",
      icon: <Trash2 size={20} />,
    },
    {
      label: "Billing",
      href: "/settings/billings",
      icon: <ReceiptEuro size={20} />,
    },
  ];
  return (
    <nav className="flex flex-row md:flex-col gap-6 md:pr-5 mb-3 md:mb-0">
      <ul className="flex flex-col gap-y-2 w-full whitespace-nowrap text-md">
        {links.map((link, index) => (
          <li
            className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            key={index}
          >
            <Link
              key={index}
              href={link.href}
              className="flex gap-x-5 transition-color h-full w-full  rounded-lg"
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border-0.5" />
      {/* <h2 className="uppercase px-3 text-opacity-50 text-lg text-white">
        email settings
      </h2>
      <ul className="flex flex-col gap-y-2 w-full whitespace-nowrap text-md">
        <li className="px-3 py-2 hover:bg-gray-800">
          <Link
            href="/settings/profile"
            className="flex gap-x-5 transition-color h-full w-full  rounded-lg"
          >
            <Mail size={20} />
            Edit email settings
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default SettingsMainNav;
