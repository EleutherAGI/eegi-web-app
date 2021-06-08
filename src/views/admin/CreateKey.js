import React, { useState } from "react";
import uuid from "uuid";
import {
    Heading,
    Button,
    Checkbox,
    Input,
    Stack,
    InputGroup,
    InputRightElement,
    CircularProgress,
    Container,
    VStack,
    Text
} from "@chakra-ui/react";

import { createKey } from "../../utils/api";

export default function CreateKey() {

    // TODO Update backend to support "admin key"
    // TODO Attach this function to the backend

    //const history = useHistory();
    const [key, setKey] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showSignupSuccess, setShowSignupSuccess] = useState(false);
    const handleKeyClick = () => {
        const k = uuid.v4
        setKey(k)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        if (!key) {
            setError("Access Key was not provided");
        } else {
            const data = await createKey(key, isAdmin);

            if (data.message === "success") {
                setShowSignupSuccess(true);
            } else {
                setIsLoading(false);
                setError(data.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <VStack align="start" spacing={2}>
            {showSignupSuccess ? (
                <Container maxW="container.lg">
                    <Heading mb="1rem">Key Created</Heading>
                    <div>
                        <p>
                            Your signup has been succesfull. Please proceed to
                            sign in the page and enter your credentials.
                        </p>
                        <Button type="submit" onClick={() => {setShowSignupSuccess(false)}}>
                            "Create another key"
                        </Button>
                    </div>
                </Container>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Heading mb="1rem">Sign up</Heading>
                    {error && <Text>{error}</Text>}
                    <Stack spacing={4}>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type="text"
                                value={key}
                                placeholder="Access Key"
                                onChange={(e) => setKey(e.currentTarget.value)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleKeyClick}
                                >
                                    generate
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Checkbox 
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            colorScheme="orange" 
                            size="md">
                            Is Admin
                        </Checkbox>
                        <Button type="submit">
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" />
                            ) : (
                                "Create key"
                            )}
                        </Button>
                    </Stack>
                </form>
            )}
        </VStack>
    );
}
