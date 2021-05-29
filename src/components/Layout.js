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
    Link,
    Button
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useHistory } from "react-router-dom";

import EaiLogo from "../images/eai_logo.png";

import { logout, checkIfAuthenticated } from "../utils/auth";

const Layout = ({ children }) => {
    const history = useHistory();
    return (
        <VStack h="100vh" align="stretch">
            <Center h="100%" px="2rem">
                <Container maxW="container.lg">{children}</Container>
            </Center>
        </VStack>
    );
};

export default Layout;
