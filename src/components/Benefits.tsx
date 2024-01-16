import { Button, HStack, Stack, Text, Box, Icon, SimpleGrid, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export function Benefits() {

    return (
        <>
            <Stack bg="#fff" id="about" p="4" fontFamily="Inter" color="#000">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" pb="8" spacing="6">


                    <Stack py="6" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                            Benefits
                        </Text>
                    </Stack>

                    <SimpleGrid columns={{ base: 1, md: 3 }} margin="0 auto" gap="4" >

                        <Stack bg="#F1F7FF" p="8" pt="8" borderRadius="6" spacing="6" border="1px solid #F1F7FF" shadow="sm" align="center">
                            <Text fontSize="xl" fontWeight="500">
                                Durability and Protection
                            </Text>

                            <Text>Professional residential painting provides a long-lasting protective layer against elements such as
                                sun, rain, and humidity.
                            </Text>

                        </Stack>

                        <Stack bg="#F1F7FF" p="8" pt="8" borderRadius="6" spacing="6" border="1px solid #F1F7FF" shadow="sm" align="center">
                            <Text fontSize="xl" fontWeight="500">
                                Superior Aesthetic Quality
                            </Text>

                            <Text>Painting professionals possess the skills and experience to ensure a uniform and high-quality application.

                            </Text>

                        </Stack>

                        <Stack bg="#F1F7FF" p="8" pt="8" borderRadius="6" spacing="6" border="1px solid #F1F7FF" shadow="sm" align="center">
                            <Text fontSize="xl" fontWeight="500">
                                Long-Term Cost Savings
                            </Text>

                            <Text>Despite the initial investment, professional painting can represent long-term savings.
                            </Text>

                        </Stack>

                    </SimpleGrid>

                    <Stack position="relative">
                        <Image src="/ano-novo-1.png" borderRadius="10" alt="new year" />

                        <Stack
                            position={{ base: "relative", md: "absolute" }}
                            bg="#F1F7FF"
                            px="8"
                            py="8"
                            borderRadius="6"
                            spacing="6"
                            border="1px solid #F1F7FF"
                            shadow="sm"
                            justify="space-between"
                            width={{ base: "100%", md: "600px" }}
                            left={{ base: "0px", md: "30px" }}
                            top={{ base: "0px", md: "30px" }}
                        >
                            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500" lineHeight="2.4rem">
                                The new year cannot be the same
                            </Text>
                            <Text lineHeight="1.6rem">
                                Start the new year with your home renewed, painted, and with a fresh atmosphere.
                               
                            </Text>

                            <Link href="/quote">

                                <HStack
                                    px="8"
                                    py="3"
                                    borderRadius="6"
                                  bg="blue.500"
                                    color="white"
                                    align="center"
                                    justify="center"
                                    cursor="pointer"
                                    transition="0.3s all"
                                    border="1px solid #eee"
                                    _hover={{
                                        bg: "blue.200",
                                        color: "#00132B"
                                    }}
                                >
                                    <Text fontSize={{ base: "md", md: "lg" }}>Get a free quote now</Text>
                                    <Icon as={RiArrowRightLine} />
                                </HStack>

                            </Link>
                        </Stack>
                    </Stack>


                </Stack>

            </Stack>




        </>
    )
}

