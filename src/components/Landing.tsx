import {Box, Text, Heading, Flex, VStack, HStack, useColorModeValue, useBreakpointValue} from "@chakra-ui/react";
import { FaBed, FaUsers } from "react-icons/fa";
import SearchForm from "./SearchForm.tsx";
import bannerBackground from "../assets/banner_background.jpg";

export default function Landing() {
    const bgOverlay = useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)');
    const mobileStatisticsAlign = useBreakpointValue({
        base: 'start',
        md: 'start',
        sm: 'center'
    });

    return (
        <Box>
            {/* Hero Section */}
            <Box
                position="relative"
                height={{ base: "60vh", md: "80vh" }}
                bgImage={bannerBackground}
                bgPosition="center"
                bgSize="cover"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg={bgOverlay}
                />
                <VStack
                    position="relative"
                    height="100%"
                    justify="center"
                    spacing={{ base: 4, md: 6 }}
                    px={{ base: 4, md: 8 }}
                >
                    <Heading
                        color="white"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        textAlign="center"
                    >
                        Welcome to Luxury Hotel
                    </Heading>
                    <Text
                        color="white"
                        fontSize={{ base: "md", md: "xl" }}
                        textAlign="center"
                        maxW="800px"
                    >
                        Experience unparalleled luxury and comfort in the heart of the city
                    </Text>
                </VStack>
            </Box>

            {/* Search Form Section */}
            <Box
                position="relative"
                mt={{ base: "-50px", md: "-70px" }}
                zIndex="1"
                px={{ base: 4, md: 8 }}
            >
                <SearchForm />
            </Box>

            {/* Statistics Section */}
            <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
                <Flex
                    maxW="1200px"
                    mx="auto"
                    direction={{ base: "column", md: "row" }}
                    align="center"
                    gap={{ base: 8, md: 12 }}
                >
                    <VStack flex="1" align={mobileStatisticsAlign} spacing={4}>
                        <Heading color={"gold.400"} size={{ base: "lg", md: "xl" }}>
                            Why Choose Us
                        </Heading>
                        <Text  textAlign={{base: 'start', md:'start', sm: 'center'}} fontSize={{ base: "md", md: "lg" }}>
                            Our hotel combines luxury with comfort, providing an unforgettable experience
                            for our guests since 1990.
                        </Text>

                        <HStack spacing={8} w="full">
                            <VStack flex="1" align="center">
                                <FaBed size={24} />
                                <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                                    150+
                                </Text>
                                <Text>Rooms</Text>
                            </VStack>
                            <VStack flex="1" align="center">
                                <FaUsers size={24} />
                                <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                                    10k+
                                </Text>
                                <Text>Happy Guests</Text>
                            </VStack>
                        </HStack>
                    </VStack>

                    {/* Map Section */}
                    <Box
                        flex="1"
                        h={{ base: "300px", md: "400px" }}
                        w="100%"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}