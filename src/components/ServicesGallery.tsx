import {Service} from "../types.tsx";
import {Stack} from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard.tsx";

interface ServicesGalleryProps {
    services: Service[];
}

const ServiceGallery: React.FC<ServicesGalleryProps> = ({ services }) => {
    return (
        <Stack w={"w100%"} mt={"2rem"} direction={"column"} spacing={4}>
            {services.map((service: Service, index: number) => (
                <ServiceCard service={service} imagePosition={(index%2 === 0 ? 'left' : 'right')}/>
            ))}
        </Stack>
    );
}

export default ServiceGallery;