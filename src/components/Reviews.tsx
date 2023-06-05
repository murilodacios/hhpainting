import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";

export function Reviews() {

    return (
        <>
            <Stack maxW={1280} w="100%" margin="0 auto" py="8" id="reviews" p="4" mb="12">
                <Text fontSize={{ base: "3xl", md: "4xl" }} pt="8" fontWeight={400} lineHeight="1.2">See What Our Clients Say About Us</Text>
                <Text fontWeight={300} fontSize="lg">
                    Customer Reviews
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} pt="6">
                    <Stack direction={{ base: "column", md: "row" }}>
                        <Image src="/quote.jpg" w={{ base: "100%", md: "200px" }} />
                        <Stack bg="white" p="4">
                            <Icon as={RiChatQuoteFill} />
                            <Text>
                                HH Painting exceeded my expectations! Their attention to detail and professionalism were remarkable.
                                My home looks absolutely stunning now. Highly recommend!
                            </Text>
                            <Text fontWeight="bold">Sarah G.</Text>
                        </Stack>
                    </Stack>

                    <Stack direction={{ base: "column", md: "row" }}>
                        <Image src="/quote.jpg" w={{ base: "100%", md: "200px" }} />
                        <Stack bg="white" p="4">
                            <Icon as={RiChatQuoteFill} />
                            <Text>
                                I am extremely satisfied with the outstanding service provided by HH Painting. 
                                Their skilled team of painters transformed my commercial space into a masterpiece. 
                                The attention to detail and the quality of their work were impressive.
                            </Text>
                            <Text fontWeight="bold">Fred T.</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>


            </Stack>

        </>
    )
}

