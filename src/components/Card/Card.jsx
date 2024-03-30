import React from "react";
import { Box, Image, Text, Button, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import data from "../../data/data.json";

const Card = () => {
    return (
        <SimpleGrid columns={[1, null, 3]} spacing="6" mt="5%">
            {data.map((event) => (
                <Box key={event.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                    <Image src={event.imageUrl} alt={`Imagen de ${event.place}`} />
                    <VStack align="start" mt={4}>
                        <Heading size="md">{event.place}</Heading>
                        <Text fontWeight="bold">{`Precio por noche: $${event.pricePerNight}`}</Text>
                        <Text textAlign="left" mb="2%">
                            {event.description}
                        </Text>
                        <Button colorScheme="teal" size="sm">
                            Reservar
                        </Button>
                    </VStack>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default Card;
