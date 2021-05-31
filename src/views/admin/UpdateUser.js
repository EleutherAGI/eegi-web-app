import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heading, Button, Link, VStack } from "@chakra-ui/react";
import { Search2Icon, EditIcon, AddIcon } from "@chakra-ui/icons";
import { withRouter } from "react-router-dom";
import { getUser } from "../../utils/api";


const UpdateUser = ({match}) => {
    const [userId, setUserId] = useState(match.params.id ? match.params.id : "");
    const [user, setUser] = useState([]);

    // TODO Modify backend to accept string for get users
    // TODO Finish implementing modify user

    useEffect(() => {
        if(userId != ""){
            getUser(userId)
            .then((res) => {
                //setUser(res.page_data.items.items);
                console.log(res);
            })
            .catch((error) => console.log(error));
        }
    }, [userId]);


    return (
        <VStack align="start" spacing={2}>
            {userId == "" ? (
                <Heading mb="1rem">Enter user id</Heading>
            ) : (
                <Heading mb="1rem">Hello Admin</Heading>
            )}
            
                
            
        </VStack>
    );
}
export default withRouter(UpdateUser);
