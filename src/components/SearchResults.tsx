import { Box, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import RoomCard from '../components/RoomCard'
import { searchRooms } from '../services/api'
import {Room} from "../types.tsx";

interface SearchResultsProps {
    hotelId: string;
}

export default function SearchResults({hotelId}: SearchResultsProps) {
    const [searchParams] = useSearchParams()
    const [rooms, setRooms] = useState<Room[]>([])
    const [loading, setLoading] = useState(true)
    const toast = useToast()

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const entryDateTime = new Date(searchParams.get('entryDate') as string);
                const exitDateTime = new Date(searchParams.get('exitDate') as string);
                const params = {
                    hotelId: "cm7agdu2t0006ne0w5rh1jc0s",
                    entryDate: entryDateTime.toISOString(),
                    exitDate: exitDateTime.toISOString(),
                    adults: searchParams.get('adults'),
                    children: searchParams.get('children')
                }
                const data = await searchRooms(params)
                setRooms(data)
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Failed to fetch available rooms",
                    status: "error",
                    duration: 5000,
                });
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchRooms()
    }, [searchParams, toast])

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
        <Box p={{ base: 4, md: 8 }} mt={20}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
                spacing={{ base: 4, md: 6 }}
                maxW="1200px"
                mx="auto"
            >
                {rooms.map(room => (
                    <RoomCard
                        key={room.id}
                        room={room}
                        searchParams={{
                            hotelId: hotelId,
                            entryDate: searchParams.get("entryDate"),
                            exitDate: searchParams.get("exitDate"),
                            adults: searchParams.get("adults"),
                            children: searchParams.get("children")
                        }}
                    />
                ))}
            </SimpleGrid>
        </Box>
    )
}