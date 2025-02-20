import {Image} from "../types.tsx";
import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";

interface ImageGalleryProps {
    images: Image[]
}

const HotelGallery: React.FC<ImageGalleryProps> = ({images}: ImageGalleryProps) => {


    return (
        <Splide options={{
            type: 'loop',
            padding: '5rem',
            heightRatio: 0.7,
            pagination: 'false',
            arrows: 'true',
            cover: 'true',
            lazyLoad: 'true',
            autoplay: 'true',
            interval: 3000
        }}>
            {images.map((image, index) => (
                <SplideSlide key={index}>
                    <img src={image.imageUrl} alt={image.imageAlt} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default HotelGallery;
