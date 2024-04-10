import React from "react";
import { Card, HStack, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/ugo1500.png";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <Card w="100%" bg="gray.700" p="8">
            <HStack justifyContent="space-between" w="100%">
                <Image src={logo} w="80px" mr="10%" />
                <HStack>
                    <Link to="/">
                        <Button variant="ghost" color="gray.400" fontSize="large">
                            Inicio
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="ghost" color="gray.400" fontSize="large">
                            Contacto
                        </Button>
                    </Link>
                    <FaCartShopping size="1.2em"/>
                </HStack>
            </HStack>
        </Card>
    );
};

export default Navbar;
