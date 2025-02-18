import {Box, Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as={"footer"}
            bg={"gray.800"}
            color={"white"}
            py={{ base: 4, md: 6}}
            mt="auto"
        >
            <Text textAlign={"center"} fontSize={{ base: 'xs', md: 'sm'}}>
                © {new Date().getFullYear()} Luxury Hotel. Todos los derechos reservados.
            </Text>
        </Box>
    );
}