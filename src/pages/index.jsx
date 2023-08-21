import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import { Reviews } from "../components/Reviews";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import { HeroSliderComponent } from "../components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSliderComponent />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  );
}
