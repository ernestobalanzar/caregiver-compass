import React, { useState } from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import hands from "../images/Hands.jpg";
import elderly from "../images/Elderly.jpg";
import elderly2 from "../images/elderly2.jpg";
import kid from "../images/kid.jpg";

const Title = ({ children }) => (
  <h1 className="text-center text-white text-6xl font-bold">{children}</h1>
);

const Subtitle = ({ children }) => (
  <h2 className="mt-3 text-center  text-white text-xl">{children}</h2>
);

const Wrapper = ({ children }) => (
  <div className="flex flex-col justify-center md:items-center item-center align-middle w-full h-screen m-auto">
    {children}
  </div>
);

const slideOverlay = [
  {
    title: "Building Stronger Connections",
    subtitle: "Strengthen the bond between caregivers and those they care for.",
  },
  {
    title: "Comprehensive Caregiving",
    subtitle: "All-in-one solutions for every caregiving need.",
  },
  {
    title: "Personalized Care Plans",
    subtitle: "Tailored services to fit every unique situation.",
  },
  {
    title: "Empowering Caregivers",
    subtitle: "Equip yourself with tools, resources, and support.",
  },
];

export function HeroSliderComponent() {
  const [slide, setSlide] = useState(0);
  return (
    <HeroSlider
      height={"92vh"}
      autoplay
      controller={{
        initialSlide: 0,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) => setSlide(nextSlide - 1),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>{slideOverlay[slide].title}</Title>
          <Subtitle>{slideOverlay[slide].subtitle}</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Caregiver Compass"
        background={{
          backgroundImageSrc: hands,
        }}
      />

      <Slide
        shouldRenderMask
        label="Comprehensive Caregiving"
        background={{
          backgroundImageSrc: kid,
        }}
      />

      <Slide
        shouldRenderMask
        label="Care Plans"
        background={{
          backgroundImageSrc: elderly,
        }}
      />

      <Slide
        shouldRenderMask
        label="Empower Caregivers"
        background={{
          backgroundImageSrc: elderly2,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
