import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Contact() {

    return (
        <>


            <Stack maxW={1280} margin="0 auto" w="100%" p="20" bg="#0573E4" color="white" borderRadius="50px" mt="12" mb="12" id="contact" spacing="8">

                <Stack spacing="0">
                    <Text fontSize="4xl">We are building your future today.</Text>
                    <Text fontSize="2xl">
                        Our ability to deliver and exceed your expectations is what makes us so different.
                    </Text>
                </Stack>

                <HStack>
                    <Link href="tel:+13523542939">
                        <Button colorScheme="white" variant="outline" p="8">
                            <Text fontSize="2xl" >+1 352-354-2939</Text>
                        </Button>
                    </Link>
                </HStack>

            </Stack>


        </>
    )
}

