import React from "react";
import Slider from "react-slick";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

//npm install react-slick slick-carousel --> dependencias

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Me importo las imágenes
import carrousel1 from "../../assets/image/carrousel1.webp";
import carrousel2 from "../../assets/image/carrousel2.webp";
import carrousel3 from "../../assets/image/carrousel3.webp";
import carrousel4 from "../../assets/image/carrousel4.webp";

const Carousel = () => {
    //Configuración para el carrousel
    const settings = {
        dots: true,
        infinite: true, //Le digo que se reproduzca de forma infinita
        speed: 2000, //velocidad de 2 segundos
        slidesToShow: 1, //Que muestre una imagen por vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true, //Para el efecto de opacidad
    };

    return (
        <Box position="relative" width="full" h={{ base: "300px", md: "450px" }} overflow="hidden">
            <Slider {...settings}>
                {/* Mapeo las imágenes */}
                {[carrousel1, carrousel2, carrousel3, carrousel4].map((src, index) => (
                    <Box key={index} height="450px" display="flex" alignItems="start">
                        <img src={src} alt={`Carousel ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    </Box>
                ))}
            </Slider>

            {/* La caja con el texto sobre el carrousel */}
            <Box position="absolute" top="0" left="0" w={{ base: "200px", md: "40%" }} h="100%" p={4} display="flex" alignItems="center" justifyContent="center" bg="gray.700" opacity="0.9">
                <VStack spacing={4} color="white">
                    <Heading as="h1" size={{ base: "lg", md: "xl", lg: "2xl" }} textAlign="center">
                        Vive experiencias locales
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} textAlign="center" mb="5%">
                        Descubre los mejores aventuras!
                    </Text>
                    <Button colorScheme="yellow" size={{ base: "sm", md: "md", lg: "lg" }} rounded="full">
                        Explorar
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default Carousel;
