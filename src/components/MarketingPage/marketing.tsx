import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    Stack,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Link from 'next/link';

const features = [
    'Customizable QR codes',
    'Easy to use interface',
    'Supports multiple data types',
    'Download in various formats',
];

const MarketingPage = () => {
    return (
        <Box>
            <Header />

            {/* Main Content */}
            <Box as="main" padding="2rem">
                {/* Tagline */}
                <Box textAlign="center" marginBottom="2rem">
                    <Heading as="h2" size="xl">
                        Create Custom QR Codes Effortlessly
                    </Heading>
                    <Text fontSize="lg" color="gray.500">
                        Generate QR codes for any purpose in just a few clicks.
                    </Text>
                </Box>

                {/* Features Section */}
                <VStack spacing={4} marginBottom="2rem">
                    <Heading as="h3" size="lg">
                        Key Features
                    </Heading>
                    <Stack direction={['column', 'row']} spacing={8}>
                        {features.map((feature) => (
                            <HStack key={feature} spacing={4} backgroundColor={"gray.100"} padding="1rem" borderRadius="md">
                                <TiTick fontSize="1.5rem" />
                                <Text fontSize="lg">{feature}</Text>
                            </HStack>
                        ))}
                    </Stack>
                </VStack>

                {/* How It Works Section */}
                <VStack spacing={4} marginBottom="2rem">
                    <Heading as="h3" size="lg">
                        How It Works
                    </Heading>
                    <Text fontSize="lg">
                        Follow these simple steps to create your custom QR code:
                    </Text>
                    <Box as="ol" paddingLeft="1rem">
                        <Text as="li" marginBottom="1rem">
                            Enter the data you want to encode (URL, text, etc.).
                        </Text>
                        <Text as="li" marginBottom="1rem">
                            Customize the design of your QR code (color, shape, etc.).
                        </Text>
                        <Text as="li" marginBottom="1rem">
                            Generate and download your QR code.
                        </Text>
                    </Box>
                </VStack>

                {/* Call-to-Action Section */}
                <Box textAlign="center" marginBottom="2rem">
                    <Button colorScheme="teal" size="lg" as={Link} href="/generate">
                        Start Generating QR Codes
                    </Button>
                </Box>
            </Box>

            <Footer />
        </Box >
    );
};

export default MarketingPage;
