import { Button, HStack, Stack, Text, Box, Icon, Image, SimpleGrid, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { Ri24HoursLine, RiArrowRightLine, RiArrowRightUpLine, RiChat1Line, RiPaintBrushLine } from "react-icons/ri";

export function Hero() {

    return (
        <>
            <Stack bg="#00132B" bgSize="cover">

                <Stack maxW={1400} w="100%" margin="0 auto" justify="center" align="center" fontFamily="Inter" fontStyle="normal" px="4">

                    <Box display={{base: "none", md: "inline-block"}} borderRadius="6" right={{ base: "0", md: "10" }} top={{ base: "200", md: "100" }} bg="rgba(255, 255, 255, 1)" position="absolute" w="400px" p="2">
                        <HStack>
                            <Avatar src='https://assets.propmark.com.br/uploads/2023/03/Viviane-Pepe---Diretora-de-Comunica--o-da-Avon-Brasil--2-.jpg' size="sm"/>
                            <Text fontSize="sm">The house looks amazing. I love it! So much attention to detail</Text>
                        </HStack>
                    </Box>
                    <Box display={{base: "none", md: "inline-block"}} borderRadius="6" left={{ base: "0", md: "10" }} top={{ base: "900", md: "370" }} bg="#001C3F" color="white" position="absolute" w="400px" p="2">
                        <HStack>
                            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJD8PDMwQdWoOyixztYSO2heQSLRjxEq5XFg&usqp=CAU' size="sm"/>
                            <Text fontSize="sm">These guys were the epitome of professionalism and quality work.</Text>
                        </HStack>
                    </Box>


                    <Stack py={{ base: "8", md: "12" }} color="white" textAlign="center">

                        <Stack p={{ base: "2", md: "12" }} maxW="960px" margin="0 auto">
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


            <Stack bg="#001023">

                <Stack maxW={1400} w="100%" margin="0 auto" px="4" py="8" gap="12" justify="space-between" align="flex-start" fontFamily="Inter">

                    <SimpleGrid columns={{ base: 1, md: 3 }} maxW="1000px" margin="0 auto" gap="4" >

                        <Image src="/hero/1.png" borderRadius="6" />
                        <Image src="/hero/2.png" borderRadius="6" />
                        <Image src="/hero/3.png" borderRadius="6" />

                    </SimpleGrid>

                </Stack>
            </Stack>





        </>
    )
}

