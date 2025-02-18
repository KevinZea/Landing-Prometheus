import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    Stack
} from "@chakra-ui/react";

interface SearchFormData {
    entryDate: string,
    exitDate: string,
    adults: number,
    children: number;
}

export default function SearchForm() {
    const [search, setSearch] = useState<SearchFormData>({
        entryDate: '',
        exitDate: '',
        adults: 1,
        children: 0
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(search as unknown as Record<string, string>);
        navigate("/search?" + params.toString());
    }

    return (
        <Box
            as={"form"}
            bg={"brand.50"}
            color={"brand.800"}
            p={{ base: 4, md: 6, lg: 8}}
            borderRadius={"lg"}
            boxShadow={"xl"}
            width={{base: "90%", md: "70%", lg: "50%"}}
            mx={"auto"}
            onSubmit={handleSubmit}
        >
            <Stack spacing={{ base: 3, md: 4, lg: 5 }}>
                <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Check-in</FormLabel>
                    <Input
                        type="date"
                        value={search.entryDate}
                        onChange={e => setSearch(s => ({ ...s, entryDate: e.target.value }))}
                        size={{ base: 'sm', md: 'md' }}

                    />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Check-out</FormLabel>
                    <Input
                        type="date"
                        value={search.exitDate}
                        onChange={e => setSearch(s => ({ ...s, exitDate: e.target.value }))}
                        size={{ base: 'sm', md: 'md' }}
                    />
                </FormControl>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 3, md: 4 }}>
                    <FormControl>
                        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Adultos</FormLabel>
                        <NumberInput min={1} value={search.adults} size={{ base: 'sm', md: 'md' }}>
                            <NumberInputField
                                onChange={e => setSearch(s => ({ ...s, adults: parseInt(e.target.value) }))}
                            />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Niños</FormLabel>
                        <NumberInput min={0} value={search.children} size={{ base: 'sm', md: 'md' }}>
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
                    Search
                </Button>
            </Stack>
        </Box>
    );
}