import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface VerifiedAccountPageProps {
  params: {
    userId: string;
  };
}

const VerifiedAccountPage: React.FC<VerifiedAccountPageProps> = async ({
  params,
}) => {
  const user = await db.user.findFirst({
    where: {
      id: params.userId,
    },
  });

  if (!user) {
    redirect("/auth/login");
  }

  await db.user.update({
    where: {
      id: params.userId,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  return (
    <div className="flex flex-col gap-y-6">
      <div>Hi {user?.name}, your account is already verified</div>
      <Button asChild>
        <Link className={cn(buttonVariants)} href="/auth/login">
          Sign in
        </Link>
      </Button>
    </div>
  );
};

export default VerifiedAccountPage;
