import Footer from "@/components/ui/footer";
import { auth } from "@/auth";

export type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const session = await auth();
  const name = session?.user?.name;
  return (
    <>
      <main className="flex flex-col">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
