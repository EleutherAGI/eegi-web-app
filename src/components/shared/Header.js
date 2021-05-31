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
import { Link as RouterLink } from "react-router-dom";
import EaiLogo from "../../images/eai_logo.png";
import { logout, checkIfAuthenticated, checkIfAdmin } from "../../utils/auth";
import { withRouter } from "react-router-dom";

const Header = ({ history, isAuthenticated }) => {
    return (
        <Box
            bg="#000"
            py=".1em"
            px="2rem"
            borderBottom="1px solid"
            borderBottomColor="eleuther.darkGrey"
        >
            <Container maxW="container.lg" height="50" py="2">
                <Flex>
                    <Flex>
                        <Box>
                            <Link as={RouterLink} to="/">
                                <Image
                                    src={EaiLogo}
                                    alt="Eleuther logo"
                                    boxSize="35"
                                    cursor="pointer"
                                />
                            </Link>
                        </Box>
                        <Box mt={1.5} ml={3}>
                            <Heading as="h1" fontSize="1.2em">
                                <Link as={RouterLink} to="/">
                                    EleutherAI
                                </Link>
                            </Heading>
                        </Box>
                    </Flex>

                    <Spacer
                        display={{ base: "none", sm: "none", md: "block" }}
                    />
                    <Text
                        display={{ base: "none", sm: "none", md: "block" }}
                        mt={1.5}
                    >
                        Eleuther Experiments in General Intelligence
                    </Text>
                    <Spacer
                        display={{ base: "none", sm: "none", md: "block" }}
                    />
                    <Box ml="auto">
                        {checkIfAuthenticated() ? (
                            <Button
                                size="sm"
                                onClick={() => {
                                    logout();
                                    history.push("/signin");
                                }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <Link as={RouterLink} to="/signin">
                                <Button size="sm">
                                    <LockIcon w={3} h={3} mr={1} />
                                    Sign in
                                </Button>
                            </Link>
                        )}
                        {checkIfAdmin() &&
                            <Link as={RouterLink} to="/admin">
                                <Button size="sm">
                                    Admin
                                </Button>
                            </Link>
                        }
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default withRouter(Header);
