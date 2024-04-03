"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type MainNavProps = {};

const MainNav: React.FC<MainNavProps> = ({}) => {
  const pathname = usePathname();
  const links = [
    { label: "Login", path: "/auth/login", active: pathname === "/auth/login" },
    {
      label: "Register",
      path: "/auth/register",
      active: pathname === "/auth/register",
    },
  ];

  return (
    <nav className="h-full ">
      <ul className="flex h-full items-center justify-center">
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              link.active ? " border-b-white" : "border-b-gray-900"
            } hover:bg-gray-800 transition-colors h-full  border-b   w-[150px]`}
          >
            <Link
              href={link.path}
              className="w-full h-full flex items-center justify-center"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
