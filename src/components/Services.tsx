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
            <Stack maxW={1400} w="100%" margin="0 auto" py="8" id="services" p="4" fontFamily="Inter">

                <Stack py="4" mt="6" spacing="2" align="center">
                    <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#001024">Residential Painting</Text>
                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        What Do We Paint?
                    </Text>
                </Stack>

                <Stack py="6" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        Exterior Painting
                    </Text>
                </Stack>


                <Stack spacing="0">
                    <SimpleGrid columns={{ base: 1, md: 2 }} bg="gray.100">

                        <Stack p="12" align="flex-start" justify="center" spacing={6}>
                            <Text fontSize="2xl">
                                This is the exterior of a house that needed an exterior paint job.
                            </Text>

                            <Image display={{base: "none", md: "flex"}} src="/residential/seta-direita.svg" />
                        </Stack>
                        <Image src="/residential/before.png" />
                       

                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2 }} bg="gray.100">

                        <Image src="/residential/after.png" />

                        <Stack p="12" align="flex-end" justify="center" spacing={6}>
                            <Text fontSize="2xl">
                                And this is the exterior of the same house after the professionals from HH Painting completed the job.
                            </Text>

                            <Image display={{base: "none", md: "flex"}} src="/residential/seta-esquerda.svg" />
                        </Stack>


                    </SimpleGrid>
                </Stack>

                <Stack py="6" mt="6" spacing="2" align="center">
                        <Text fontWeight={500} fontSize={{ base: "xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        Interior Painting
                    </Text>
                </Stack>


                <Stack spacing="0">
                    <SimpleGrid columns={{ base: 1, md: 2 }} bg="gray.100">

                        <Stack p="12" align="flex-start" justify="center" spacing={6}>
                            <Text fontSize="2xl">
                                This is the interior of a house that needed the work of HH Painting

                            </Text>

                            <Image display={{base: "none", md: "flex"}} src="/residential/seta-direita.svg" />
                        </Stack>
                        <Image src="/residential/before2.png" />

                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2 }} bg="gray.100">

                        <Image src="/residential/after2.png" />

                        <Stack p="12" align="flex-end" justify="center" spacing={6}>
                            <Text fontSize="2xl">
                                And this is the interior of the same house after the professionals from HH Painting completed the job.
                            </Text>

                            <Image display={{base: "none", md: "flex"}} src="/residential/seta-esquerda.svg" />
                        </Stack>


                    </SimpleGrid>
                </Stack>


                <Stack align="center" pt="8">
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

                {/* <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="4" pt="8">
                    <CardServices title="Vinyl and Aluminum Siding Painting" type="Exterior" />
                    <CardServices title="Color Consultation" type="Exterior" />
                    <CardServices title="Concrete Staining and Epoxy Finish" type="Exterior" />
                    <CardServices title="Drywall Repair" type="Exterior" />
                    <CardServices title="Wallpaper Removal" type="Exterior" />
                    <CardServices title="Garage Painting" type="Exterior" />
                    <CardServices title="Crown Molding Services" type="Exterior" />
                    <CardServices title="Cabinet Refinishing and Repainting" type="Exterior" />

                </Grid> */}


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

