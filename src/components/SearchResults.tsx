import {Box, Button, SimpleGrid, Text, useDisclosure, useToast} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import RoomCard from '../components/RoomCard'
import {Room} from "../types.tsx";
import ReservationModal from "./ReservationModal.tsx";

interface SearchResultsProps {
    hotelId: string;
    searchParams: URLSearchParams;
    loading: boolean;
    rooms: Room[];
    reservationCreated: () => void;
}

export default function SearchResults({hotelId, searchParams, loading, rooms, reservationCreated}: SearchResultsProps) {
    const toast = useToast()
    const [selectedRooms, setSelectedRooms] = useState<string[]>([])
    const [roomList, setRoomList] = useState<Room[]>([])
    const [isSelected, setSelected] = useState<boolean>(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleToggleSelectFromRoom = (roomId: string, isSelected: boolean) => {
        const list: string[] = selectedRooms;
        if (!isSelected) {
            list.push(roomId);
        } else {
            list.splice(list.indexOf(roomId), 1);
        }
        setSelected(list.length > 0);
        setSelectedRooms(list);
    };

    useEffect(() => {}, [loading, rooms, selectedRooms, toast]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit');
        const list: Room[] = [];
        for(const room of rooms) {
            if(selectedRooms.includes(room.id)) {
                list.push(room);
            }
        }
        setRoomList(list);
    }

    useEffect(() => {
        if(roomList.length > 0) {
            onOpen();
            console.log('trying')
        }
    }, [roomList]);

    const handleReservationCreated = () => {
        setSelectedRooms([]);
        setRoomList([]);
        setSelected(false);
        reservationCreated();
    }

    if (loading) {
        return <Box p={8} mt={20}>Loading...</Box>
    }

    if (rooms.length === 0) {
        return (
            <Box p={8} mt={20} textAlign="center">
                <Text fontSize="xl">
                    No rooms available for the selected dates. Please try different dates.
                </Text>
            </Box>
        )
    }

    return (
        <Box w={"100%"} maxW={"100%"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2, xl: 3 }}
                spacing={{ base: 4, md: 6 }}
                mx="auto"
                mb={4}
            >
                {rooms.map(room => (
                    <RoomCard
                        key={room.id}
                        room={room}
                        handleToggleSelectFromRoom={handleToggleSelectFromRoom}
                    />
                ))}
            </SimpleGrid>
            {isSelected && (
                <Box
                    position="sticky"
                    bottom={4}
                    zIndex={10}
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    px={4}
                >
                    <Button onClick={handleSubmit} variant={'solid'} colorScheme={'green'} size={'lg'} boxShadow={'md'} mx={'auto'}>
                        Completar reserva
                    </Button>
                </Box>
            )}

            <ReservationModal
                isOpen={isOpen}
                onClose={onClose}
                rooms ={roomList}
                searchParams={{
                    hotelId: hotelId,
                    entryDate: searchParams.get('entryDate'),
                    exitDate: searchParams.get('exitDate'),
                    adults: searchParams.get('adults'),
                    children: searchParams.get('children')
                }}
                reservationCreated={handleReservationCreated}
            />
        </Box>
    )
}