import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function About() {

    return (
        <>
            <Stack bg="#F5F8FD" id="about" p="4">
                <Stack maxW={1280} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2" align="center">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Why choose us</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            Everyone wins with HH Painting.
                        </Text>
                        <Text fontSize="xl" fontWeight={400} color="gray.600" textAlign="center">With HH Painting, you can rely on a professional and dedicated team that provides exceptional painting services,<br></br> adding value and transforming your spaces.</Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} py="8" gap="6">

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiUser5Line} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Proven Expertise</Text>
                            <Text>With years of experience in the industry, our team has the knowledge and skill necessary to deliver high-quality results.</Text>
                        </Stack>

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiServiceLine} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Personalized Service </Text>
                            <Text>We value each client and strive to understand their specific needs, offering customized and tailored service that meets their expectations.</Text>
                        </Stack>

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiAwardLine} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Superior Quality </Text>
                            <Text>We only use high-quality materials and advanced painting techniques to ensure exceptional and long-lasting results.</Text>
                        </Stack>

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiTimeLine} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Punctuality </Text>
                            <Text>We strictly adhere to agreed-upon deadlines, ensuring that your project is completed within the established timeframe.</Text>
                        </Stack>

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiPhoneLine} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Transparent Communication </Text>
                            <Text>We maintain clear and open communication with our clients, keeping them informed about the projects progress and promptly addressing any questions or concerns.</Text>
                        </Stack>

                        <Stack bg="white" p="8" _hover={{ py: "12", border: "1px solid #CCE5FF", borderRadius: "5px" }} transition="0.6s all">
                            <Icon color="#0573E4" as={RiHeart2Line} borderRadius="50" border="1px solid #eee" fontSize="40px" p="2" />
                            <Text color="gray.900" fontWeight={500}>Customer Satisfaction</Text>
                            <Text>Our top priority is the satisfaction of our clients. We work tirelessly to exceed their expectations and ensure they are fully satisfied with the final results.</Text>
                        </Stack>
                    </Grid>
                </Stack>
            </Stack>


            <Stack bg="#F5F8FD" p="4">
                <Stack maxW={1280} w="100%" margin="0 auto" justify="space-between">

                    <Stack pt="12" mt="6" spacing="2">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Let us help you</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                            What is your goal today?
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr 1fr" }} py="8" gap="6">

                        <Stack justify="space-between" h="100%" >
                            <Stack bg="white" p="8" justify="space-between" h="100%">
                                <Stack>
                                    <Text color="gray.900" fontWeight={500}>Minor repairs</Text>
                                    <Text>With years of experience in the industry, our team has the knowledge and skill necessary to deliver high-quality results.</Text>
                                </Stack>
                                <Link href="tel:+13523542939">
                                    <HStack color="#0573E4" cursor="pointer">
                                        <Icon as={RiPhoneFill} />
                                        <Text>Get free estimate</Text>
                                    </HStack>
                                </Link>
                            </Stack>
                            <Box bg="#0573E4" h="20px">
                            </Box>
                        </Stack>

                        <Stack justify="space-between" h="100%">
                            <Stack bg="white" p="8" justify="space-between" h="100%">
                                <Stack>
                                    <Text color="gray.900" fontWeight={500}>Furniture renovation</Text>
                                    <Text>We value each client and strive to understand their specific needs, offering customized and tailored service that meets their expectations.</Text>
                                </Stack>
                                <Link href="tel:+13523542939">
                                    <HStack color="#0573E4" cursor="pointer">
                                        <Icon as={RiPhoneFill} />
                                        <Text>Get free estimate</Text>
                                    </HStack>
                                </Link>
                            </Stack>
                            <Box bg="#0573E4" h="20px">
                            </Box>
                        </Stack>

                        <Stack justify="space-between">
                            <Stack bg="white" p="8" justify="space-between">
                                <Stack>
                                    <Box pb="2">
                                        <Tag colorScheme="red">Hot</Tag>
                                    </Box>
                                    <Text color="gray.900" fontWeight={500}>Exterior Painting</Text>
                                    <Text>We only use high-quality materials and advanced painting techniques to ensure exceptional and long-lasting results.</Text>
                                </Stack>
                                <Link href="tel:+13523542939">
                                    <HStack color="#0573E4" cursor="pointer">
                                        <Icon as={RiPhoneFill} />
                                        <Text>Get free estimate</Text>
                                    </HStack>
                                </Link>
                            </Stack>
                            <Box bg="#0573E4" h="20px">
                            </Box>
                        </Stack>

                        <Stack justify="space-between">
                            <Stack bg="white" p="8" justify="space-between">
                                <Stack>
                                    <Box pb="2">
                                        <Tag colorScheme="blue">Popular</Tag>
                                    </Box>
                                    <Text color="gray.900" fontWeight={500}>Interior Painting</Text>
                                    <Text>We strictly adhere to agreed-upon deadlines, ensuring that your project is completed within the established timeframe.</Text>
                                </Stack>
                                <Link href="tel:+13523542939">
                                    <HStack color="#0573E4" cursor="pointer">
                                        <Icon as={RiPhoneFill} />
                                        <Text>Get free estimate</Text>
                                    </HStack>
                                </Link>
                            </Stack>
                            <Box bg="#0573E4" h="20px">
                            </Box>
                        </Stack>

                    </Grid>
                </Stack>
            </Stack>

        </>
    )
}

