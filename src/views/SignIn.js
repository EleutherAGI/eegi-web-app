import React, { useState, useContext } from "react";
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
    Center,
    VStack
} from "@chakra-ui/react";
import { signIn } from "../utils/auth";
import { Link as RouterLink, Route, useHistory } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const SignIn = () => {
    // console.log("props in signup comp: ", props);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setPasswordShow] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handlePasswordClick = () => setPasswordShow(!showPassword);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = await signIn(email, password);

        console.log("waiting data response: ", data);

        if (data.access_token && data.session_id && !!data.user.is_active) {
            console.log(data.message);
            setIsAuthenticated(true);
            history.replace("/");
        } else {
            setError(data.message);
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    };

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
                        <form onSubmit={handleSubmit}>
                            <Heading mb="1rem">Sign In</Heading>
                            <Stack spacing={8}>
                                {error && <Text>{error}</Text>}
                                <Input
                                    type="name"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        setEmail(e.currentTarget.value)
                                    }
                                />

                                <InputGroup size="md">
                                    <Input
                                        pr="4.5rem"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.currentTarget.value)
                                        }
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h="1.75rem"
                                            size="sm"
                                            onClick={handlePasswordClick}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <Container>
                                    Dont have account?
                                    <Link
                                        as={RouterLink}
                                        to="/signup"
                                        variant="text-link"
                                        ml={1}
                                    >
                                        Create an account
                                    </Link>
                                </Container>

                                <Button type="submit">
                                    {isLoading ? (
                                        <CircularProgress
                                            isIndeterminate
                                            size="24px"
                                        />
                                    ) : (
                                        "Sign In"
                                    )}
                                </Button>
                            </Stack>
                        </form>
                    </Container>
                </Container>
            </Center>
            <Footer />
        </VStack>
    );
};

export default SignIn;
