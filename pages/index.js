import { Heading, Button, Text, Link } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Home() {
  return (
    <>
        <Heading mb="1rem">Welcome to EEGI!</Heading>
        <Text>Eleuther Experiments in General Intelligence</Text>
        <Text color="gray.400" pl="1rem" ml="4px" my="1rem" borderLeft="4px" borderColor="gray.600">Inspired by this <Link color="blue.300" href="https://arxiv.org/pdf/2009.01325.pdf" isExternal>OpenAI paper</Link> we decided to explore the capability of our NLP models when learning from human feedback. The idea is to create a web interface where users could rate the quality of the NLP model output (like summarization) and use this data to improve the model.</Text>
        <Heading my="2rem" as="h3" size="md">Pick a human generated summary.</Heading>
        <Link as={NextLink} href="/summaries/pick">
          <Button variant="outline" colorScheme="blue" rightIcon={<ArrowForwardIcon w={5} h={5} />}>Begin</Button>
        </Link>
    </>
  )
}
