import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function About() {

    return (
        <>
            <Stack bg="#F5F8FD" id="about" p="4" fontFamily="Inter">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2" align="center">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4" textAlign="center">Your home transformed in a few simple steps</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            We have the perfect plan for transforming your <br></br>home and making your dreams come true.
                        </Text>
                        <Text fontSize="xl" fontWeight={400} color="gray.600" textAlign="center">With HH Painting, you can rely on a professional and dedicated team that provides exceptional painting services,<br></br> adding value and transforming your spaces.</Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} py="8" gap="6">

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Image src="/rain.svg" />
                            <Text color="gray.900" fontWeight={600}>Maximum-speed delivery</Text>
                            <Text>We deliver your paint job at a speed like never before, respecting your time and valuing our efficiency</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Image src="/telephone.svg" />
                            <Text color="gray.900" fontWeight={600}>Continuous feedback</Text>
                            <Text>You will never be left in the dark about the progress of your project; we give you the attention you deserve.</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Image src="/hour.svg" />
                            <Text color="gray.900" fontWeight={600}>Lifetime support</Text>
                            <Text>The delivery of your project is just the beginning of our work. When you work with us, you will always be our partner.</Text>
                        </Stack>

                    </Grid>
                </Stack>
            </Stack>




        </>
    )
}

