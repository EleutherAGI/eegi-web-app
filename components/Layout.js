import { Center, Container, Heading } from "@chakra-ui/react"

const Layout = ({children}) => {
    return (
    <Center h="100vh">
        <Container maxW="3xl" w="80vw">
            {children}
        </Container>
    </Center>
    )
}

export default Layout
