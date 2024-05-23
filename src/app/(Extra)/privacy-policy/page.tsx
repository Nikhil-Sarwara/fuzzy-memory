import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import { Box, Heading, VStack, Text, Input } from "@chakra-ui/react"

const PrivacyPolicyPage = () => {
    return (
        <Box>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <Box as="main" padding="2rem">
                {/* Page Title */}
                <Box textAlign="center" marginBottom="2rem">
                    <Heading as="h2" size="xl">
                        Privacy Policy
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
                    </Text>
                </Box>

                {/* Privacy Policy Content */}
                <Box maxW="800px" mx="auto">
                    <VStack spacing={4} textAlign="left">
                        <Heading as="h3" size="lg">
                            Information We Collect
                        </Heading>
                        <Text fontSize="lg">
                            We collect information that you provide directly to us, such as when you create a QR code, contact us for support, or provide feedback. This information may include your name, email address, and any other details you provide.
                        </Text>
                        <Heading as="h3" size="lg">
                            How We Use Information
                        </Heading>
                        <Text fontSize="lg">
                            We use the information we collect to:
                        </Text>
                        <Box as="ul" paddingLeft="1rem">
                            <Text as="li" marginBottom="1rem">
                                Provide, operate, and maintain our services.
                            </Text>
                            <Text as="li" marginBottom="1rem">
                                Improve, personalize, and expand our services.
                            </Text>
                            <Text as="li" marginBottom="1rem">
                                Understand and analyze how you use our services.
                            </Text>
                            <Text as="li" marginBottom="1rem">
                                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service.
                            </Text>
                            <Text as="li" marginBottom="1rem">
                                Process your transactions and send you related information, including purchase confirmations and invoices.
                            </Text>
                        </Box>
                        <Heading as="h3" size="lg">
                            How We Protect Your Information
                        </Heading>
                        <Text fontSize="lg">
                            We implement a variety of security measures to maintain the safety of your personal information. These measures include encryption, access controls, and secure data storage.
                        </Text>
                        <Heading as="h3" size="lg">
                            Sharing Your Information
                        </Heading>
                        <Text fontSize="lg">
                            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                        </Text>
                        <Heading as="h3" size="lg">
                            Changes to This Privacy Policy
                        </Heading>
                        <Text fontSize="lg">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </Text>
                        <Heading as="h3" size="lg">
                            Contact Us
                        </Heading>
                        <Text fontSize="lg">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </Text>
                        <Text fontSize="lg" backgroundColor={"gray.100"} padding={"1rem"} rounded={"3xl"}>
                            Email: <Text as="span" color="blue.500" fontWeight="bold" backgroundColor={"gray.50"} padding={"0.5rem"} rounded={"3xl"} cursor={"pointer"}>nikhilsarwara01@gmail.com</Text>
                        </Text>
                    </VStack>
                </Box>
            </Box>

            {/* Footer Section */}
            <Footer />
        </Box>

    )
}

export default PrivacyPolicyPage