import MaxWidthWrapper from "@/components/container";
import RegisterForm from "./components/register-form";
import FormWrapper from "@/components/ui/form-wrapper";

const RegisterPage = () => {
  return (
    <MaxWidthWrapper className="md:px-48 items-center justify-center">
      <FormWrapper title="Register" subtitle="Start your journey with us.">
        <RegisterForm />
      </FormWrapper>
    </MaxWidthWrapper>
  );
};

export default RegisterPage;
