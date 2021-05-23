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
    Container
} from "@chakra-ui/react";
import { signUp } from "../utils/auth";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setPasswordShow] = React.useState(false);
    const handlePasswordClick = () => setPasswordShow(!showPassword);

    const [showKey, setKeyShow] = React.useState(false);
    const handleKeyClick = () => setKeyShow(!showKey);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = await signUp(email, password, name, key);

        if (data.message == "success") {
            console.log(data.message);
        } else {
            setError(data.message);
        }
        setIsLoading(false);
    };

    return (
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
                <Heading mb="1rem">Sign up</Heading>
                <Stack spacing={4}>
                    {error && <Text>{error}</Text>}
                    <Input
                        type="name"
                        placeholder="First name"
                        onChange={(e) => setName(e.currentTarget.value)}
                    />

                    <Input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />

                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.currentTarget.value)}
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
                            onChange={(e) => setKey(e.currentTarget.value)}
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
                            <CircularProgress isIndeterminate size="24px" />
                        ) : (
                            "Sign Up"
                        )}
                    </Button>
                </Stack>
            </form>
        </Container>
    );
}