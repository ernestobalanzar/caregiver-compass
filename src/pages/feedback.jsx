import React from "react";
import { Container } from "../components/Container";

export default function Feedback() {
  return (
    <Container className={"py-10 sm:py-10 content-center "}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScaTGKXw6deLm4TUuFHZ7cHOWo1hOhacypbhAeO5CJfc5WUZg/viewform?embedded=true"
        width="640"
        height="1900"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Container>
  );
}
