import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
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
