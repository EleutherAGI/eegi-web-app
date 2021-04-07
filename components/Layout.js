import {
  Heading,
  Center,
  Container,
  VStack,
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  LinkOverlay
} from "@chakra-ui/react"
import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <VStack h="100vh" align="stretch">
      <Box
        bg="#000"
        py=".1em"
        px="2rem"
        borderBottom="1px solid"
        borderBottomColor="eleuther.darkGrey"
      >
        <Container maxW="container.lg" height="50" py="2">
          <Flex>
            <LinkOverlay href="/">
              <Flex>
                <Box>
                  <Image
                    src="/images/eai_logo.png"
                    alt="Eleuther logo"
                    boxSize="35"
                  />
                </Box>
                <Box mt={1.5} ml={3}>
                  <Heading as="h1" fontSize="1.2em">
                    EleutherAI
                  </Heading>
                </Box>
              </Flex>
            </LinkOverlay>

            <Spacer display={{ base: "none", sm: "none", md: "block" }} />
            <Text display={{ base: "none", sm: "none", md: "block" }} mt={1.5}>
              Eleuther Experiments in General Intelligence
            </Text>
          </Flex>
        </Container>
      </Box>
      <Center h="100%" px="2rem">
        <Container maxW="container.lg">{children}</Container>
      </Center>
      <Box
        bg="eleuther.black"
        py=".1em"
        px="2rem"
        borderBottomColor="eleuther.darkGrey"
      >
        <Container maxW="container.lg" height="50" py="2">
          <Flex>
            <Box ml="auto">
              <Text fontSize="0.6em">
                <Link href="https://www.eleuther.ai/">EleutherAI 2021</Link>
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </VStack>
  )
}

export default Layout
