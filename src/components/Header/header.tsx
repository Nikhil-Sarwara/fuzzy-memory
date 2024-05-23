import { Flex, Heading, Button } from "@chakra-ui/react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

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

            {/* Getting Started if not logged in */}
            <SignedOut>
                <Link href="/sign-in">
                    <Button colorScheme="teal">Get Started</Button>
                </Link>
            </SignedOut>

            {/*  Else if logged in show profile */}
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Flex>
    )
}

export default Header;