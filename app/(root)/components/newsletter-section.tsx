import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionContainer from "@/components/ui/section-container";

const NewsLetterSection: React.FC = async () => {
  return (
    <SectionContainer className="md:px-0   h-[400px] border-t ">
      <div className="flex flex-col gap-y-3  w-full items-center justify-center h-full">
        <h2 className="text-semibold text-4xl">Join Our Newsletter</h2>
        <p className="text-md font-light mb-3">
          Sign up for deals, new products and promotions
        </p>
        <Input
          className="bg-transparent w-[250px]"
          placeholder="your email..."
        />
        <Button variant="signIn">Subscribe</Button>
      </div>
    </SectionContainer>
  );
};

export default NewsLetterSection;
