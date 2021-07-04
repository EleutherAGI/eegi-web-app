import { Link as RouterLink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading, Button, Text, Link, VStack, Divider, Box } from "@chakra-ui/react";
import React from "react";

export default function Home() {
    return (
        <VStack align="start" spacing={2} padding={0}>
            <Box mb={5}>
                <Heading mb="1rem" size="xl">Welcome to EEGI!</Heading>
                <Text
                >
                    EEGI is an ongoing research project studying the uses and
                    control of large language models. This website acts to
                    facilitate dynamic collection of data on human/AI interaction.
                    We hope that by more tightly integrating direct human
                    evaluations into the training loop we can steer the behavior of
                    our models to more desirable outcomes. 
                </Text>
                <Divider mt={5} />
            </Box>

            <Text mb="100em">
                Our first experiment is
                an attempt to teach a model what kinds of texts humans rate
                highly and then use that to filter large datasets.
            </Text>
            <Link as={RouterLink} to="/filter/pick">
                <Button rightIcon={<ArrowForwardIcon w={5} h={5} />}>
                    Begin Filtering Experiment
                </Button>
            </Link>
        </VStack>
    );
}
