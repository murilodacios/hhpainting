import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, SimpleGrid, Tag, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightUpLine, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiUser2Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";

export function Reviews() {

    return (
        <>

            <Stack bg="#FFF" id="reviews" fontFamily="Inter">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" p="4">

                    <Stack pt="12" mt="6" spacing="2" align="center">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Honest reviews</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            Testimonials
                        </Text>
                    </Stack>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} py="8" gap="6">

                        <Stack bg="white" p="8" spacing="6" border="1px solid #CCE5FF" transition="0.6s all" borderRadius="20">
                            <HStack justify="space-between" align="flex-start">

                                <HStack>
                                    <Avatar src='https://assets.propmark.com.br/uploads/2023/03/Viviane-Pepe---Diretora-de-Comunica--o-da-Avon-Brasil--2-.jpg' />
                                    <Stack>
                                        <Text color="#0573E4" fontWeight={600}>Naomi S</Text>
                                        <Image src="/google.png" w="60px" />
                                    </Stack>
                                </HStack>

                                <Text>Gainesville, FL.</Text>
                            </HStack>
                            <Text>
                                The house looks amazing. I love it! So much attention to detail. In addition to doing a thorough
                                cleaning and prep before painting, small necessary repairs were handled so that the finished
                                product looks amazing. The area was left clean. The work was quoted accurately in advance. Work was done quickly
                                and on schedule. Everything about the process was smooth and easy.
                            </Text>

                            <Image src="/stars.png" w="100px" />
                        </Stack>

                        <Stack bg="white" p="8" spacing="6" border="1px solid #CCE5FF" transition="0.6s all" borderRadius="20">
                            <HStack justify="space-between" align="flex-start">

                                <HStack>
                                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJD8PDMwQdWoOyixztYSO2heQSLRjxEq5XFg&usqp=CAU' />
                                    <Stack>
                                        <Text color="#0573E4" fontWeight={600}>Nikki</Text>
                                        <Image src="/angis.svg" w="40px" />
                                    </Stack>
                                </HStack>

                                <Text>Gainesville, FL.</Text>
                            </HStack>
                            <Text>
                                These guys were the epitome of professionalism and quality work. They showed up on time every day, were as unobtrusive as possible,
                                since I work from home, and they did the job beautifully. Even with the crazy Florida Rains, which put them off schedule
                                a couple of days, they were still able to complete the work in the original. He promised timeframe. I will definitely use them again,
                                and certainly recommend them to anyone looking to get good results at a fair price.
                            </Text>

                            <Image src="/stars.png" w="100px" />
                        </Stack>



                    </Grid>

                    <Stack align="center">
                        <Box pb="12">
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20" px="8" py="8">
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






        </>
    )
}

