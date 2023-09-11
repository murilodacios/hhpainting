import { Button, HStack, Stack, Text, Box, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiInstagramFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Header() {

    return (
        <>
            <Stack bg="#002042" borderBottom="1px solid #6C92A3" fontFamily="Inter">
                <HStack maxW={1400} w="100%" margin="0 auto" justify="space-between" align="center" px="4">
                    <HStack py="4" spacing={12}>
                        <Image src="/logo.png" w="40px" color="white"/>

                        <HStack spacing="8" color="gray.400" display={{ base: "none", md: "flex" }}>
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
                            <Button border="1px solid #0573E4" borderRadius="20" color="#fff" px="8" bg="transparent" _hover={{bg: "#002042"}}>
                                <Text fontSize="sm"> Contact now</Text>
                            </Button>
                        </Link>

                    </HStack>

                </HStack>
            </Stack>

        </>
    )
}

