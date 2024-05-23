import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Input,
    Textarea,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';

const ContactPage = () => {
    return (
        <Box>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <Box as="main" padding="2rem">
                {/* Page Title */}
                <Box textAlign="center" marginBottom="2rem">
                    <Heading as="h2" size="xl">
                        Contact Us
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        We`&apos;`d love to hear from you! Fill out the form below to get in touch.
                    </Text>
                </Box>

                {/* Contact Form */}
                <Box maxW="600px" mx="auto">
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Your Name</FormLabel>
                            <Input placeholder="Enter your name" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Your Email</FormLabel>
                            <Input type="email" placeholder="Enter your email" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Subject</FormLabel>
                            <Input placeholder="Enter the subject" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Message</FormLabel>
                            <Textarea placeholder="Enter your message" rows={6} />
                        </FormControl>
                        <Button colorScheme="teal" size="lg">
                            Send Message
                        </Button>
                    </VStack>
                </Box>
            </Box>

            {/* Footer Section */}
            <Footer />
        </Box>
    );
};

export default ContactPage;
