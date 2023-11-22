import { Button, HStack, Stack, Text, Box, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Header() {

    return (
        <>
            <Stack bg="#00132B" fontFamily="Inter" >
                <HStack maxW={1400} w="100%" margin="0 auto" justify="space-between" align="center" px="4" borderBottom="1px solid #001C3F;">
                    <HStack py="4" spacing={2} color="white">
                        <Image src="/logo.png" w="50px" color="white" />
                        <Text fontSize="lg" fontWeight="bold">HH Painting</Text>
                    </HStack>

                    <HStack
                        spacing="4"
                        color="white"
                        display={{ base: "none", md: "flex" }}
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="14px"
                    >
                        <Link href="/#services">
                            <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Residential Painting</Text>
                        </Link>
                        <Link href="/#reviews">
                            <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Reviews</Text>
                        </Link>

                        <Link href="/#team">
                            <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Our Team</Text>
                        </Link>

                        <Link href="/#faq">
                            <Text cursor="pointer" _hover={{ color: "#0573E4" }}>FAQs</Text>
                        </Link>
                    </HStack>

                    <HStack spacing="4" color="#fff" display={{base: "none", md: "flex"}}>
                        <Link href="https://www.instagram.com/hhpaintingfl/">
                            <Icon cursor="pointer" as={RiInstagramFill} />
                        </Link>

                        <Link href="https://www.facebook.com/profile.php?id=100093172021168">
                            <Icon cursor="pointer" as={RiFacebookFill} />
                        </Link>

                        <Link href="/quote">

                            <HStack
                                px="8"
                                py="2"
                                borderRadius="6"
                                bg="#0573E4"
                                color="white"
                                align="center"
                                justify="center"
                                cursor="pointer"
                                transition="0.3s all"
                                _hover={{
                                    bg: "blue.200",
                                    color: "#00132B"
                                }}
                            >
                                <Text fontSize={{ base: "sm", md: "sm" }}>Free quote</Text>

                            </HStack>

                        </Link>

                    </HStack>

                </HStack>
            </Stack>

        </>
    )
}

