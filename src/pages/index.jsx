import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import { Reviews } from "../components/Reviews";
import { SecondaryFeatures } from "../components/SecondaryFeatures";
import { HeroSliderComponent } from "../components/HeroSlider";
import { HeroStatic } from "../components/HeroStatic";

export default function Home() {
  return (
    <>
      <HeroStatic />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  );
}
