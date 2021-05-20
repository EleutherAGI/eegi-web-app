import { Link as RouterLink } from "react-router-dom"
import { Heading, Button, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
    return (
        <>
            <Heading mb="1rem">Welcome to EEGI!</Heading>
            <Text
                color="gray.400"
                pl="1rem"
                ml="4px"
                my="1rem"
                borderLeft="4px"
                borderColor="gray.600"
            >
                EEGI is an ongoing research project studying the uses and control of large language models. 
                This website acts to facilitate dynamic collection of data on human/AI interaction. 
                We hope that by more tightly integrating direct human evaluations into the training loop we can 
                steer the behavior of our models to more desirable outcomes.
                Our first experiment is an attempt to teach a model what kinds of texts humans rate 
                highly and then use that to filter large datasets.
            </Text>
            <Heading my="2rem" as="h3" size="md">
                Pick a human generated summary.
            </Heading>
            <Link as={RouterLink} to="/summaries/pick">
                <Button rightIcon={<ArrowForwardIcon w={5} h={5} />}>
                    Begin
                </Button>
            </Link>
        </>
    );
}
