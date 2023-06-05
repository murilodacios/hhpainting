import { Button, HStack, Stack, Text, Box, Icon, Image } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Header() {

    return (
        <>
            <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between" align="center" borderBottom="1px solid #eee">
                <HStack py="4">
                    <Image src="/logo-azul.svg" w="280px" />
                </HStack>

                <HStack spacing="8" color="gray.500">
                    <Text>Residential</Text>
                    <Text>Commercial</Text>
                    <Text>Reviews</Text>
                    <Text>About Us</Text>
                    <Text>Contact</Text>
                </HStack>

                <HStack spacing="4" color="#0573E4">
                    <Icon as={RiInstagramFill} />
                    <Icon as={RiFacebookFill} />
                </HStack>

            </HStack>

        </>
    )
}