import { Link as RouterLink } from "react-router-dom"
import { Link, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";

export default function BackHomeButton() {
    return (
        <Link as={RouterLink} to="/">
            <Button leftIcon={<ArrowBackIcon w={5} h={5} />}>Home</Button>
        </Link>
    );
}
