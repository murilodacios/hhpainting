import { Button, HStack, Stack, Text, Box, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Header() {

    return (
        <>
            <Stack bg="white" borderBottom="1px solid #eee" fontFamily="Inter">
                <HStack maxW={1400} w="100%" margin="0 auto" justify="space-between" align="center" px="4">
                    <HStack py="4" spacing={12}>
                        <Image src="/logo-simples.png" w="40px" />

                        <HStack spacing="4" color="gray.600" display={{ base: "none", md: "flex" }}>
                            <Link href="/#services">
                                <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Residential Painting</Text>
                            </Link>
                            <Link href="/#reviews">
                                <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Reviews</Text>
                            </Link>

                            <Link href="/#location">
                                <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Our Location</Text>
                            </Link>

                            <Link href="/#faq">
                                <Text cursor="pointer" _hover={{ color: "#0573E4" }}>FAQs</Text>
                            </Link>

                            <Link href="/#contact">
                                <Text cursor="pointer" _hover={{ color: "#0573E4" }}>Contact</Text>
                            </Link>
                        </HStack>
                    </HStack>

                    <HStack spacing="4" color="#0573E4">
                        <Link href="https://www.instagram.com/hhpaintingfl/">
                            <Icon cursor="pointer" as={RiInstagramFill} />
                        </Link>

                        <Link href="https://www.facebook.com/profile.php?id=100093172021168">
                            <Icon cursor="pointer" as={RiFacebookFill} />
                        </Link>

                        <Link href="tel:+13523542939">
                            <Button border="1px solid #ccc" borderRadius="20" color="#3E3E3E" px="8" bg="transparent">
                                Contact now
                            </Button>
                        </Link>

                    </HStack>

                </HStack>
            </Stack>

        </>
    )
}

