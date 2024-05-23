import { Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
    return (

        <Flex
            as="header"
            align="center"
            justify="space-between"
            padding="1.5rem"
            backgroundColor={"gray.100"}
        >
            <Heading as="h1" size="lg">
                QR Code Generator
            </Heading>
            <Button colorScheme="teal">Get Started</Button>
        </Flex>
    )
}

export default Header;