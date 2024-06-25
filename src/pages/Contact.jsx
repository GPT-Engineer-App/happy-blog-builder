import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Contact Us</Heading>
        <Text fontSize="lg">This is the contact page of our blog.</Text>
      </VStack>
    </Container>
  );
};

export default Contact;