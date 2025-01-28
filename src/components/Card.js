import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack
      backgroundColor="#fff"
      color="#000"
      rounded="md"
    >
      <VStack>
        <Image
          rounded="md"
          src={imageSrc}
          alt={`${title} image`}
          fit="cover"
        />
        <VStack align="flex-start" p={4}>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <a href="#projects-section">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
