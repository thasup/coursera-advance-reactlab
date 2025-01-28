import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am First!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="My profile" src="https://res.cloudinary.com/thasup/image/upload/w_600,f_auto/v1654267591/portfolio/IMG_71362_phuw5y.png" />
      <Heading size="lg">{greeting}</Heading>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
