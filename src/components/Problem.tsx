import { Button, HStack, Stack, Text, Box, Icon, Image, Grid, Input, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine, RiAwardFill, RiAwardLine, RiFacebookFill, RiHeart2Fill, RiHeart2Line, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiPhoneLine, RiServiceFill, RiServiceLine, RiTimeFill, RiTimeLine, RiUser2Line, RiUser5Fill, RiUser5Line, RiUserLine } from "react-icons/ri";
import { useAuthenticate } from "../hooks/AuthContext";


export function Problem() {

    return (
        <>
            <Stack bg="linear-gradient(45deg, #0573E4 -7.72%, #0F1B27 137.61%);" id="about" p="4" fontFamily="Inter" color="#fff">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" pb="8">

                    <Stack py="12" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.4" textAlign="center" pb="6">
                            No More Peeling Paints Or Ugly Colors.<br></br>
                            Stop Being The Ugly House In Your Neighborhood

                        </Text>
                        <Box>
                            <Link href="tel:+13523542939">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="6">
                                    <HStack px="12" py="6">
                                        <Text fontSize="md">Get a free quote now</Text>
                                        <Icon as={RiArrowRightLine} />
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

