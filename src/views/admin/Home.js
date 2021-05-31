import { Link as RouterLink } from "react-router-dom";
import { Heading, Button, Link, VStack } from "@chakra-ui/react";
import { Search2Icon, EditIcon, AddIcon } from "@chakra-ui/icons";

export default function AdminHome() {
    return (
        <>
            <VStack align="start" spacing={2}>
                <Heading mb="1rem">Admin panel</Heading>
                <Link as={RouterLink} to="/admin/list_users">
                    <Button rightIcon={<Search2Icon w={5} h={5} />}>
                        List users
                    </Button>
                </Link>
                <Link as={RouterLink} to="/admin/list_comparisons">
                    <Button rightIcon={<Search2Icon w={5} h={5} />}>
                        List Comparison
                    </Button>
                </Link>
                <Link as={RouterLink} to="/admin/create_key">
                    <Button rightIcon={<AddIcon w={5} h={5} />}>
                        Create key
                    </Button>
                </Link>
                <Link as={RouterLink} to="/admin/create_user">
                    <Button rightIcon={<AddIcon w={5} h={5} />}>
                        Create user
                    </Button>
                </Link>
                <Link as={RouterLink} to="/admin/update_user">
                    <Button rightIcon={<EditIcon w={5} h={5} />}>
                        Update user
                    </Button>
                </Link>
            </VStack>
        </>
    );
}
