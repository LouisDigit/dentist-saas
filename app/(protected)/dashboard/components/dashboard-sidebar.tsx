"use client";

import { auth } from "@/auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import { DashboardIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  const links = [
    {
      href: "/dashboard",
      active: pathname === "/dashboard",
      label: "Dashboard",
      icon: <DashboardIcon width={20} height={20} />,
      render: true,
    },
    {
      href: "/dashboard/users",
      active: pathname === "/dashboard/users",
      label: "Users",
      icon: <PersonIcon width={20} height={20} />,
      render: user?.role === "ADMIN",
    },
  ];
  return (
    <nav className="flex flex-col w-[300px]  border-r  items-center">
      <ul className="w-full flex flex-col">
        {links.map((link, index) => {
          return (
            link.render && (
              <li
                key={index}
                className={`px-6 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 ${
                  link.active ? "bg-neutral-100 dark:bg-neutral-900" : ""
                }`}
              >
                <Link
                  href={link.href}
                  className="flex gap-x-5 transition-color h-full w-full  rounded-lg"
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            )
          );
        })}
      </ul>
      <hr className="my-2 border-[0.5px] w-[90%]" />
      <ul className="w-full flex flex-col">
        <li className="px-6 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
          <Link
            href={"/settings"}
            className="flex gap-x-5 items-center transition-color h-full w-full  rounded-lg"
          >
            <GearIcon width={20} height={20} />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
