import React from "react";
import { Container } from "../components/Container";

export default function ChatBotCompass() {
  return (
    <Container className={"py-10 sm:py-10"}>
      <iframe
        id="chatbotkit-frame"
        src="https://static.chatbotkit.com/integrations/widget/cll70jode0079pa0h4z599mvi/frame"
      ></iframe>
    </Container>
  );
}
