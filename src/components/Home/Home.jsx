import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Home = () => {
    return (
        <Box textAlign="center" py={10}>
            <Heading as="h1" mb={4}>
                Bienvenido al Marketplace de Eventos Turísticos
            </Heading>
            <Text fontSize="lg" mb={4}>
                Descubre los mejores eventos turísticos alrededor del mundo.
            </Text>
            <Button bgColor="orange.400" size="lg">
                Explora Eventos
            </Button>
            <Box mt="4%" mb="4%">
                <Carousel />
            </Box>

            <Card />
        </Box>
    );
};

export default Home;
