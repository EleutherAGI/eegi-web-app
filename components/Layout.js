import { Center, Container, VStack, Box, Flex, Spacer } from "@chakra-ui/react"
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <VStack h="100vh" align="stretch">
            <Box bg="#000" py=".1em" px="2rem">
                <Container maxW="container.lg">
                    <Flex>
                        <Box><a href="https://eleuther.ai"><img src="/logo.jpg" /></a></Box>
                        <Spacer />
                        <Center>
                            <Link href="/">
                                Eleuther Experiments in General Intelligence
                            </Link>
                        </Center>
                    </Flex>
                </Container>
            </Box>
            <Center h="100%" px="2rem">
                <Container maxW="container.lg">
                    {children}
                </Container>
            </Center>
        </VStack>
    )
}

export default Layout
