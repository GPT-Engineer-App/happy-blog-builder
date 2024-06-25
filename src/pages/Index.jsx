import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to Our Blog</Heading>
        <Text fontSize="lg">Explore our latest posts and updates.</Text>
      </VStack>
    </Container>
  );
};

export default Index;