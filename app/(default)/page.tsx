export const metadata = {
  title: "ORRO - The One Fractional Asset Ownership Platform",
  description:
    "Join our movement towards a more inclusive and equitable financial future",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
