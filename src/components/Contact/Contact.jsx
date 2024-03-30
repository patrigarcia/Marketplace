import React from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Acá manejamos la lógica de envío del formulario, como validar los datos y enviarlos a un servidor o API.
        alert("Formulario enviado");
    };

    return (
        <Box maxW="md" mx="auto" mt={10}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel htmlFor="name">Nombre</FormLabel>
                        <Input id="name" placeholder="Tu nombre" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" placeholder="Tu dirección de email" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel htmlFor="message">Mensaje</FormLabel>
                        <Textarea id="message" placeholder="Escribe tu mensaje aquí" />
                    </FormControl>

                    <Button type="submit" colorScheme="blue">
                        Enviar
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default Contact;
