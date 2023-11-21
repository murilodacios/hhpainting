import { Button, HStack, Stack, Text, Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export function Problem() {

    return (
        <>
            <Stack bg="#001024" id="about" p="4" fontFamily="Inter" color="#fff">
                <Stack maxW={1400} w="100%" margin="0 auto" justify="space-between" pb="8">

                    <Stack py="4" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.4" textAlign="center" pb="6">
                            No More Peeling Paints Or Old Colors.<br></br>
                            Your home will be desired and praised in your neighborhood

                        </Text>
                        <Box>
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="10">
                                    <HStack px="12" py="4">
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

