import { SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Image, HStack, Box, Button, Icon } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";


export function QuemSomos() {

    return (
        <>
            <Stack maxW={1400} w="100%" margin="0 auto" py="12" p="4" id="team">
                <SimpleGrid columns={{ base: 1, md: 2 }} py="8" gap="4">

                    <Stack spacing="4" margin="0 auto" >
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                            Our Family, The HH Painting Team
                        </Text>

                        <Text fontSize="lg" fontWeight={400}>
                            We are dedicated to bring the beauty your house deserves! With certified and legal professionals to transform your ugly house into a new home. Having painted over 100,000 ft^2 of ugliness into beauty, we don’t just care about your house – we care about you.
                            Get a certified free quote today so you can live in the beautiful home you deserve!

                        </Text>

                        <HStack>
                            <Box>
                                <Link href="/quote">
                                    <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20">
                                        <HStack px="6" py="6">
                                            <Text fontSize="md">I Want A Free Quote Now!</Text>
                                            <Icon as={RiArrowRightUpLine} />
                                        </HStack>
                                    </Button>
                                </Link>
                            </Box>


                        </HStack>


                    </Stack>

                    <Stack justify="flex-end" align="flex-end">
                        <Image src="/feliciano-e-pai.jpg" w="600px" />
                    </Stack>


                </SimpleGrid>



            </Stack>

        </>
    )
}

