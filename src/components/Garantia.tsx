import { SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Image, HStack, Box, Button, Icon } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri";

import { CardServices } from "../components/CardServices";


export function Garantia() {

    return (
        <>
            <Stack maxW={1400} w="100%" margin="0 auto" py="8" id="services" p="4">

                <Stack spacing="4" py="12" align="center" justify="center">
                    <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4" textAlign="center">Count on us for your beautiful home!</Text>
                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        We Work Free Guarantee
                    </Text>

                    <Text fontSize="lg" fontWeight={400} textAlign="center">
                        We are so committed to our customers satisfaction that if you are not satisfied with your beautiful home, we will work free of charge until it is achieved. Simple as that. No headaches, no stress, and no dissatisfaction.
                    </Text>

                    <HStack>
                        <Box>
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20">
                                    <HStack px="6" py="6">
                                        <Text fontSize="md">I Want My Painted House</Text>
                                        <Icon as={RiArrowRightUpLine} />
                                    </HStack>
                                </Button>
                            </Link>
                        </Box>

                       
                    </HStack>
                </Stack>






                {/* <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="2" pt="8">
                    <Image src="/house-painting/1.png" />
                    <Image src="/house-painting/2.png" />
                    <Image src="/house-painting/3.png" />
                    <Image src="/house-painting/4.png" />
                    <video controls>
                        <source src="/house-painting/video.mp4" type="video/mp4" />
                    </video>
                </Grid> */}
            </Stack>

        </>
    )
}

