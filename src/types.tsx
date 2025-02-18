export interface RoomPhoto {
    id: string;
    url: string;
}

export interface Room {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    beds: number;
    photos: RoomPhoto[];
}

export interface SearchParams {
    hotelId: string | null;
    entryDate: string | null;
    exitDate: string | null;
    adults: string | null;
    children: string | null;
}

export interface ReservationData {
    entryDate: string;
    exitDate: string;
    adults: number;
    children: number;
    name: string;
    email: string;
    phone: string;
    roomsIds: string[];
    price: number;
}

export interface Country {
    name: string;
    code: string;
}

