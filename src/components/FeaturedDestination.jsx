import FeaturedSlider from "./FeaturedSlider";

export default async function FeaturedDestinations() {
  const res = await fetch("http://localhost:4000/destination", {
    cache: "no-store",
  });
  const destinations = await res.json();

  return <FeaturedSlider destinations={destinations.slice(0, 6)} />;
}
