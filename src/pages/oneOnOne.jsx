import React from "react";
import { InlineWidget } from "react-calendly";
import { Container } from "../components/Container";

export default function OneOnOne() {
  return (
    <>
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Eschedule a One on One with our experts
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Embarking on the journey of caregiving is both a profound act of
            love and an undeniable challenge. It's a path filled with unexpected
            twists and moments of both despair and joy. Remember, you're not
            navigating this terrain alone. Our experts are here to stand by your
            side, offering guidance, understanding, and a listening ear.
            Schedule a one-on-one to find solace, get answers, and reaffirm that
            you have a community supporting you every step of the way.
          </p>
        </div>
      </Container>
      <div className="App">
        <InlineWidget url="https://calendly.com/ernesto-bs7" />
      </div>
    </>
  );
}
