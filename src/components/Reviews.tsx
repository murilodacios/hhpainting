import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";

export function Reviews() {

    return (
        <>

            <Stack bg="#F5F8FD" p="4" id="reviews">
                <Stack maxW={1280} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Reviews</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                            See What Our Clients Say About Us
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} py="8" gap="6">

                        <Stack direction={{ base: "column", md: "row" }}>
                            <Image src="/user-02.jpg" w={{ base: "100%", md: "200px" }} />
                            <Stack bg="white" p="4">
                                <Icon as={RiChatQuoteFill} />
                                <Text>
                                    HH Painting exceeded my expectations! Their attention to detail and professionalism were remarkable.
                                    My home looks absolutely stunning now. Highly recommend!
                                </Text>
                                <Text fontWeight="medium" color="#454545">Sarah G.</Text>
                            </Stack>
                        </Stack>

                        <Stack direction={{ base: "column", md: "row" }}>
                            <Image src="/user-01.jpg" w={{ base: "100%", md: "200px" }} />
                            <Stack bg="white" p="4">
                                <Icon as={RiChatQuoteFill} />
                                <Text>
                                    I couldn't be happier with the exceptional service provided by HH Painting. They transformed my outdated kitchen cabinets into a modern masterpiece. Thank you for a job well done!
                                </Text>
                                <Text fontWeight="medium" color="#454545">Joseph T.</Text>
                            </Stack>
                        </Stack>

                    </Grid>
                </Stack>
            </Stack>




        </>
    )
}

