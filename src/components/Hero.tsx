import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Hero() {

    return (
        <>
            <Stack maxW={1280} w="100%" margin="0 auto" py="8" fontFamily="Inter" bgImage="/background.png" bgSize="cover" p="4">
                <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }}>
                    <Stack spacing="12">

                        <Stack spacing="8">
                            <Text fontSize="xl">Get a Free Estimate with Us</Text>
                            <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight={500} lineHeight="1.1" color="gray.800">Transform your space with <strong>HH Painting</strong></Text>
                            <Text fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.4">Residential and Commercial <br></br>Painting Experts</Text>
                        </Stack>

                        <Box>
                            <Link href="/#services">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "lg" }} borderRadius="4">
                                    <Text px={{ base: "4", md: "12" }}>Click here and see our services</Text>
                                </Button>
                            </Link>
                        </Box>

                        <Text fontSize="lg" fontWeight={600}>About Us</Text>
                        <Text fontWeight={300} fontSize="lg">
                            At HH Painting, we are a dedicated team of professionals passionate about delivering high-quality painting services for both residential
                            and commercial clients. With years of experience in the industry, we have built a strong reputation for our exceptional craftsmanship,
                            attention to detail, and outstanding customer service.
                        </Text>
                    </Stack>

                    <Box position="relative">
                        <Stack left={{ base: "15", md: "100" }} top="20" bg="#A3C7E1" position="absolute" w="90px" h="90px" align="center" justify="center">
                            <Icon as={RiPaintBrushFill} fontSize="32" color="white" />
                        </Stack>

                        <Stack left="-20" top="250" bg="#0573E4" position="absolute" w="90px" h="90px" align="center" justify="center">
                            <Icon as={RiHome2Fill} fontSize="32" color="white" />
                        </Stack>

                        <Image src="/hero-image.png" />
                    </Box>



                </Grid>

            </Stack>



            <Grid maxW={1280} w="100%" margin="0 auto" my="12" p="4" templateColumns={{ base: "1fr", md: "1fr 1.5fr" }} gap="12">
                <Text fontSize="2xl" fontWeight={600} color="#454545">
                    We transform your home to make it truly yours and more vibrant. Just the way you have always dreamed.
                </Text>

                <Stack spacing="2" color="#454545">
                    <Text fontWeight="bold">
                        VISUALIZE YOURSELF
                    </Text>
                    <Text>Your renovated home, your family in a new, clean, and cozy abode. This is the life you deserve. We provide free estimates for you.</Text>
                    <Text fontWeight={500}>And you know what is best? You do not even need to leave your house! Just make a phone call.</Text>
                    <Link href="tel:+13522786979">
                        <HStack color="#0573E4" cursor="pointer">
                            <Icon as={RiPhoneFill} />
                            <Text>Tell us now</Text>
                        </HStack>
                    </Link>
                </Stack>
            </Grid>


        </>
    )
}

