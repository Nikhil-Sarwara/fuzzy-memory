import { Button, Flex } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs"
import Link from "next/link";

const SignInPage = () => {
    return (
        <Flex justifyContent="center" height={"100vh"} alignItems="center" direction={"column"} gap={4}>
            {/* Back Button Floating */}
            <Link href="/">
                <Button variant="solid" colorScheme="gray" position="fixed" top={4} left={4}>
                    Back
                </Button>
            </Link>
            <SignIn routing="hash" />
        </Flex>
    )
}

export default SignInPage;