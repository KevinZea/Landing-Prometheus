import {Button, Card, Flex, Heading, HStack, List, ListItem, Text, VStack} from '@chakra-ui/react'
import {FaBed, FaCheckSquare, FaRegCheckCircle, FaRegSquare, FaUsers} from 'react-icons/fa'
import {Room} from "../types.tsx";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useState} from "react";

interface RoomCardProps {
    room: Room
    handleToggleSelectFromRoom: (roomId: string, isSelected: boolean) => void;
}

export default function RoomCard({room, handleToggleSelectFromRoom}: RoomCardProps) {
    const [isSelected, setIsSelected] = useState(false);

    const benefits = [
        'Cancelación gratuita',
        'Sin pago por adelantado',
        'No requiere tarjeta de crédito',
        'Desayuno incluído'
    ]

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP'
    }).format(room.price)

    const handleSelection = () => {
        setIsSelected(!isSelected);
        handleToggleSelectFromRoom(room.id, isSelected);
    }

    return (
        <Card p={4} boxShadow="md" height="100%">
            <VStack spacing={4} align="stretch">
                <Splide options={{
                    type: 'loop',
                    heightRatio: 0.7,
                    pagination: 'false',
                    arrows: 'true',
                    cover: 'true',
                    lazyLoad: 'true'
                }}>
                    {room.photos.map((photo) => (
                        <SplideSlide key={photo.id}>
                            <img src={photo.url} alt={`Room image ${photo.id}`}
                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                        </SplideSlide>
                    ))}
                </Splide>
                <HStack justify="space-between" align="start">
                    <VStack align="start" spacing={2}>
                        <Heading size="md">{room.name}</Heading>
                        <HStack spacing={4}>
                            <VStack align="start" spacing={1}>
                                <Text fontSize="sm">Capacidad</Text>
                                <HStack align="center">
                                    <FaUsers/>
                                    <Text fontSize="sm">{room.capacity} personas</Text>
                                </HStack>
                            </VStack>
                            <VStack align="start" spacing={1}>
                                <Text fontSize="sm">Camas</Text>
                                <HStack>
                                    <FaBed/>
                                    <Text fontSize="sm">{room.beds} camas sencillas</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </VStack>
                    <VStack align="end">
                        <Text fontSize="xl" fontWeight="bold">
                            {formattedPrice}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            Por noche
                        </Text>
                    </VStack>
                </HStack>

                <List spacing={2}>
                    {benefits.map((benefit, index) => (
                        <ListItem key={index} fontSize="sm" color={"green.500"}>
                            <Flex fontWeight="bold" align="baseline">
                                <FaRegCheckCircle/>&nbsp;{benefit}
                            </Flex>

                        </ListItem>
                    ))}
                </List>

                <HStack justify="space-between" align="end" mt="auto">
                    <VStack align="start" spacing={0}>
                        <Text fontSize="sm">Total por estadia</Text>
                        <Text fontSize="lg" fontWeight="bold">
                            {formattedPrice}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                            Incluídos tasas e impuestos
                        </Text>
                    </VStack>
                    <Button color={"brand.800"} variant="ghost" onClick={handleSelection} display={"flex"} gap={2}>
                        {isSelected ? "Remover reserva" : "Añadir reserva" } {isSelected ? <FaCheckSquare size={24} color={"green"} /> : <FaRegSquare size={24} /> }
                    </Button>
                </HStack>
            </VStack>
        </Card>
    )
}