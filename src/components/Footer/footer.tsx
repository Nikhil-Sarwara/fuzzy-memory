import { HStack, Box, Text } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
    return (
        < Box
            as="footer"
            padding="1.5rem"
            backgroundColor="gray.100"
            textAlign="center"
        >
            <HStack justify="center" spacing={4} marginBottom="1rem">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </HStack>
            <Text fontSize="sm" color="gray.500">
                © {new Date().getFullYear()} QR Code Generator. All rights reserved.
            </Text>
        </ Box>
    )
}

export default Footer