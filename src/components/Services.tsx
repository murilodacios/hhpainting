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


export function Services() {

    return (
        <>
            <Stack maxW={1400} w="100%" margin="0 auto" py="8" id="services" p="4">
                <Stack pt="12" mt="6" spacing="2" align="center">
                    <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Residential Painting</Text>
                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        What Do We Paint?
                    </Text>

                    <Text fontSize="lg" fontWeight={400} textAlign="center" pb="4">
                        At HH Painting, we specialize in providing top-notch residential painting services that breathe new life into your home. Our skilled team of painters is dedicated to transforming your living spaces with precision and attention to detail.
                    </Text>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">

                    <Image src="/residential/before.png" transform="rotate(45)" />

                    <Image src="/residential/after.png" />
                </SimpleGrid>

                <Stack align="center" py="4">
                    <Box>
                        <Link href="tel:+13523542939">
                            <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "2lg" }} borderRadius="6">
                                <HStack px="12" py="6">
                                    <Text fontSize="md">I want a free quote!</Text>
                                    <Icon as={RiArrowRightLine} />
                                </HStack>
                            </Button>
                        </Link>
                    </Box>
                </Stack>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="4" pt="8">
                    <CardServices title="Brick Painting & Limewashing" type="Exterior" />
                    <CardServices title="EPA Lead Certified" type="Exterior" />
                    <CardServices title="Painting and Staining" type="Exterior" />
                    <CardServices title="Power Washing" type="Exterior" />
                    <CardServices title="Stucco Repairs and Painting" type="Exterior" />
                    <CardServices title="Vinyl and Aluminum Siding Painting" type="Exterior" />
                    <CardServices title="Color Consultation" type="Exterior" />
                    <CardServices title="Concrete Staining and Epoxy Finish" type="Exterior" />
                    <CardServices title="Drywall Repair" type="Exterior" />
                    <CardServices title="Wallpaper Removal" type="Exterior" />
                    <CardServices title="Garage Painting" type="Exterior" />
                    <CardServices title="Crown Molding Services" type="Exterior" />
                    <CardServices title="Cabinet Refinishing and Repainting" type="Exterior" />

                </Grid>

                


               

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

