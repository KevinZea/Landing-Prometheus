import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

interface SearchParams {
    hotelId: string
    entryDate: string | null
    exitDate: string | null
    adults: string | null
    children: string | null
}

interface ReservationData {
    entryDate: string
    exitDate: string
    adults: number
    children: number
    name: string
    email: string
    phone: string
    roomsIds: string[]
    price: number
}

export const searchRooms = async (params: SearchParams) => {
    try {
        const { data } = await axios.get(`${API_URL}/rooms/find`, { params} )
        return data
    } catch (error) {
        console.error('Error searching rooms:', error)
        throw error
    }
}

export const createReservation = async (reservationData: ReservationData) => {
    try {
        const { data: reservation } = await axios.post(`${API_URL}/reservations`, reservationData)
        return reservation;
    } catch (error) {
        console.error('Error creating reservation:', error)
        throw error
    }
}

export const getHotelById = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_URL}/hotels/${id}`)
        return data
    } catch (error) {
        console.error('Error fetching hotel:', error)
        throw error
    }
}