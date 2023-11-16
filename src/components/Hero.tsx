import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { Ri24HoursLine, RiArrowRightLine, RiArrowRightUpLine, RiChat1Line, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPaintBrushLine, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";
import { Header } from "./Header";


export function Hero() {

    return (


        // bg="linear-gradient(45deg, #0573E4 -7.72%, #0F1B27 137.61%);"
        <>
            <Stack bgImage="/hero.png"  >

                <Stack maxW={1400} w="100%" margin="0 auto" justify="center" align="center" fontFamily="Inter" fontStyle="normal" px="4">

                    <Box borderRadius="356px" right={{ base: "0", md: "0" }} top={{ base: "20", md: "100" }} bg="rgba(5, 115, 228, 0.60)" filter="blur(122.5px);" position="absolute" w={{ base: "200px", md: "300px" }} h={{ base: "200px", md: "300px" }} />
                    <Box borderRadius="356px" left={{ base: "0", md: "-20" }} top={{ base: "500", md: "300" }} bg="rgba(5, 115, 228, 0.70)" filter="blur(122.5px);" position="absolute" w={{ base: "200px", md: "300px" }} h={{ base: "200px", md: "300px" }} />


                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} color="white">

                        <Stack py={{ base: "12", md: "20" }} align="center" justify="center">
                            <Stack spacing="6">

                                <Stack>
                                    <Text fontSize={{ base: "xl", md: "2xl" }} color="#88C3FF">Professional Painters</Text>
                                </Stack>

                                <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight={500} lineHeight="1.1">We Will Paint Your Beautiful House!</Text>

                                <Stack>
                                    <Text fontSize={{ base: "xl", md: "2xl" }} color="#fff">Be the most beautiful house in the neighborhood</Text>
                                </Stack>

                                <Stack spacing="8" direction={{ base: "column", md: "row" }}>
                                    <Box>
                                        <Link href="/quote">
                                            <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="10">
                                                <HStack px="12" py="4">
                                                    <Text fontSize="md">Get a free quote now</Text>
                                                    <Icon as={RiArrowRightLine} />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </Box>


                                </Stack>

                                <Stack direction={{ base: "column-reverse", md: "row" }} align="flex-start">
                                    <Stack>
                                        <Image src="/stars.png" w="120px" />
                                        <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                            <HStack cursor="pointer">
                                                <Text>We are 5 stars on Google </Text>
                                                <Icon as={RiArrowRightUpLine} />
                                            </HStack>
                                        </Link>
                                    </Stack>

                                    <Image src="/google.png" w="120px" />
                                </Stack>

                            </Stack>

                        </Stack>

                        <Stack justify="center" align="center" p={{ base: 2, md: 12 }} pb="12">
                            <Image src="/feliciano-e-pai.jpg" borderRadius={20} />
                        </Stack>
                    </Grid>
                </Stack>

            </Stack>


            <Stack bg="#001024">
                <Stack maxW={1400} w="100%" margin="0 auto" px="4" py="8" gap="12" justify="space-between" align="flex-start" fontFamily="Inter">

                    <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" gap="4">

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={RiPaintBrushLine} fontSize="50"/>
                            <Text fontSize="lg">Personalized Painting</Text>
                        </Stack>

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={RiChat1Line} fontSize="50"/>
                            <Text fontSize="lg">Continuous feedback</Text>
                        </Stack>

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={Ri24HoursLine} fontSize="50"/>
                            <Text fontSize="lg">24 Hours support</Text>
                        </Stack>

                    </SimpleGrid>

                </Stack>
            </Stack>





        </>
    )
}

