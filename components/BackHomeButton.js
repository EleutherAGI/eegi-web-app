import { Link, Button } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const BackHomeButton = () => {
    return (
        <Link as={NextLink} href="/">
          <Button variant="outline" colorScheme="blue" leftIcon={<ArrowBackIcon w={5} h={5} />}>Home</Button>
        </Link>
    )
}

export default BackHomeButton
