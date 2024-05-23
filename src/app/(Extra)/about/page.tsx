import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Link,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';

const AboutPage = () => {
    return (
        <Box>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <Box as="main" padding="2rem">
                {/* Page Title */}
                <Box textAlign="center" marginBottom="2rem">
                    <Heading as="h2" size="xl">
                        About Us
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Learn more about our mission and the team behind QR Code Generator.
                    </Text>
                </Box>

                {/* About Content */}
                <Box maxW="800px" mx="auto">
                    <VStack spacing={4} textAlign="left">
                        <Text fontSize="lg">
                            QR Code Generator is an innovative tool designed to help you create customizable QR codes effortlessly. Our mission is to simplify the process of generating QR codes for various purposes, making it accessible for everyone.
                        </Text>
                        <Text fontSize="lg">
                            Whether you're a business owner looking to create QR codes for your products, a marketer aiming to engage customers through interactive campaigns, or an individual wanting to share information quickly, our application provides all the features you need.
                        </Text>
                        <Text fontSize="lg">
                            Our team is passionate about technology and user experience. We are dedicated to continuously improving our application to meet your needs and exceed your expectations.
                        </Text>
                        <Heading as="h3" size="lg">
                            Our Team
                        </Heading>
                        <Text fontSize="lg">
                            We are a group of developers, designers, and tech enthusiasts committed to delivering high-quality software solutions. Our diverse backgrounds and expertise enable us to innovate and create tools that make a difference.
                        </Text>
                        <Text fontSize="lg">
                            Thank you for choosing QR Code Generator. We look forward to helping you create amazing QR codes!
                        </Text>
                    </VStack>
                </Box>
            </Box>

            {/* Footer Section */}
            <Footer />
        </Box>
    );
};

export default AboutPage;
