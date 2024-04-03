import MaxWidthWrapper from "@/components/container";
import LoginForm from "./components/login-form";
import FormWrapper from "@/components/ui/form-wrapper";

const LoginPage = () => {
  return (
    <FormWrapper
      title="Login"
      subtitle="Welcome back! Please enter your details."
    >
      <LoginForm />
    </FormWrapper>
  );
};

export default LoginPage;
