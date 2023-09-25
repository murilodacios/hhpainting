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

                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        We Work Free Guarantee
                    </Text>

                    <Text fontSize="xl" fontWeight={600} lineHeight="1.2" color="#0573E4" textAlign="center">Count on us for your beautiful home!</Text>

                    <Stack align="center">
                        <Box pb="12">
                            <Link href="/quote">
                                <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20" px="12" py="8">
                                    <HStack px="12" py="12">
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

