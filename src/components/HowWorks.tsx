import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiHome2Line, RiInstagramFill, RiPaintBrushFill, RiPenNibLine, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function HowWorks() {

    return (
        <>

            <Stack bg="#fff" id="about" fontFamily="Inter">
                <Stack direction={{ base: "column", md: "row" }} spacing="8" maxW={1400} w="100%" margin="0 auto" my="12" p="4" justify="space-between" fontFamily="Inter" align="flex-start">
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
            </Stack>

            <Stack bg="#F5F8FD" id="about" p="4" fontFamily="Inter">

                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            How It Works
                        </Text>
                        <Text fontSize="xl" fontWeight={400} color="gray.600" textAlign="center">See how easy it is to get a quote with HH Painting
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} py="8" gap="6">

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Icon as={RiPenNibLine} fontSize="24" />
                            <Text color="gray.900" fontWeight={600}>Fill the form</Text>
                            <Text>Fill out our simple form</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Icon as={RiPhoneLine} fontSize="24" />
                            <Text color="gray.900" fontWeight={600}>Get a free quote</Text>
                            <Text>We will make a free quote for you</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20">
                            <Icon as={RiHome2Line} fontSize="24" />
                            <Text color="gray.900" fontWeight={600}>Your house painted</Text>
                            <Text>Your house painted in just a few days</Text>
                        </Stack>

                    </Grid>

                    <Stack align="center" py="4">
                        <Box>
                            <Link href="tel:+13523542939">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="6">
                                    <HStack px="12" py="6">
                                        <Text fontSize="md">I want a free quote!</Text>
                                        <Icon as={RiArrowRightLine} />
                                    </HStack>
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>

            </Stack>




        </>
    )
}

