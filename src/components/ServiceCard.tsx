import {Service} from "../types.tsx";
import React from "react";
import {Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text} from "@chakra-ui/react";

interface ServiceCardProps {
    service: Service;
    imagePosition: 'right' | 'left';
}

const ServiceCard: React.FC<ServiceCardProps> = ({service, imagePosition = 'left'}) => {
    return (
        <Card
            flexDirection={{
                base: "column",
                md: imagePosition === 'right' ? 'row-reverse' : 'row'
            }}
            overflow="hidden" boxShadow={"md"}>
            <Image objectFit={"cover"} maxWidth={{ base:'100%', md: "40%"}} src={service.image.imageUrl} alt={service.image.imageAlt}/>
            <Stack w={{base: '100%', md: "60%"}} p={2}>
                <CardBody>
                    <Heading color={'brand.800'} size={{base: "md", md: "lg"}}>{service.title}</Heading>
                    <Divider my={2} color={'brand.800'}/>
                    <Text py={2} size={{base: 'xxs', md: 'xs'}}>{service.description}</Text>
                </CardBody>
                <CardFooter>
                    <Button variant={'solid'} colorScheme={'blue'}>
                        Obtener más información
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default ServiceCard;