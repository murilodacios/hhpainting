import { SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/react";

import { CardServices } from "../components/CardServices";




export function Services() {

    return (
        <>
            <Stack maxW={1280} w="100%" margin="0 auto" py="8" id="services" p="4">
                <Text fontSize={{ base: "3xl", md: "4xl" }} pt="4" fontWeight={400} lineHeight="1.2">Our service ecosystem <br></br>transforms our clients dreams</Text>
                <Text fontWeight={300} fontSize="lg">
                    Choose a Service Below and See
                    What We Can Do for You
                </Text>

                <Tabs>
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
                </Tabs>
            </Stack>

        </>
    )
}

