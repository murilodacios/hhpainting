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
                <Grid templateColumns={{ base: "1fr", md: "1.5fr 1fr" }} py="8" gap="4">

                    <Stack spacing="4" margin="0 auto" >
                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4">
                            Our HH Painting Team
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

                    <Image src="/feliciano-e-pai.jpg" />


                </Grid>

                <Stack py="8">
                    <Stack w="100%" id="faq" align="center">

                        <Text fontWeight={500} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.4" py="4">
                            FAQ
                        </Text>

                        <Accordion allowToggle w="100%">
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
                                    Before beginning to paint, it is important to prepare the surface. This may include cleaning the walls, repairing cracks or imperfections, applying primer, and protecting furniture and floors.
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
                </Stack>

            </Stack>

        </>
    )
}

