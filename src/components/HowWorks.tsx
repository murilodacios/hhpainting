import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiHome2Line, RiInstagramFill, RiPaintBrushFill, RiPenNibLine, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function HowWorks() {

    return (
        <>
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

