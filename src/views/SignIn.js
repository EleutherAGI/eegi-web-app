
import React, { useState } from 'react';
import { Heading, Button, Text, Link, Input, Stack, InputGroup, InputRightElement, Box, CircularProgress } from "@chakra-ui/react";
import { signIn, isAuthenticated } from '../utils/auth';


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const [showPassword, setPasswordShow] = React.useState(false)
    const handlePasswordClick = () => setPasswordShow(!showPassword)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        const data = await signIn(email, password);
          
        if (data.message == 'success'){
            console.log(data.message)
        }else{
            setError(data.message);
        }
        setIsLoading(false);
    }

    return (
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <form onSubmit={handleSubmit}>
            <Heading mb="1rem">Sign up</Heading>
            <Stack spacing={4}>
                {error && (
                        <Text>{error}</Text>
                )}

                <Input type="name" placeholder="Email" onChange={e => setEmail(e.currentTarget.value)}/>

                <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={e => setPassword(e.currentTarget.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                        {showPassword ? "Hide" : "Show"}
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
