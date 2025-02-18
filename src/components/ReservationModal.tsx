import React, { useState, useRef, useEffect } from "react";
import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
    HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createReservation } from "../services/api";
import { fetchCountries } from "../services/countryService";
import { Country } from "../types";
import { ReservationData, SearchParams } from "../types";

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
    room: {
        id: string;
        price: number;
    };
    searchParams: SearchParams;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
                                                               isOpen,
                                                               onClose,
                                                               room,
                                                               searchParams,
                                                           }) => {
    const cancelRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLElement>;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        country: "",
    });
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const fetchedCountries = await fetchCountries();
                const sortedCountries = fetchedCountries.sort((a, b) => a.name.localeCompare(b.name));
                setCountries(sortedCountries);
                if (sortedCountries.length > 0) {
                    setFormData(prev => ({
                        ...prev,
                        countryCode: sortedCountries[0].code,
                        country: sortedCountries[0].name
                    }));
                }
            } catch (error) {
                console.error("Error loading countries:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCountries();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData(prev => {
            if (name === "country") {
                const selectedCountry = countries.find(country => country.code === value);
                return {
                    ...prev,
                    country: value,
                    countryCode: selectedCountry ? selectedCountry.code : prev.countryCode,
                };
            }

            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async () => {
        const fullPhone = formData.countryCode + formData.phone;
        let reservationData: ReservationData;

        if (
            searchParams.entryDate &&
            searchParams.exitDate &&
            searchParams.adults &&
            parseInt(searchParams.adults) > 0 &&
            searchParams.children
        ) {
            const entryDateObj = new Date(searchParams.entryDate);
            const exitDateObj = new Date(searchParams.exitDate);
            const timeDiff = exitDateObj.getTime() - entryDateObj.getTime();
            const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
            const totalPrice = room.price * nights;

            reservationData = {
                entryDate: searchParams.entryDate,
                exitDate: searchParams.exitDate,
                adults: parseInt(searchParams.adults),
                children: parseInt(searchParams.children),
                name: formData.name,
                email: formData.email,
                phone: fullPhone,
                roomsIds: [room.id],
                price: totalPrice,
            };
        } else {
            return;
        }

        try {
            await createReservation(reservationData);
            toast({
                title: "Reservation confirmed",
                description: "Your reservation was successfully created.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onClose();
            navigate("/");
        } catch (error) {
            toast({
                title: "Reservation failed",
                description:
                    "There was an error creating your reservation. Please try again.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            console.log(error);
        }
    };

    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef!} onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent color="brand.800">
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Completa tu reservación
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <FormControl mb={4}>
                            <FormLabel>Nombre y apellido</FormLabel>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nombre completo"
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correo electrónico"
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>País/Región</FormLabel>
                            <Select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                {loading ? (
                                    <option>Loading...</option>
                                ) : (
                                    countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} {country.code}
                                        </option>
                                    ))
                                )}
                            </Select>
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Número de teléfono</FormLabel>
                            <HStack>
                                <Input
                                    name="countryCode"
                                    value={formData.countryCode}
                                    isReadOnly
                                    width="80px"
                                    textAlign="center"
                                />
                                <Input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Número de teléfono"
                                    flex="1"
                                />
                            </HStack>
                        </FormControl>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef as React.Ref<HTMLButtonElement>} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme="blue" onClick={handleSubmit} ml={3}>
                            Reservar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default ReservationModal;
