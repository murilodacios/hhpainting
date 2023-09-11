import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Hero() {

    return (


        // bg="linear-gradient(45deg, #0573E4 -7.72%, #0F1B27 137.61%);"
        <>
            <Stack bgImage="/back-hero.png" bgPos="center" bgSize="cover">

                <Grid maxW={1400} w="100%" margin="0 auto" fontFamily="Inter" fontStyle="normal" px="4" templateColumns={{ base: "1fr", md: "1fr 1fr" }} color="white">

                    <Stack py={{base: "12", md: "20"}} align="center" justify="center">
                        <Stack spacing="8" >
                            <Stack>
                                <Text fontSize={{base: "xl", md: "2xl"}} color="#88C3FF">More than just a painting, we are a partner for your home</Text>
                            </Stack>
                            <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight={500} lineHeight="1.1">Transform your home with <strong>HH Painting</strong></Text>

                            <Stack spacing="8" direction={{base: "column", md: "row"}}>
                                <Box>
                                    <Link href="tel:+13523542939">
                                        <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="6">
                                            <HStack px="12" py="6">
                                                <Text fontSize="md">Get a free quote now</Text>
                                                <Icon as={RiArrowRightLine} />
                                            </HStack>
                                        </Button>
                                    </Link>
                                </Box>

                                <Text>You can have all the free <br></br>quotes you need</Text>
                            </Stack>

                            <Stack>
                                <Image src="/stars.png" w="120px" />

                                <Link href="https://www.angi.com/companylist/us/fl/gainesville/hh-painting-reviews-10744644.htm">
                                    <HStack cursor="pointer">
                                        <Text>We are 5 stars on Angies List</Text>
                                        <Icon as={RiArrowRightUpLine} />
                                    </HStack>
                                </Link>

                            </Stack>

                        </Stack>

                    </Stack>

                    <Stack position="relative" justify="flex-end">
                        <Stack borderRadius="10" left={{ base: "20", md: "150" }} top={{base: "5",md: "10"}} bg="rgba(16, 20, 20, 0.10);" backdropFilter="blur(23.5px);" position="absolute" w={{base: "70px" , md: "90px"}} h={{base: "70px" , md: "90px"}} align="center" justify="center">
                            <Icon as={RiPaintBrushFill} fontSize="32" color="white" />
                        </Stack>

                        <Stack borderRadius="10" left="0" top={{base: "200", md: "300"}} bg="rgba(2, 10, 20, 0.10);" backdropFilter="blur(23.5px);" position="absolute" w={{base: "70px" , md: "90px"}} h={{base: "70px" , md: "90px"}} align="center" justify="center">
                            <Icon as={RiHome2Fill} fontSize="32" color="white" />
                        </Stack>

                        <Image src="/hero-section-man.png" />
                    </Stack>



                </Grid>

            </Stack>


            <Stack borderBottom="1px solid #eee">
                <HStack maxW={1400} w="100%" margin="0 auto" px="4" py="8" gap="12" justify="space-between" align="flex-start" fontFamily="Inter">
                    <Stack spacing="8" align="flex-start" direction={{base: "column", md: "row"}}>
                        <Text fontSize="md" fontWeight={500} color="#454545">
                            We transform your home to make it truly<br></br> yours and more vibrant. Just the way you <br></br>have always dreamed.
                        </Text>

                        <Stack spacing="2" color="#454545">
                            <Text fontSize="xl" fontWeight="bold">
                                +30 satisfied<br></br>
                                partners
                            </Text>
                        </Stack>
                    </Stack>


                    <Stack direction={{base: "column-reverse", md: "row"}} align="flex-start">
                        <Stack>
                            <Image src="/stars.png" w="120px" />
                            <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                <HStack cursor="pointer">
                                    <Text>We are 5 stars on Google</Text>
                                    <Icon as={RiArrowRightUpLine} />
                                </HStack>
                            </Link>
                        </Stack>

                        <Image src="/google.png" w="120px" />
                    </Stack>

                </HStack>
            </Stack>


            <Stack direction={{base: "column", md: "row"}} spacing="8" maxW={1400} w="100%" margin="0 auto" my="12" p="4" justify="space-between" fontFamily="Inter" align="flex-start">
                <Stack spacing="4">

                    <Stack bg="#88C3FF" w="100px" borderBottom="2px solid #88C3FF"><hr></hr></Stack>

                    <Stack>
                        <Text fontSize="lg" fontWeight={500} color="#454545">
                            We consider our customers as valuable<br></br> partners in every project, not just transactions.
                        </Text>

                        <Text fontSize="lg" fontWeight={500} color="gray.500">
                            (352) 354-2939
                        </Text>
                    </Stack>

                </Stack>


                <Stack spacing={4}>
                    <Text fontSize="lg" fontWeight={600} color="#454545">
                        We have the perfect plan for you
                    </Text>

                    <Text fontSize="md" fontWeight={500} color="gray.500">
                        Our residential painting services go beyond just painting. <br></br>We deliver customized solutions and a level of care that exceeds anything you have seen before.
                    </Text>

                    <Box>
                        <Link href="tel:+13523542939">
                            <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20">
                                <HStack px="6" py="6">
                                    <Text fontSize="md">Get a free quote now</Text>
                                    <Icon as={RiArrowRightUpLine} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </Stack>


            </Stack>


        </>
    )
}

