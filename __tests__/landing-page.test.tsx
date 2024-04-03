import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "../app/(root)/page";
import Footer from "@/components/ui/footer";
import HomeSection from "@/app/(root)/components/home-section";
import PricingSection from "@/app/(root)/components/pricing-section";

describe("Landing page rendering", () => {
  it("renders a heading", () => {
    render(<LandingPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("render banner", () => {
    const { getByText } = render(<HomeSection />);

    const content = getByText(/Lorem ipsum dolor sit amet consectetur/i);

    expect(content).toBeInTheDocument();
  });

  it("render pricing section", () => {
    const { getByText } = render(<PricingSection />);

    const content = getByText(/Simple, transparent pricing/i);

    expect(content).toBeInTheDocument();
  });

  it("render footer", () => {
    const { getByText } = render(<Footer />);

    const footerElement = getByText(/Copyright/i);
    expect(footerElement).toBeInTheDocument();
  });
});
