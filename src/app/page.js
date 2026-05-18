import FeaturedDestinations from "@/components/FeaturedDestination";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/homeLayout/CallToAction";
import HowItWorks from "@/components/homeLayout/HowItWorks";
import Testimonials from "@/components/homeLayout/Testimonials";
import WhyZondrift from "@/components/homeLayout/WhyZondrift";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedDestinations />
      <HowItWorks />
      <WhyZondrift />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
