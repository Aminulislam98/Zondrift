import FeaturedDestinations from "@/components/FeaturedDestination";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import HowItWorks from "./howitworks/page";
import WhyZondrift from "./whyzondrift/page";
import Testimonials from "./testmonials/page";
import CallToAction from "./calltoaction/page";

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
