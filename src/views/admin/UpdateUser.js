import React, { useState, useEffect } from "react";
import { Heading, 
    Button, 
    VStack, 
    Input, 
    Stack, 
    CircularProgress, 
    Checkbox,
    Text } from "@chakra-ui/react";
import { withRouter } from "react-router-dom";
import { getUser, updateUser } from "../../utils/api";


const UpdateUser = ({match, history}) => {
    const [userId, setUserId] = useState(match.params.id ? match.params.id : "");
    const [user, setUser] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // TODO Modify backend to accept string for get users
    // TODO Finish implementing modify user

    useEffect(() => {
        if(userId !== ""){
            setIsLoading(true)
            getUser(userId)
            .then((res) => {
                console.log(res);
                setUser(res);
                setName(res.first_name);
                setEmail(res.email);
                setIsAdmin(res.is_admin);
                setIsActive(res.is_active);
            })
            .catch((error) => console.log(error));
            setIsLoading(false);
        }
    }, [userId]);


    const handleGetUser = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        if (!user) {
            setError("User id was not provided");
        } else {
            setUserId(user)
        }

        setIsLoading(false);
    };


    const handleUpdateUser = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        if (!name) {
            setError("Name was not provided");
        } else {
            const data = await updateUser(user.id, name, isAdmin, isActive);

            // TODO not sure what this does
            if (data.access_token && data.session_id && !!data.user.is_active) {
                history.replace("/");
            } else {
                setError(data.message);
            }
        }

        setIsLoading(false);
    };


    return (
        <VStack align="start" spacing={2}>
            {userId === "" ? (
                <form onSubmit={handleGetUser}>
                    <Stack spacing={8}>
                    <Heading mb="1rem">Enter user ID</Heading>
                    {error && <Text>{error}</Text>}
                    <Input
                        type="name"
                        placeholder="user id"
                        onChange={(e) => setUserId(e.currentTarget.value)}
                    />
                        <Button type="submit">
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" />
                            ) : (
                                "Search"
                            )}
                        </Button>
                    </Stack>
                </form>
            ) : (
                <form onSubmit={handleUpdateUser}>
                    <Heading mb="1rem">Update user</Heading>
                    <Stack spacing={4}>
                        {error && <Text>{error}</Text>}

                        <Input
                            type="email"
                            placeholder="Email"
                            defaultValue={email}
                            isDisabled
                        />

                        <Input
                            type="name"
                            placeholder="First name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Checkbox 
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            isChecked = {isAdmin}
                            colorScheme="orange" 
                            size="md">
                            Is Admin
                        </Checkbox>

                        <Checkbox 
                            onChange={(e) => setIsActive(e.target.checked)}
                            isChecked = {isActive}
                            size="md">
                            Is Active
                        </Checkbox>
                
                        <Button type="submit">
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" />
                            ) : (
                                "Update user"
                            )}
                        </Button>
                    </Stack>
                </form>
            )}
            
                
            
        </VStack>
    );
}
export default withRouter(UpdateUser);
