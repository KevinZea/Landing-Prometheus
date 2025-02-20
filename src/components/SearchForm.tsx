import React, {useState} from "react";
import {Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, Stack} from "@chakra-ui/react";
import {IoPersonSharp} from "react-icons/io5";
import {FaChild, FaPlaneArrival, FaPlaneDeparture} from "react-icons/fa";

interface SearchFormData {
    entryDate: string,
    exitDate: string,
    adults: number,
    children: number;
}

interface SearchFormProps {
    sendSearchParams: (params: URLSearchParams) => void;
}

const SearchForm = ({sendSearchParams}: SearchFormProps) => {
    const [search, setSearch] = useState<SearchFormData>({
        entryDate: '',
        exitDate: '',
        adults: 1,
        children: 0
    });

    const handleAdultsChange = (_valueString: string, valueNumber: number) => {
        setSearch(s => ({
            ...s,
            adults: isNaN(valueNumber) ? 0 : valueNumber
        }));
    };

    const handleChildrenChange = (_valueString: string, valueNumber: number) => {
        setSearch(s => ({
            ...s,
            children: isNaN(valueNumber) ? 0 : valueNumber
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(search as unknown as Record<string, string>);
        sendSearchParams(params);
    }

    return (
        <Box
            as={"form"}
            bg={"brand.50"}
            color={"brand.800"}
            p={{ base: 4, md: 6, lg: 8}}
            borderRadius={"lg"}
            boxShadow={"xl"}
            width={"100%"}
            mx={"auto"}
            onSubmit={handleSubmit}
            mt={{base: "-14vh", mm: "-14vh", lg:"-20vh"}}
        >
            <Stack spacing={{ base: 3, md: 4, lg: 5 }}>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 3, md: 4 }}>
                    <FormControl w={{base: "100%", md:"30%"}}>
                        <FormLabel
                            fontSize={{ base: 'sm', md: 'md' }}
                            display={['flex']}
                            alignItems={"center"}
                            gap={1}
                        >
                            <FaPlaneArrival />
                            Check-in
                        </FormLabel>
                        <Input
                            type="date"
                            value={search.entryDate}
                            onChange={e => setSearch(s => ({ ...s, entryDate: e.target.value }))}
                            size={{ base: 'sm', md: 'md' }}
                            placeholder="Date"
                        />
                    </FormControl>
                    <FormControl w={{base: "100%", md:"30%"}}>
                        <FormLabel
                            fontSize={{ base: 'sm', md: 'md' }}
                            display={['flex']}
                            alignItems={"center"}
                            gap={1}
                        >
                            <FaPlaneDeparture />
                            Check-out
                        </FormLabel>
                        <Input
                            type="date"
                            value={search.exitDate}
                            onChange={e => setSearch(s => ({ ...s, exitDate: e.target.value }))}
                            size={{ base: 'sm', md: 'md' }}
                        />
                    </FormControl>
                    <FormControl w={{base: "100%", md:"20%"}}>
                        <FormLabel
                            fontSize={{ base: 'sm', md: 'md' }}
                            display={['flex']}
                            alignItems={"center"}
                            gap={1}
                        >
                            <IoPersonSharp />
                            Adultos
                        </FormLabel>
                        <NumberInput min={1} value={search.adults} size={{ base: 'sm', md: 'md' }} onChange={handleAdultsChange}>
                            <NumberInputField
                                onChange={e => setSearch(s => ({ ...s, adults: parseInt(e.target.value) }))}
                            />
                        </NumberInput>
                    </FormControl>
                    <FormControl w={{base: "100%", md:"20%"}}>
                        <FormLabel
                            fontSize={{ base: 'sm', md: 'md' }}
                            display={['flex']}
                            alignItems={"center"}
                            gap={1}
                        >
                            <FaChild />
                            Niños
                        </FormLabel>
                        <NumberInput min={0} value={search.children} size={{ base: 'sm', md: 'md' }} onChange={handleChildrenChange}>
                            <NumberInputField
                                onChange={e => setSearch(s => ({ ...s, children: parseInt(e.target.value) }))}
                            />
                        </NumberInput>
                    </FormControl>
                </Stack>
                <Button
                    colorScheme="blue"
                    type="submit"
                    size={{ base: 'sm', md: 'md', lg: 'lg' }}
                    fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                >
                    Buscar
                </Button>
            </Stack>
        </Box>
    );
}

export default SearchForm;