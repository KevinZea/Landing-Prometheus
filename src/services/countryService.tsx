import axios from 'axios';
import {Country} from '../types.tsx';

interface ApiCountry {
    translations: {
        spa: {
            common: string;
        };
    };
    idd: {
        root: string;
        suffixes?: string[];
    };
}

export const fetchCountries = async (): Promise<Country[]> => {
    try {
        const response = await axios.get<ApiCountry[]>('https://restcountries.com/v3.1/all');
        return response.data.map((country): Country => ({
            name: country.translations.spa.common,
            code: country.idd.root + (country.idd.suffixes?.[0] || ''),
        }));
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
};
