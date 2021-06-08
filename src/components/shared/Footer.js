import React from "react";

import {
    Container,
    Box,
    Flex,
    Text,
    Link,
} from "@chakra-ui/react";

export default function Footer() {
    return (
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
                            <Link href="https://www.eleuther.ai/">
                                EleutherAI 2021
                            </Link>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
