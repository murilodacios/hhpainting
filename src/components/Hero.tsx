import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input } from "@chakra-ui/react";
import Link from "next/link";
import { RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Hero() {

    return (
        <>
            <Stack maxW={1280} w="100%" margin="0 auto" py="8" fontFamily="Inter" bgImage="/background.png" bgSize="cover" p="4">
                <Grid templateColumns={{base: "1fr", md: "1.2fr 1fr"}}>
                    <Stack spacing="12">

                        <Stack spacing="8">
                            <Text fontSize="xl">Get a Free Estimate with Us</Text>
                            <Text fontSize={{base: "4xl", md: "6xl"}} fontWeight={500} lineHeight="1.1" color="gray.800">Transform your space with <strong>HH Painting</strong></Text>
                            <Text fontSize={{base: "2xl", md: "3xl"}} lineHeight="1.4">Residential and Commercial <br></br>Painting Experts</Text>
                        </Stack>

                        <Box>
                            <Link href="/#services">
                                <Button variant="solid" bg="#0573E4" color="white" size={{base: "md", md: "lg"}} borderRadius="4">
                                    <Text px={{base: "4", md: "12"}}>Click here and see our services</Text>
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
                        <Stack left={{base:"15", md: "100"}} top="20" bg="#A3C7E1" position="absolute" w="90px" h="90px" align="center" justify="center">
                            <Icon as={RiPaintBrushFill} fontSize="32" color="white" />
                        </Stack>

                        <Stack left="-20" top="250" bg="#0573E4" position="absolute" w="90px" h="90px" align="center" justify="center">
                            <Icon as={RiHome2Fill} fontSize="32" color="white" />
                        </Stack>

                        <Image src="/hero-image.png" />
                    </Box>



                </Grid>

            </Stack>


            <Stack bg="#eee">
                <Stack maxW={1280} w="100%" margin="0 auto" py="8" justify="space-between" p="4" spacing="6" direction={{base: "column", md: "row"}}>
                    <Text fontSize="lg" fontWeight={600} color="black">
                        We are not just a painting company,<br></br>
                        we turn your dream into reality.
                    </Text>

                    <HStack spacing="0">
                        <Input borderRadius="0" bg="white" placeholder="Type your ZIP code" />
                        <Button borderRadius="0" bg="#0573E4" color="white">
                            <Text px="6">Get Estimate</Text>
                        </Button>
                    </HStack>
                </Stack>
            </Stack>

        </>
    )
}

