import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Card from "../Card/Card";

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

            <Card />
        </Box>
    );
};

export default Home;
