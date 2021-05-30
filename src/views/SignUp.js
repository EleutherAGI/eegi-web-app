import React, { useState } from "react";
import {
    Heading,
    Button,
    Text,
    Input,
    Stack,
    InputGroup,
    InputRightElement,
    CircularProgress,
    Container,
    Link,
    Center,
    VStack
} from "@chakra-ui/react";
import { useHistory, Link as RouterLink } from "react-router-dom";

import { signUp } from "../utils/auth";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setPasswordShow] = useState(false);
    const handlePasswordClick = () => setPasswordShow(!showPassword);

    const [showKey, setKeyShow] = useState(false);
    const [showSignupSuccess, setShowSignupSuccess] = useState(false);
    const handleKeyClick = () => setKeyShow(!showKey);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        if (!name) {
            setError("Name was not provided");
        } else if (!email) {
            setError("Email was not provided");
        } else if (!password) {
            setError("Password was not provided");
        } else if (!key) {
            setError("Access Key was not provided");
        } else {
            const data = await signUp(email, password, name, key);

            if (data.message == "success") {
                setShowSignupSuccess(true);
            } else {
                setIsLoading(false);
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
                        {showSignupSuccess ? (
                            <Container maxW="container.lg">
                                <Heading mb="1rem">Sign up Success!</Heading>
                                <div>
                                    <p>
                                        Your signup has been succesfull. Please
                                        proceed to sign in the page and enter
                                        your credentials.
                                    </p>
                                    <Link
                                        as={RouterLink}
                                        to="/signin"
                                        variant="text-link"
                                        ml={1}
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </Container>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <Heading mb="1rem">Sign up</Heading>
                                <Stack spacing={4}>
                                    {error && <Text>{error}</Text>}
                                    <Input
                                        type="name"
                                        placeholder="First name"
                                        onChange={(e) =>
                                            setName(e.currentTarget.value)
                                        }
                                    />

                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setEmail(e.currentTarget.value)
                                        }
                                    />

                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(
                                                    e.currentTarget.value
                                                )
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

                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            type={showKey ? "text" : "password"}
                                            placeholder="Access Key"
                                            onChange={(e) =>
                                                setKey(e.currentTarget.value)
                                            }
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button
                                                h="1.75rem"
                                                size="sm"
                                                onClick={handleKeyClick}
                                            >
                                                {showKey ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Button type="submit">
                                        {isLoading ? (
                                            <CircularProgress
                                                isIndeterminate
                                                size="24px"
                                            />
                                        ) : (
                                            "Sign Up"
                                        )}
                                    </Button>
                                </Stack>
                            </form>
                        )}
                    </Container>
                </Container>
            </Center>
            <Footer />
        </VStack>
    );
}
