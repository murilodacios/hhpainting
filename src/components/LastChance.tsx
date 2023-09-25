import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function LastChance() {

    return (
        <>
            <Stack bg="linear-gradient(45deg, #0573E4 -7.72%, #0F1B27 137.61%);" id="about" p="4" fontFamily="Inter" color="#fff">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" pb="8">

                    <Stack py="12" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.4" textAlign="center" pb="4">
                            Scrolled All The Way Down?<br></br>
                            Transform Your Ugly House Into A Beautiful Home Now!


                        </Text>
                        <Stack align="center">
                            <Box>
                                <Link href="/quote">
                                    <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20" px="12" py="8">
                                        <HStack px="4" py="12">
                                            <Text fontSize="xl">I Want My House Painted</Text>
                                            <Icon as={RiArrowRightUpLine} />
                                        </HStack>
                                    </Button>
                                </Link>
                            </Box>
                        </Stack>

                        <Stack direction={{ base: "column-reverse", md: "row" }} align="flex-start" py="8">
                            <Stack>
                                <Image src="/stars.png" w="120px" />
                                <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                    <HStack cursor="pointer">
                                        <Text>We are 5 stars on Google</Text>
                                        <Icon as={RiArrowRightUpLine} />
                                    </HStack>
                                </Link>
                            </Stack>

                            <Image src="/google.png" w="120px" />
                        </Stack>
                    </Stack>




                </Stack>

            </Stack>




        </>
    )
}

