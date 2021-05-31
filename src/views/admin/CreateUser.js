import React, { useState } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";

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
    Checkbox,
} from "@chakra-ui/react";

import { registerUser } from "../../utils/api";

export default function CreateUser() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [isAdmin, setIsAdmin] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setPasswordShow] = useState(false);
    const handlePasswordClick = () => setPasswordShow(!showPassword);

    const [showSignupSuccess, setShowSignupSuccess] = useState(false);

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
        } else {
            const data = await registerUser(email, password, name, isAdmin, isActive);
            
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
        <>
            {showSignupSuccess ? (
                <Container maxW="container.lg">
                    <Heading mb="1rem">Sign up Success!</Heading>
                    <div>
                        <p>
                            Account Creation successful.
                        </p>
                        <Link
                            as={RouterLink}
                            to="/admin"
                            variant="text-link"
                            ml={1}
                        >
                            Back to admin
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
                        <Checkbox 
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            colorScheme="orange" 
                            size="md">
                            Is Admin
                        </Checkbox>
                        <Checkbox 
                            onChange={(e) => setIsActive(e.target.checked)}
                            defaultIsChecked
                            size="md">
                            Is Active
                        </Checkbox>
                
                        <Button type="submit">
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" />
                            ) : (
                                "Create user"
                            )}
                        </Button>
                    </Stack>
                </form>
            )}
        </>
    );
}
