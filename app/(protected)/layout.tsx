import { auth } from "@/auth";
import { Providers } from "@/components/provider";

export type ProtectedLayoutProps = {
  children: React.ReactNode;
};

const ProtectedLayout: React.FC<ProtectedLayoutProps> = async ({
  children,
}) => {
  const session = await auth();
  if (session?.user) {
    session.user = {
      id: session?.user?.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }
  const name = session?.user?.name;
  return (
    session &&
    name && (
      <>
        <Providers session={session}>
          <div className="flex flex-1 flex-row">{children}</div>
        </Providers>
      </>
    )
  );
};

export default ProtectedLayout;
