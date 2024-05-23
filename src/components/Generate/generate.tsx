"use client"

import Footer from "../Footer/footer"
import Header from "../Header/header"
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Image, Spacer } from "@chakra-ui/react"
import React from "react"

const Generate = () => {
    // State to store the input value
    const [inputValue, setInputValue] = React.useState('');

    // State to store image source
    const [imageSrc, setImageSrc] = React.useState('');

    // Function to handle input change
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const clearInputChange = () => {
        setInputValue('');
    };

    const DownloadImage = () => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = imageSrc;
        link.click();
    };

    // Function to handle form submission
    const handleGenerateQRCode = async () => {
        // Call qr code api
        const baseUrl = process.env.NEXT_PUBLIC_QR_CODE_URL
        const qrCodeUrl = `${baseUrl}data=${inputValue}`;

        const response = await fetch(qrCodeUrl);
        const data = await response.blob();
        const url = URL.createObjectURL(data);

        // Set image source
        setImageSrc(url);

        // Clear input field
        clearInputChange();
    };

    return (
        <Box>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <Box p={8}>
                <Heading size="lg" mb={4}>Generate QR Code</Heading>
                <Text mb={4}>Enter the text or URL you want to encode:</Text>
                <FormControl>
                    <FormLabel htmlFor="qr-text">Text or URL</FormLabel>
                    <Input type="text" id="qr-text" placeholder="Enter text or URL" value={inputValue} onChange={handleInputChange} />
                </FormControl>
                <Flex mt={4}>
                    <Button colorScheme="blue" mr={4} onClick={handleGenerateQRCode}>Generate QR Code</Button>
                    <Button variant="outline" onClick={clearInputChange}>Clear</Button>
                </Flex>
            </Box>

            {/* QR Code Canvas */}
            <Box p={8}>
                <Heading size="lg" mb={4}>QR Code</Heading>
                <Container>
                    <Flex flexDirection={"column"} padding={"2rem"} justifyContent={"center"} backgroundColor={"gray.100"} rounded={"3xl"}>
                        <Image src={imageSrc || 'https://akrdesignstudio.com/cdn/shop/products/benicetoyou_S2_300x300.jpg?v=1536822656'} id="qrcode" alt="QR Code" rounded={"3xl"} padding={"1rem"} />

                        {/* Spacer */}
                        <Spacer />

                        {/* Download QR Code Button */}
                        <Flex>
                            <Button colorScheme="blue" mr={4} onClick={DownloadImage}>Download QR Code</Button>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            {/* Footer Section */}
            <Footer />
        </Box>
    )
}

export default Generate

function useState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
