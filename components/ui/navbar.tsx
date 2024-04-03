import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";

import { Button } from "./button";
import { useRouter } from "next/router";
import { Moon } from "lucide-react";
import UserButton from "./user-button";
import { ModeToggle } from "../theme-toggle";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = async () => {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <header className="flex items-center justify-between px-2.5 md:px-10 py-4  border-b-[0.5px] border-b-neutral-300">
      <Link
        href="/"
        className="flex items-center justify-center gap-x-2 text-2xl font-bold text-neutral-950 dark:text-neutral-300"
      >
        <Image src="/images/logo.svg" alt="logo" width={60} height={30} />
        MySaaS
      </Link>
      <nav className="flex flex-row items-center gap-x-4">
        {name ? (
          <UserButton name={name} />
        ) : (
          <Link href="/auth/login">
            <Button variant="signIn">SignIn</Button>
          </Link>
        )}

        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
