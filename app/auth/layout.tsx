import Navbar from "@/components/ui/navbar";
import MaxWidthWrapper from "@/components/container";
import GoogleCaptchaProvider from "@/providers/google-recaptcha-provider";
import GoogleCaptchaWrapper from "@/providers/google-recaptcha-provider";

export type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  return (
    <GoogleCaptchaWrapper>
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
    </GoogleCaptchaWrapper>
  );
};

export default AuthLayout;
