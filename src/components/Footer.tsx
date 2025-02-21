import { Box, Divider, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            bg={"gray.800"}
            w={"100%"}
            py={{ base: 4, md: 6 }}
        >
            <Box
                maxW={"1200px"}
                mx={"auto"}
                px={{ base: 4, md: 8 }}
            >
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 4, md: 8 }}
                    justify="space-between"
                    align="flex-start"
                >
                    {/* Sobre Nosotros */}
                    <Box fontSize={{ base: "xs", md: "sm" }} w={{base: "100%", md: "auto"}}>
                        <Heading size={{ base: "sm", lg: "md" }}>Sobre Nosotros</Heading>
                        <Divider my={2} borderColor="brand.50" />
                        <VStack align="start" spacing={1}>
                            <Text>Hotel Luxury</Text>
                            <Text>Av. Principal 1234, Ciudad de Ejemplo</Text>
                            <Text>Email: info@luxuryhotel.com</Text>
                            <Text>Tel: +57 3XX XXX-XXXX</Text>
                        </VStack>
                    </Box>

                    <Divider
                        orientation="vertical"
                        display={{ base: "none", md: "block" }}
                        borderColor="brand.50"
                    />

                    {/* Reservas y Servicios */}
                    <Box fontSize={{ base: "xs", md: "sm" }} w={{base: "100%", md: "auto"}}>
                        <Heading size={{ base: "sm", lg: "md" }}>Reservas y Servicios</Heading>
                        <Divider my={2} borderColor="brand.50" />
                        <VStack align="start" spacing={1}>
                            <Link
                                href="#reservationForm"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Reserva Online
                            </Link>
                            <Link
                                href="#rooms"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Habitaciones
                            </Link>
                            <Link
                                href="#services"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Servicios del Hotel
                            </Link>
                            <Link
                                href="#offers"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Ofertas Especiales
                            </Link>
                        </VStack>
                    </Box>

                    <Divider
                        orientation="vertical"
                        display={{ base: "none", md: "block" }}
                        borderColor="brand.50"
                    />

                    {/* Información Legal */}
                    <Box fontSize={{ base: "xs", md: "sm" }} w={{base: "100%", md: "auto"}}>
                        <Heading size={{ base: "sm", lg: "md" }}>Información Legal</Heading>
                        <Divider my={2} borderColor="brand.50" />
                        <VStack align="start" spacing={1}>
                            <Link
                                href="#aboutUs"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Quiénes Somos
                            </Link>
                            <Link
                                href="#siteMap"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Mapa del Sitio
                            </Link>
                            <Link
                                href="#privacyPolicy"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="#terms"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Términos y Condiciones
                            </Link>
                        </VStack>
                    </Box>

                    <Divider
                        orientation="vertical"
                        display={{ base: "none", md: "block" }}
                        borderColor="brand.50"
                    />

                    {/* Conéctate */}
                    <Box fontSize={{ base: "xs", md: "sm" }} w={{base: "100%", md: "auto"}}>
                        <Heading size={{ base: "sm", lg: "md" }}>Conéctate</Heading>
                        <Divider my={2} borderColor="brand.50" />
                        <VStack align="start" spacing={1}>
                            <Link
                                href="https://www.facebook.com"
                                isExternal
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Facebook
                            </Link>
                            <Link
                                href="https://www.instagram.com"
                                isExternal
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Instagram
                            </Link>
                            <Link
                                href="https://www.twitter.com"
                                isExternal
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Twitter
                            </Link>
                            <Link
                                href="#newsletter"
                                _hover={{ textDecoration: "underline", color: "gray.300" }}
                            >
                                Suscríbete a nuestro Newsletter
                            </Link>
                        </VStack>
                    </Box>
                </Stack>

                <Divider my={4} borderColor="brand.50" />

                <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
                    © {new Date().getFullYear()} Luxury Hotel. Todos los derechos reservados.
                </Text>
            </Box>
        </Box>
    );
}
