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

import { CardServices } from "../components/CardServices";


export function Services() {

    return (
        <>
            <Stack maxW={1400} w="100%" margin="0 auto" py="8" id="services" p="4">
                <Stack pt="12" mt="6" spacing="2" align="center">
                    <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Residential Painting</Text>
                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        What services do we offer?
                    </Text>

                    <Text fontSize="lg" fontWeight={400} textAlign="center">
                        At HH Painting, we specialize in providing top-notch residential painting services that breathe new life into your home. Our skilled team of painters is dedicated to transforming your living spaces with precision and attention to detail.
                        Whether you are looking to refresh the interior of your home, update the exterior, or create a whole new color scheme, we have the expertise to bring your vision to reality.
                    </Text>
                </Stack>

                {/* <Tabs>
                    <TabList>
                        <Tab>Residential</Tab>
                        <Tab>Commercial</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Stack spacing="4">
                                <Text fontSize="2xl">
                                    Residential Services
                                </Text>

                                <Text fontSize="lg" fontWeight={300}>
                                    At HH Painting, we specialize in providing top-notch residential painting services that breathe new life into your home. Our skilled team of painters is dedicated to transforming your living spaces with precision and attention to detail.
                                    Whether you are looking to refresh the interior of your home, update the exterior, or create a whole new color scheme, we have the expertise to bring your vision to reality.
                                </Text>

                                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="4">
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
                            </Stack>

                        </TabPanel>

                        <TabPanel>
                            <Stack spacing="4">
                                <Text fontSize="2xl">
                                    Commercial Services
                                </Text>

                                <Text fontSize="lg" fontWeight={300}>
                                    At HH Painting, we specialize in delivering exceptional commercial painting services. Our experienced team of painters is dedicated to transforming
                                    your business space with attention to detail and professionalism. Whether you need interior painting, exterior painting, specialty finishes, or
                                    office painting, we have the expertise to meet your specific needs. With a focus on quality and customer satisfaction, we work efficiently
                                    to minimize disruptions to your operations. Trust HH Painting to bring vibrancy and professionalism to your commercial property. Contact us
                                    today for a consultation.
                                </Text>

                                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap="4">
                                    <CardServices title="Awning Removal & Replacement" type="Exterior" />
                                    <CardServices title="Brick Waterproofing" type="Exterior" />
                                    <CardServices title="Concrete Ceiling Repair" type="Exterior" />
                                    <CardServices title="EIFS Repair" type="Exterior" />
                                    <CardServices title="Epoxy Floor Coatings" type="Exterior" />
                                    <CardServices title="Exterior Painting" type="Exterior" />
                                    <CardServices title="Interior Painting" type="Exterior" />
                                    <CardServices title="Light Carpentry And Repairs" type="Exterior" />
                                    <CardServices title="Line Striping for Parking Lots" type="Exterior" />
                                    <CardServices title="Masonry Coating & Repairs" type="Exterior" />
                                    <CardServices title="Parapet Repairs" type="Exterior" />
                                    <CardServices title="Rebranding and Signage" type="Exterior" />
                                    <CardServices title="Roof Coatings" type="Exterior" />
                                    <CardServices title="Rusty Metal Door Painting" type="Exterior" />
                                    <CardServices title="Stenciling Solutions" type="Exterior" />
                                    <CardServices title="Stucco Painting & Repair" type="Exterior" />
                                    <CardServices title="T1-11 Siding Painting" type="Exterior" />
                                    <CardServices title="Urethane Joint Expansion Sealing" type="Exterior" />
                                    <CardServices title="Vinyl Siding Repair & Painting" type="Exterior" />
                                    <CardServices title="Waterproof Coatings" type="Exterior" />
                                    <CardServices title="Wood Rot Repair" type="Exterior" />

                                </Grid>
                            </Stack>
                        </TabPanel>

                    </TabPanels>
                </Tabs> */}



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

                <Stack pt="12" mt="6" spacing="2" align="center" id="location">
                    <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Residential Painting</Text>
                    <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" textAlign="center">
                        Where are we located?
                    </Text>

                    <Text fontSize="lg" fontWeight={400} textAlign="center">
                        We serve the entire Alachua County, Jacksonville, and Ocala.
                    </Text>
                </Stack>

                <Stack pt="8" borderRadius="20">
                    <iframe src="https://maps.google.com/maps?q=condado%20de%20alachua&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" height="400px" />
                </Stack>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} py="12" id="faq" gap="12">
                    <Stack spacing="4">
                        <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="#0573E4">Frequently asked questions</Text>
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                            Do you have any questions?
                        </Text>

                        <Text fontSize="lg" fontWeight={400}>
                            We've gathered some common questions, and if these don't help, please don't hesitate to give us a call so we can chat.
                        </Text>

                        <HStack>
                            <Box>
                                <Link href="tel:+13523542939">
                                    <Button variant="solid" bg="#0573E4" color="white" size={{ base: "md", md: "md" }} borderRadius="20">
                                        <HStack px="6" py="6">
                                            <Text fontSize="md">Get a free quote now</Text>
                                            <Icon as={RiArrowRightUpLine} />
                                        </HStack>
                                    </Button>
                                </Link>
                            </Box>

                            <Text>(352) 354-2939</Text>
                        </HStack>
                    </Stack>

                    <Stack>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton py="4">
                                        <Box as="span" flex='1' textAlign='left'>
                                            What kind of preparation is required before starting to paint?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Before beginning to paint, it's important to prepare the surface. This may include cleaning the walls, repairing cracks or imperfections, applying primer, and protecting furniture and floors.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton py="4">
                                        <Box as="span" flex='1' textAlign='left'>
                                            What color options of paint are available?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Paint color options are virtually endless. You can choose from a wide variety of shades, hues, and finishes, ranging from neutral colors to vibrant and bold ones. A professional painter can assist you in selecting the ideal colors for your project.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton py="4"> 
                                        <Box as="span" flex='1' textAlign='left'>
                                            Do you offer both interior and exterior painting services?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Yes, we offer painting services for both interiors and exteriors. Our painters are trained to handle a variety of painting projects in different environments.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton py="4">
                                        <Box as="span" flex='1' textAlign='left'>
                                            How do you determine the cost of a painting project?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    The cost of a painting project depends on several factors, such as the size of the area to be painted, the type of paint chosen, the complexity of the job, and the need for additional preparation. We recommend requesting a customized quote to obtain an exact value.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton py="4">
                                        <Box as="span" flex='1' textAlign='left'>
                                            What safety measures do you take during the painting process?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Safety is a priority on all our projects. Our painters follow strict safety guidelines, including the use of personal protective equipment, proper ventilation of work areas, and safe handling of materials and tools.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Stack>


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

