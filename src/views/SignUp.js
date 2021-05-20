
import React, { useState } from 'react';
import { Heading, Button, Text, Link, Input, Stack, InputGroup, InputRightElement, Box, CircularProgress } from "@chakra-ui/react";
//import { login, isAuthenticated } from '../utils/auth';


export default function Home() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [key, setKey] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    const [showPassword, setPasswordShow] = React.useState(false)
    const handlePasswordClick = () => setPasswordShow(!showPassword)

    const [showKey, setKeyShow] = React.useState(false)
    const handleKeyClick = () => setKeyShow(!showKey)

    const handleSubmit = async () => {
        event.preventDefault();
        setIsLoading(true);
        login().then((res => console.log(res)))
    }

    return (
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <form onSubmit={handleSubmit}>
            <Heading mb="1rem">Sign up</Heading>
            <Stack spacing={4}>

                <Input type="name" placeholder="First name" />

                <Input type="email" placeholder="Email" />

                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                        {showPassword ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={showKey ? "text" : "password"}
                        placeholder="Access Key"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleKeyClick}>
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
                    'Sign In'
                  )}
                </Button>
            </Stack>
            </form>
            </Box>
    );
}
