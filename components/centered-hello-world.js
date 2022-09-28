import { Box, Heading, Container, Text } from '@chakra-ui/react'

const CenteredHelloWorld = () => (
  <>
    <Box
      display="flex"
      position="fixed"
      boxSize="full"
      alignItems="center"
      justifyContent="center"
    >
      <Container width="full" alignSelf="start" mt="56px" px={20}>
        <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
          Act 1.1: &ldquo;Hello World&rdquo; in middle
        </Heading>
      </Container>
      <Text position="absolute">Hello World</Text>
    </Box>
  </>
)

export default CenteredHelloWorld
