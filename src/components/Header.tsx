import { Button, HStack, Stack, Text, Box, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Header() {

    return (
        <>
            <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between" align="center" borderBottom="1px solid #eee" px="4">
                <HStack py="4">
                    <Image src="/logo-azul.svg" w="280px" />
                </HStack>

                <HStack spacing="8" color="gray.500" display={{base: "none", md: "flex"}}>
                    <Link href="/#services">
                        <Text cursor="pointer" _hover={{color: "#0573E4"}}>Residential</Text>
                    </Link>
                    <Link href="/#services">
                        <Text cursor="pointer" _hover={{color: "#0573E4"}}>Commercial</Text>
                    </Link>

                    <Link href="/#reviews">
                        <Text cursor="pointer" _hover={{color: "#0573E4"}}>Reviews</Text>
                    </Link>

                    <Link href="/#about">
                        <Text cursor="pointer" _hover={{color: "#0573E4"}}>About Us</Text>
                    </Link>

                    <Link href="/#contact">
                        <Text cursor="pointer" _hover={{color: "#0573E4"}}>Contact</Text>
                    </Link>
                </HStack>

                <HStack spacing="4" color="#0573E4">
                    <Link href="https://www.instagram.com/hhpaintingfl/">
                        <Icon cursor="pointer" as={RiInstagramFill} />
                    </Link>

                    <Link href="https://www.facebook.com/profile.php?id=100093172021168">
                        <Icon cursor="pointer" as={RiFacebookFill} />
                    </Link>
                </HStack>

            </HStack>

        </>
    )
}

