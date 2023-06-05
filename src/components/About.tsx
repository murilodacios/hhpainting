import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function About() {

    return (
        <>
            <Stack bg="gray.50" id="about" p="4">
                <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between">
                    <Grid templateColumns={{ base: "1fr", md: "1.1fr 1fr" }}>
                        <Stack pt="12" mt="6" spacing="6">
                            <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="gray.500">A helping hand to make<br></br> your dreams come true.</Text>
                            <Text fontWeight={300} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                                Transforming spaces, inspiring emotions. Experience the artistry of our painting services and elevate your surroundings.
                            </Text>
                            <Stack maxWidth="100%">
                                <Image pt="8" src="house.png" width="100%" />
                            </Stack>
                        </Stack>

                        <Stack spacing="8" p="6" justify="center">

                            <Text fontSize="xl" fontWeight={400} color="gray.600">With HH Painting, you can rely on a professional and dedicated team that provides exceptional painting services, adding value and transforming your spaces.</Text>


                            <Text color="gray.600">● <Text as="strong" color="gray.700">Proven Expertise:</Text> With years of experience in the industry, our team has the knowledge and skill necessary to deliver high-quality results.</Text>

                            <Text color="gray.600">● <Text as="strong" color="gray.700">Personalized Service:</Text> We value each client and strive to understand their specific needs, offering customized and tailored service that meets their expectations.</Text>

                            <Text color="gray.600">● <Text as="strong" color="gray.700">Superior Quality:</Text> We only use high-quality materials and advanced painting techniques to ensure exceptional and long-lasting results.</Text>

                            <Text color="gray.600">● <Text as="strong" color="gray.700">Punctuality:</Text> We strictly adhere to agreed-upon deadlines, ensuring that your project is completed within the established timeframe.</Text>

                            <Text color="gray.600">● <Text as="strong" color="gray.700">Transparent Communication:</Text> We maintain clear and open communication with our clients, keeping them informed about the projects progress and promptly addressing any questions or concerns.</Text>

                            <Text color="gray.600">● <Text as="strong" color="gray.700">Customer Satisfaction:</Text> Our top priority is the satisfaction of our clients. We work tirelessly to exceed their expectations and ensure they are fully satisfied with the final results.</Text>

                            <Box maxW="100%">
                                <Button variant="solid" bg="#0573E4" color="white" size="md" borderRadius="4" w="100%">
                                    <Text px="2">Get a free estimate</Text>
                                </Button>
                            </Box>


                        </Stack>

                    </Grid>
                </HStack>
            </Stack>

        </>
    )
}

