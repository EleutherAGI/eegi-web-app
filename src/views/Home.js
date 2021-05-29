import { Link as RouterLink } from "react-router-dom";
import {
    Heading,
    Button,
    Text,
    Input,
    Stack,
    InputGroup,
    InputRightElement,
    Container,
    CircularProgress,
    Link,
    VStack,
    Center
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function Home() {
    return (
        <VStack h="100vh" align="stretch">
            <Header />
            <Center h="100%" px="2rem">
                <Container maxW="container.lg">
                    <Container
                        p={8}
                        maxWidth="500px"
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="lg"
                        ml="auto"
                        mr="auto"
                    >
                        <Heading mb="1rem">Welcome to EEGI!</Heading>
                        <Text
                            color="gray.400"
                            pl="1rem"
                            ml="4px"
                            my="1rem"
                            borderLeft="4px"
                            borderColor="gray.600"
                        >
                            EEGI is an ongoing research project studying the
                            uses and control of large language models. This
                            website acts to facilitate dynamic collection of
                            data on human/AI interaction. We hope that by more
                            tightly integrating direct human evaluations into
                            the training loop we can steer the behavior of our
                            models to more desirable outcomes. Our first
                            experiment is an attempt to teach a model what kinds
                            of texts humans rate highly and then use that to
                            filter large datasets.
                        </Text>
                        <Heading my="2rem" as="h3" size="md">
                            Pick a human generated summary.
                        </Heading>
                        <Link as={RouterLink} to="/filter/pick">
                            <Button
                                rightIcon={<ArrowForwardIcon w={5} h={5} />}
                            >
                                Begin
                            </Button>
                        </Link>
                    </Container>
                </Container>
            </Center>
            <Footer />
        </VStack>
    );
}
