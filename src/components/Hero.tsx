import { Button, HStack, Stack, Text, Box, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { Ri24HoursLine, RiArrowRightLine, RiArrowRightUpLine, RiChat1Line, RiPaintBrushLine } from "react-icons/ri";

export function Hero() {

    return (
        <>
            <Stack bg="#00132B" bgSize="cover">

                <Stack maxW={1400} w="100%" margin="0 auto" justify="center" align="center" fontFamily="Inter" fontStyle="normal" px="4">

                    {/* <Box borderRadius="356px" right={{ base: "0", md: "0" }} top={{ base: "20", md: "100" }} bg="rgba(5, 115, 228, 0.60)" filter="blur(160.5px);" position="absolute" w={{ base: "200px", md: "300px" }} h={{ base: "200px", md: "300px" }} />
                    <Box borderRadius="356px" left={{ base: "0", md: "-20" }} top={{ base: "500", md: "300" }} bg="rgba(5, 115, 228, 0.70)" filter="blur(160.5px);" position="absolute" w={{ base: "200px", md: "300px" }} h={{ base: "200px", md: "300px" }} /> */}

                    <Stack py={{ base: "8", md: "8" }} color="white" textAlign="center">

                        <Stack p={{ base: "2", md: "6" }} maxW="900px" margin="0 auto">
                            <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={500} lineHeight="1.1">Finally, a whole team to make <Text as="span" color="#2992FF">your home more beautiful</Text></Text>

                            <Stack pt="2" px={{ base: "4", md: "12" }} color="#fff">
                                <Text fontSize={{ base: "md", md: "xl" }} lineHeight="1.8" textAlign="center">We will paint your beautiful home to make it the most stunning in the neighborhood.</Text>
                            </Stack>
                        </Stack>

                        <SimpleGrid gap="2" columns={{ base: 1, md: 2 }}>

                            <Link href="/quote">

                                <HStack
                                    px="8"
                                    py="3"
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
                                    <Text fontSize={{ base: "md", md: "md" }}>Get a free quote now</Text>
                                    <Icon as={RiArrowRightLine} />
                                </HStack>

                            </Link>

                            <Link href="/#services">

                                <HStack
                                    px="8"
                                    py="3"
                                    borderRadius="6"
                                    bg="white"
                                    color="#00132B"
                                    align="center"
                                    justify="center"
                                    cursor="pointer"
                                    transition="0.3s all"
                                    _hover={{
                                        bg: "blue.200",
                                        color: "#00132B"
                                    }}
                                >
                                    <Text fontSize={{ base: "md", md: "md" }}>See our work</Text>
                                    <Icon as={RiArrowRightLine} />
                                </HStack>

                            </Link>

                        </SimpleGrid>

                        <Stack direction={{ base: "column-reverse", md: "column" }} align="center" pt="8">
                            <Image src="/stars.png" w="120px" />
                            <Image src="/google.png" w="120px" />
                            <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                <HStack cursor="pointer">
                                    <Text>We are 5 stars on Google </Text>
                                    <Icon as={RiArrowRightUpLine} />
                                </HStack>
                            </Link>


                        </Stack>

                    </Stack>


                    {/* <Stack justify="center" align="center" p={{ base: 2, md: 12 }} pb="12">
                            <Image src="/feliciano-e-pai.jpg" borderRadius={20} />
                        </Stack> */}

                </Stack>

            </Stack>


            <Stack bg="#000A17">
                <Stack maxW={1400} w="100%" margin="0 auto" px="4" py="8" gap="12" justify="space-between" align="flex-start" fontFamily="Inter">

                    <SimpleGrid columns={{ base: 1, md: 3 }} maxW="1000px" margin="0 auto" gap="4" >

                        <Image src="/hero/1.png" />
                        <Image src="/hero/2.png" />
                        <Image src="/hero/3.png" />

                    </SimpleGrid>


                    <SimpleGrid columns={{ base: 1, md: 3 }} w="100%" gap="4">

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={RiPaintBrushLine} fontSize="50" />
                            <Text fontSize="lg">Personalized Painting</Text>
                        </Stack>

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={RiChat1Line} fontSize="50" />
                            <Text fontSize="lg">Continuous feedback</Text>
                        </Stack>

                        <Stack border="1px solid #0573E4" backdropFilter="blur(23.5px)" background="rgba(5, 115, 228, 0.14)" borderRadius="10px" color="white" p="8" align="center">
                            <Icon as={Ri24HoursLine} fontSize="50" />
                            <Text fontSize="lg">24 Hours support</Text>
                        </Stack>

                    </SimpleGrid>

                </Stack>
            </Stack>





        </>
    )
}

