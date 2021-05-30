import React, { useState } from "react";
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
import { Link as RouterLink, useHistory } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setPasswordShow] = useState(false);
    const handlePasswordClick = () => setPasswordShow(!showPassword);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        if (!email) {
            setError("Email was not provided");
        } else if (!password) {
            setError("Password was not provided");
        } else {
            const data = await signIn(email, password);

            if (data.access_token && data.session_id && !!data.user.is_active) {
                history.replace("/");
            } else {
                setError(data.message);
            }
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
