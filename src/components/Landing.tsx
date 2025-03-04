import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useToast,
    VStack
} from "@chakra-ui/react";
import {
    FaBed,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaUsers,
    FaWhatsappSquare,
    FaYoutubeSquare
} from "react-icons/fa";
import SearchForm from "./SearchForm.tsx";
import bannerBackground from "../assets/banner_background.jpg";
import ServicesGallery from "./ServicesGallery.tsx";
import Service01 from "../assets/service01.jpg";
import Service02 from "../assets/service02.jpg";
import Service03 from "../assets/service03.jpg";
import Gallery01 from '../assets/gallery01.jpg';
import Gallery02 from '../assets/gallery02.jpg';
import Gallery03 from '../assets/gallery03.jpg';
import Gallery04 from '../assets/gallery04.jpg';
import Staff from "../assets/staff.jpg";

import HotelGallery from "./HotelGallery.tsx";
import AboutUs from "./AboutUs.tsx";
import {MdAlternateEmail} from "react-icons/md";
import {useEffect, useState} from "react";
import {Room} from "../types.tsx";
import {searchRooms} from "../services/api.tsx";
import SearchResults from "./SearchResults.tsx";

export default function Landing() {
    const [searchParams, setSearchParams] = useState<URLSearchParams>();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [userFetched, setUserFetched] = useState(false);
    const [loading, setLoading] = useState(true);
    const toast = useToast();

    const bgOverlay = useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)');
    const loremIpsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis eros quis nisi sodales lacinia nec vitae turpis. Suspendisse luctus commodo tellus id pulvinar. Cras gravida id tortor et tempus. Fusce suscipit enim non feugiat fermentum.";
    const hotelId: string = "cm7t3kif80002o301zqozycc0";
    const socialMediaIconSize = useBreakpointValue({base: 16, md: 22, lg: 36});

    useEffect(() => {
        const fetchRooms = async () => {
             if(searchParams != undefined) {
                 try {
                     const entryDateTime = new Date(searchParams.get('entryDate') as string);
                     const exitDateTime = new Date(searchParams.get('exitDate') as string);
                     const params = {
                         hotelId: hotelId,
                         entryDate: entryDateTime.toISOString(),
                         exitDate: exitDateTime.toISOString(),
                         adults: searchParams.get('adults'),
                         children: searchParams.get('children')
                     }
                     const data = await searchRooms(params);
                     setRooms(data);
                 } catch (error) {
                     toast({
                         title: "Ups!",
                         description: "Algo ha salido mal, reintenta más tarde.",
                         status: "error",
                         duration: 5000
                     });
                     console.log(error);
                 } finally {
                     setLoading(false);
                     setUserFetched(true);
                 }
             }
        }
        fetchRooms();
    }, [searchParams]);

    const handleSearchParamsFromForm = (data: URLSearchParams) => {
        setSearchParams(data);
    }

    const handleReservationCreated = () => {
        setSearchParams(undefined);
        setRooms([]);
        setUserFetched(false);
        setLoading(true);
    }



    return (
        <Box>
            <Box
                position="relative"
                height={{base: "60vh", md: "80vh"}}
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
                    spacing={{base: 4, md: 6}}
                    px={{base: 4, md: 8}}
                >
                    <Heading
                        color="white"
                        fontSize={{base: "3xl", md: "5xl"}}
                        textAlign="center"
                    >
                        Welcome to Luxury Hotel
                    </Heading>
                    <Text
                        color="white"
                        fontSize={{base: "md", md: "xl"}}
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
                mt={{base: "-50px", md: "-70px"}}
                zIndex="1"
                px={{base: 4, md: 8}}
                maxWidth={"1200px"}
                mx={"auto"}
                id={"reservationForm"}
            >
                <SearchForm sendSearchParams={handleSearchParamsFromForm} />
            </Box>

            <Box maxW={"1200px"} mx={"auto"} mt={'2rem'} px={{base: 4, md: 8}}>
                {(userFetched && searchParams!=undefined ) &&
                    <SearchResults hotelId={hotelId} searchParams={searchParams} loading={loading} rooms={rooms} reservationCreated={handleReservationCreated}/>
                }
            </Box>

            <Box maxW={"1200px"} mx={"auto"} mt={"2rem"} px={{base: 4, md: 8}}>
                <HotelGallery images={[
                    {imageUrl: Gallery01, imageAlt: "Hotel Lobby"},
                    {imageUrl: Gallery02, imageAlt: "Hotel Lobby Entrance"},
                    {imageUrl: Gallery03, imageAlt: "Hotel Restaurant"},
                    {imageUrl: Gallery04, imageAlt: "Hotel Building"}
                ]} />
            </Box>


            <Box maxW={"1200px"} mx={"auto"} px={{base: 4, md: 8}} id={'services'}>
                <ServicesGallery services={[
                    {
                        title: "Toallas limpias",
                        description: loremIpsum,
                        image: {
                            imageUrl: Service01,
                            imageAlt: "Towel Service"
                        }
                    },
                    {
                        title: "Desayunos gourmet",
                        description: loremIpsum,
                        image: {
                            imageUrl: Service02,
                            imageAlt: "Breakfast Service"
                        }
                    },
                    {
                        title: "Piscina 24/7",
                        description: loremIpsum,
                        image: {
                            imageUrl: Service03,
                            imageAlt: "Swimming pool Service"
                        }
                    }
                ]}/>
            </Box>

            {/* Statistics Section */}
            <Box py={{base: 8, md: 16}} px={{base: 4, md: 8}} maxW="1200px" mx="auto">
                <Flex
                    maxW="1200px"
                    mx="auto"
                    direction={{base: "column", md: "row"}}
                    align="center"
                    gap={{base: 8, md: 12}}
                >
                    <VStack flex="1" align={"center"} spacing={4}>
                        <Heading color={"gold.400"} size={{base: "lg", md: "xl"}}>
                            Why Choose Us
                        </Heading>
                        <Text textAlign={"center"} fontSize={{base: "md", md: "lg"}}>
                            Our hotel combines luxury with comfort, providing an unforgettable experience
                            for our guests since 1990.
                        </Text>

                        <HStack spacing={8} w="full">
                            <VStack flex="1" align="center">
                                <FaBed size={24}/>
                                <Text fontWeight="bold" fontSize={{base: "2xl", md: "3xl"}}>
                                    150+
                                </Text>
                                <Text>Rooms</Text>
                            </VStack>
                            <VStack flex="1" align="center">
                                <FaUsers size={24}/>
                                <Text fontWeight="bold" fontSize={{base: "2xl", md: "3xl"}}>
                                    10k+
                                </Text>
                                <Text>Happy Guests</Text>
                            </VStack>
                        </HStack>
                    </VStack>

                    {/* Map Section */}
                    <Box
                        flex="1"
                        h={{base: "300px", md: "400px"}}
                        w="100%"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                            width="100%"
                            height="100%"
                            style={{border: 0, borderRadius: '8px'}}
                            allowFullScreen
                            loading="lazy"
                        />
                    </Box>
                </Flex>
            </Box>

            <Box maxW={"1200px"} mx={"auto"} px={{base: 4, md: 8}} id={'aboutUs'}>
                <AboutUs image={{ imageUrl: Staff, imageAlt: "Staff Logo" }} text={loremIpsum}/>
            </Box>

            <Box maxW={"1200px"} mx={"auto"} my={4} px={{base: 4, md: 8}} id={'contact'}>
                <Stack align={"center"} direction={"column"} spacing={1}>
                    <Stack align={"center"} direction={"row"} justify={"center"} spacing={1}>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <FaFacebookSquare size={socialMediaIconSize}/>
                        </Button>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <FaInstagramSquare size={socialMediaIconSize}/>
                        </Button>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <FaYoutubeSquare size={socialMediaIconSize}/>
                        </Button>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <FaLinkedin size={socialMediaIconSize}/>
                        </Button>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <FaWhatsappSquare size={socialMediaIconSize}/>
                        </Button>
                        <Button color={"gold.50"} backgroundColor={"transparent"} _hover={{color: "gold.400", background: "transparent"}}>
                            <MdAlternateEmail size={socialMediaIconSize}/>
                        </Button>
                    </Stack>
                    <Divider />
                </Stack>
            </Box>


        </Box>
    );
}