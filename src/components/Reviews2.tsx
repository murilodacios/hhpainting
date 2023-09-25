import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid, Tag, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightUpLine, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";

export function Reviews2() {

    return (
        <>

            <Stack bg="#FFF" id="reviews" fontFamily="Inter">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" p="4">

                    <Stack pt="12" mt="6" spacing="2" align="center">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Honest reviews</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            What do they say about us?
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} py="8" gap="6">


                        <Stack bg="white" p="8" spacing="6" border="1px solid #CCE5FF" transition="0.6s all" borderRadius="20">
                            <HStack justify="space-between" align="flex-start">

                                <HStack>
                                    <Avatar src='https://img.freepik.com/fotos-gratis/homem-senior-bebendo-cerveja_23-2149316813.jpg?size=626&ext=jpg&ga=GA1.2.1430005308.1684446687&semt=ais' />

                                    <Stack>
                                        <Text color="#0573E4" fontWeight={600}>Frederic Souret</Text>
                                        <Image src="/google.png" w="60px" />
                                    </Stack>

                                </HStack>

                                <Text>Gainesville, FL.</Text>
                            </HStack>
                            <Text>
                                Very professional and excellent job! Highly recommend Feliciano and his team!
                            </Text>

                            <Image src="/stars.png" w="100px" />
                        </Stack>

                        <Stack bg="white" p="8" spacing="6" border="1px solid #CCE5FF" transition="0.6s all" borderRadius="20">
                            <HStack justify="space-between" align="flex-start">
                                <HStack>
                                    <Avatar src='https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022621.jpg' />

                                    <Stack>
                                        <Text color="#0573E4" fontWeight={600}>Kim S.</Text>
                                        <Image src="/angis.svg" w="40px" />
                                    </Stack>
                                </HStack>

                                <Text>Gainesville, FL.</Text>
                            </HStack>
                            <Text>
                                They did everything they said they would do in a timely manner. Will book them again when needed.
                            </Text>

                            <Image src="/stars.png" w="100px" />
                        </Stack>





                    </Grid>

                    <Stack align="center" pt="8">
                        <Box pb="12">
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20" px="12" py="8">
                                    <HStack px="4" py="12">
                                        <Text fontSize="lg">I Want My House Painted</Text>
                                        <Icon as={RiArrowRightUpLine} />
                                    </HStack>
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>

            <Stack bg="#F5F8FD" id="about" p="4" fontFamily="Inter"></Stack>




        </>
    )
}

