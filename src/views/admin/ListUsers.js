import { Link as RouterLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Heading, Button, Link, VStack, Container, Text, Flex, Spacer, Box } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { getUsers } from "../../utils/api";
import { withRouter } from "react-router-dom";



const ListUsers = ({match}) => {
    const [page, setPage] = useState(Number.isNaN(parseInt(match.params.page, 10)) ? 1 : parseInt(match.params.page, 10) );
    const [users, setUsers] = useState([]);

    console.log(Number.isNaN(parseInt(match.params.page, 10)) ? 1 : parseInt(match.params.page, 10) )

    useEffect(() => {
        console.log(page)
        getUsers(page)
            .then((res) => {
                setUsers(res.page_data.items.items);
                console.log(res);
            })
            .catch((error) => console.log(error));
    }, [page]);

    return (
        <VStack align="start" spacing={2}>
            <Heading mb="1rem">Page Number: {page}</Heading>
            {users.length === 0 ? (
            <Text>
                No results on this page
            </Text>
            ) : (
                <VStack align="start" spacing={2}>
                    {users.map((value, i) => (
                        <Container
                            key = {i}
                            p={2}
                            borderWidth={1}
                            borderRadius={8}
                            boxShadow="lg"
                            ml="auto"
                            mr="auto">
                            <VStack align="start" spacing={2}>
                                <Text>
                                    name: {value.first_name} 
                                </Text>
                                <Text>
                                    email: {value.email} 
                                </Text>
                                <Text>
                                    created_by: {value.created_by_userid} 
                                </Text>
                                <Text>
                                    admin: {value.is_admin.toString()} 
                                </Text>
                                <Link as={RouterLink}
                                    to={"/admin/update_user/"+value.id}>
                                    <Button size="sm">
                                        Update User
                                    </Button>
                                </Link>
                            </VStack>
                        </Container>
                    ))}
                </VStack>
            )}
        <Box w="100%">
            <Flex>
                {page > 1 && 
                <Link as={RouterLink} 
                    to={"/admin/list_users/"+String(page-1)} 
                    onClick={() => setPage(page-1)}>
                    <Button leftIcon={<ArrowBackIcon w={5} h={5} />}>
                        Previous
                    </Button>
                </Link>}
                <Spacer />
                <Text>Page Number: {page}</Text>
                <Spacer />
                <Link as={RouterLink} 
                    to={"/admin/list_users/"+String(page+1)} 
                    onClick={() => setPage(page+1)}>
                    <Button rightIcon={<ArrowForwardIcon w={5} h={5} />}>
                        Next
                    </Button>
                </Link>
            </Flex>
        </Box>
        </VStack>
    );
}

export default withRouter(ListUsers);
