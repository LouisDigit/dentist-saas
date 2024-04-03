import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import SectionContainer from "@/components/ui/section-container";

const HomeSection = () => {
  return (
    <SectionContainer className="border-b">
      <Container>
        <div className="w-full flex py-24 h-[600px]">
          <div className="text-neutral-950 dark:text-neutral-200 flex-1 flex flex-col justify-end gap-y-8">
            <h1 className=" text-6xl font-bold">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="font-light text-2xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quia provident ex.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="w-fit flex gap-x-2 group uppercase"
            >
              Call to action{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-3 transition-transform duration-200"
              />
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/images/saas.png"
              alt="saas png"
              width={800}
              height={500}
            />
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default HomeSection;
