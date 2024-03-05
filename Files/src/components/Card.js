import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="#ffffff" borderRadius="xl" cursor="pointer">
      <Image src={imageSrc}  description={description} borderRadius="xl"/>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="" alignItems="center">
          <Heading as="h3" size="md" color="#000000">{title}</Heading>
        </HStack>
          <Text color="#64748b" fontSize="lg">{description}</Text>
          <HStack color="#000000">
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x"color="#000000" />
          </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
