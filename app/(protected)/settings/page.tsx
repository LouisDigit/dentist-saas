import { auth } from "@/auth";
import { Edit2Icon, MailIcon, User } from "lucide-react";
import Link from "next/link";

const ProfilePage: React.FC = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <div className="flex flex-col w-full gap-y-6">
        <h1 className="flex gap-x-3 items-center md:text-xl font-semibold">
          <span className="bg-neutral-100 dark:bg-neutral-800 rounded-full p-[8px] flex items-center justify-center">
            <User size={20} />
          </span>
          {user?.name}
        </h1>
        <p className="text-md flex gap-x-5 font-light md:pl-2 items-center border-b border-b-gray-600 pb-3">
          <MailIcon size={20} />
          {user?.email}
        </p>
        <p className="text-md flex gap-x-5 font-light md:pl-2 items-center ">
          <Edit2Icon size={20} />
          {user?.name}
        </p>
        <Link
          href="/settings/profile"
          className="text-blue-500 hover:text-blue-400 border-b hover:border-b-blue-400 border-b-transparent w-fit cursor-pointer  text-sm md:ml-2"
        >
          Edit profile
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;
