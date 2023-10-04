import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiHome2Line, RiInstagramFill, RiPaintBrushFill, RiPenNibLine, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function HowWorks() {

    return (
        <>


            <Stack bg="#001024" id="about" p="4" fontFamily="Inter">

                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2" align="center" color="white">
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            How It Works
                        </Text>
                        <Text fontSize="2xl" fontWeight={400} textAlign="center">See how easy it is to get a quote with HH Painting
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} py="8" gap="6">

                        <Stack bg="linear-gradient(180deg, rgba(5, 115, 228, 0.14) 0%, rgba(5, 115, 228, 0.00) 100%)" backdropFilter="blur(23.5px)" color="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/1.svg" />
                            <Text fontWeight={600} fontSize="xl">Fill the form</Text>
                            <Text fontSize="lg">Fill out our simple form</Text>
                        </Stack>

                        <Stack bg="linear-gradient(180deg, rgba(5, 115, 228, 0.14) 0%, rgba(5, 115, 228, 0.00) 100%)" backdropFilter="blur(23.5px)" color="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/2.svg" />
                            <Text fontWeight={600} fontSize="xl">Get a free quote</Text>
                            <Text fontSize="lg">We will make a free quote for you</Text>
                        </Stack>

                        <Stack bg="linear-gradient(180deg, rgba(5, 115, 228, 0.14) 0%, rgba(5, 115, 228, 0.00) 100%)" backdropFilter="blur(23.5px)" color="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/3.svg" />
                            <Text fontWeight={600} fontSize="xl">Your house painted</Text>
                            <Text fontSize="lg">Your house painted in just a few days</Text>
                        </Stack>

                    </Grid>

                    <Stack align="center" pt="8">
                        <Box pb="8">
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
                </Stack>

            </Stack>




        </>
    )
}

