import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Contact() {

    return (
        <>
            <Stack bg="#0573E4" color="white" borderRadius="50px 50px 0 0" >
                <Stack maxW={1280} w="100%" margin="0 auto" py="12" align="center" p="4" mt="12">
                    <Text fontSize="4xl">Get in touch and speak with our consultants</Text>
                    <Text fontSize="2xl">
                        Our ability to deliver and exceed your expectations is what makes us so different.
                    </Text>

                    <HStack>
                        <Link href="tel:+13522786979">
                            <Button colorScheme="blue">
                                <Text fontSize="2xl" >+1 352-278-6979</Text>
                            </Button>
                        </Link>
                    </HStack>
                </Stack>
            </Stack>

        </>
    )
}

