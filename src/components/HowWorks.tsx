import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiHome2Line, RiInstagramFill, RiPaintBrushFill, RiPenNibLine, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
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

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/pen.svg" />
                            <Text color="gray.900" fontWeight={600} fontSize="xl">Fill the form</Text>
                            <Text fontSize="lg">Fill out our simple form</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/telephone.svg" />
                            <Text color="gray.900" fontWeight={600} fontSize="xl">Get a free quote</Text>
                            <Text fontSize="lg">We will make a free quote for you</Text>
                        </Stack>

                        <Stack bg="white" p="8" transition="0.6s all" borderRadius="20" align="center">
                            <Image src="/home.svg" />
                            <Text color="gray.900" fontWeight={600} fontSize="xl">Your house painted</Text>
                            <Text fontSize="lg">Your house painted in just a few days</Text>
                        </Stack>

                    </Grid>

                    <Stack align="center" pt="8">
                        <Box pb="12">
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20" px="12" py="8">
                                    <HStack px="4" py="12">
                                        <Text fontSize="lg">I Want a Free Quote!</Text>
                                        <Icon as={RiArrowRightUpLine} />
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

