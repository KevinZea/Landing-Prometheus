import React from "react";
import {Image as ImageModel} from "../types.tsx";
import {Box, Button, Heading, Image, Stack, Text} from "@chakra-ui/react";

interface AboutUsProps {
    image: ImageModel;
    text: string;
}

const AboutUs: React.FC<AboutUsProps> = ({image, text}) => {

    return (
        <Box bgColor="gold.50" borderRadius="lg">
            <Stack direction={{base: "column", md:"row"}} spacing={2} justify="space-between">
                <Image
                    display={{base: "none", md: "block"}}
                    width={"50%"}
                    aspectRatio={1}
                    objectPosition="center"
                    src={image.imageUrl}
                    alt={image.imageAlt}
                    borderLeftRadius="lg"
                    objectFit="cover"
                />
                <Stack direction={"column"} p={10} align={"center"} justify="space-between">
                    <Stack direction={"column"} spacing={8} h={"50%"} textAlign={"center"} align={"center"}>
                        <Heading fontWeight={"bold"} fontSize={{base: "xl", md: "2xl"}} color={"brand.800"} textAlign={{base: 'center', md: 'start'}}>
                            ¿Quiénes somos?
                        </Heading>
                        <Text color={"brand.700"} fontSize={{base: "sm", md: "md", lg:"lg"}}>
                            {text}
                        </Text>
                    </Stack>
                    <Button
                        color={"brand.50"}
                        background={"brand.700"}
                        _hover={{
                            background: "brand.900"
                        }}
                        mt={8}
                    >
                        Contacta con nosotros
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );

};

export default AboutUs;