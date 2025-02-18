import {Box, Flex, IconButton, Link, Stack, Image, useBreakpointValue} from "@chakra-ui/react";
import {FiInfo, FiPhone} from "react-icons/fi";
import hotelLogo from '../assets/hotel_logo.jpg';

export function Header() {
    const navDisplay = useBreakpointValue({
        base: 'none',
        md: 'flex'
    });

    const mobileNavDisplay = useBreakpointValue({
        base: 'flex',
        md: 'none',
    });

    const logoHeight = useBreakpointValue({
        base: '30px',
        md: '40px',
        lg: '50px'
    });

    return (
        <Box as="header" position={"fixed"} zIndex={"10"} w={"100%"} bg="none" py={{base:2, md:4}} >
            <Flex
                maxW="1200px"
                mx="auto"
                px={{ base: 2, md: 4, lg: 6 }}
                justify="space-between"
                align="center"
            >
                <Link href="/">
                    <Image h={logoHeight} src={hotelLogo} alt="Hotel Logo" />
                </Link>

                <Stack
                    direction="row"
                    spacing={{ base: 2, md: 4, lg: 6 }}
                    display={navDisplay}
                >
                    <Link href="/about" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={"brand.50"}>Sobre nosotros</Link>
                    <Link href="/contact" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={"brand.50"}>Contacto</Link>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    display={mobileNavDisplay}
                >
                    <IconButton
                        aria-label="About us"
                        icon={<FiInfo />}
                        size={{ base: 'sm', sm: 'md' }}
                    />
                    <IconButton
                        aria-label="Contact"
                        icon={<FiPhone />}
                        size={{ base: 'sm', sm: 'md' }}
                    />
                </Stack>
            </Flex>
        </Box>
    );
}