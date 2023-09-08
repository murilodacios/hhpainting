import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightUpLine, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Contact() {

    return (
        <>


            <Stack bg="white" py="6" px="4" borderTop="1px solid #eee">
                <Stack px="4" direction={{base: "column", md: "row"}} maxW={1400} margin="0 auto" w="100%"  id="contact" spacing="8" gap="8" align="flex-start">

                    <Stack>
                        <Text fontWeight="500" fontSize="lg">Company</Text>
                        <Text>About HH Painting Painters</Text>
                        <Text>About HH Painting</Text>
                        <Text>About Services</Text>
                    </Stack>

                    <Stack>
                        <Text fontWeight="500" fontSize="lg">Contact</Text>
                        <Text>Call us now</Text>
                        <Text>3700 Windmeadows Blvd, Gainesville, FL 32608, United States of America</Text>
                    </Stack>

                </Stack>
            </Stack>


        </>
    )
}

