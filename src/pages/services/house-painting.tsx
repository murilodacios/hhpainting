import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { RiBrush2Fill, RiChatQuoteFill, RiCheckFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiMapPin2Fill, RiPaintBrushFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

export default function HousePainting() {

    return (
        <>
            {/* <Stack bg="#0573E4" color="white">
        <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between" align="center">
          <HStack py="8" fontSize="1.4rem">
            <Text fontWeight={700}>GET FREE ESTIMATE</Text>
            <Text>Gainesville, FL</Text>
          </HStack>

          <HStack fontSize="1.4rem">
            <Icon as={RiPhoneFill} />
            <Text>+1 352-354-2939</Text>
          </HStack>

        </HStack>
      </Stack> */}

            <Stack>

                <SimpleGrid columns={{ base: 1, md: 2 }} maxW={1400} margin="0 auto" p="4">

                    <Stack spacing="6" justify="center">
                        <Image src="/house-painting-logo.png" w="200px" />
                        <Text fontSize="4xl" fontWeight={600} lineHeight="2.8rem">Give your home a <Text as="strong" color="#0174e9">new identity</Text> with a <Text as="strong" color="#0174e9">unique and memorable painting.</Text></Text>
                        <Text fontSize="2xl">Harness the power of painting to create an environment that <Text as="p" color="#0174e9">reflects your personality and lifestyle.</Text></Text>
                        <Text fontSize="md">
                            Your home is a reflection of who you are. Why not make it truly unique? With our customized painting services, we offer you the opportunity to completely transform the look of your home and give it an authentic identity.
                        </Text>
                        <Box>
                            <Link href="#">
                                <Button colorScheme="blue" size="lg">
                                    <HStack>
                                        <Icon as={RiPhoneFill} />
                                        <Text>Click here to schedule now!</Text>
                                    </HStack>
                                </Button>
                            </Link>
                        </Box>

                        <HStack>
                            <HStack>
                                <Icon as={RiMapPin2Fill} />
                                <Text>Gainesville, Florida.</Text>
                            </HStack>
                        </HStack>
                    </Stack>

                    <Stack justify="center" align="flex-end">
                        <Image src="/house-painting/hero.png" w="600px" />
                    </Stack>

                </SimpleGrid>

            </Stack>






            <Stack>


                <Stack spacing="12" justify="center" align="center" maxW={1400} margin="0 auto" p="4">
                    <Stack align="center">
                        <Text fontSize="3xl" fontWeight={600} lineHeight="2.8rem">Our residential painting services are perfect for</Text>
                        <Text fontSize="xl">Harness the power of painting to create an environment that </Text>
                    </Stack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
                        <HStack align="center">
                            <Icon as={RiCheckFill} />
                            <Text>Homeowners who want to refresh the look of their residence and bring new life to their spaces.</Text>
                        </HStack>

                        <HStack align="center">
                            <Icon as={RiCheckFill} />
                            <Text>Individuals who are looking for an effective and affordable way to increase the value of their property before selling it.</Text>
                        </HStack>

                        <HStack align="center">
                            <Icon as={RiCheckFill} />
                            <Text>People who have just purchased a new home and want to personalize it according to their style and preferences.</Text>
                        </HStack>

                        <HStack align="center">
                            <Icon as={RiCheckFill} />
                            <Text>Families who want to create a welcoming and enjoyable environment for their children, with vibrant and playful colors.</Text>
                        </HStack>

                        <HStack align="center">
                            <Icon as={RiCheckFill} />
                            <Text>Construction companies and real estate agencies in need of professional painting services for their residential projects.</Text>
                        </HStack>

                    </SimpleGrid>

                </Stack>




            </Stack>



            <Stack>

                <Stack spacing="12" justify="center" align="center" maxW={1400} margin="0 auto" p="4">
                    <Stack align="center">
                        <Text fontSize="3xl" fontWeight={600} lineHeight="2.8rem">See a glimpse of our work</Text>
                        <Text fontSize="xl">Each project is meticulously executed by our team of skilled painters, who are dedicated to ensuring a flawless and long-lasting finish. We use only the finest materials and high-quality painting techniques to deliver exceptional results in every job we undertake.</Text>
                    </Stack>


                    <video controls>
                        <source src="/house-painting/video.mov" type="video/mov" />
                    </video>

                </Stack>

            </Stack>



            <Stack>


                <Stack spacing="12" justify="center" align="center" maxW={1400} margin="0 auto" p="4">
                    <Stack align="center">
                        <Text fontSize="3xl" fontWeight={600} lineHeight="2.8rem">What our clients are saying</Text>
                        <Text fontSize="xl">The satisfaction of our clients is our greatest reward. Take a look at what they have to say about our residential painting services.</Text>
                    </Stack>


                    <SimpleGrid columns={{ base: 1, md: 3 }}>

                        <Stack border="1px solid #f7f7f7" p="6">
                            <Text>
                                "I am simply delighted with the result of the painting in my house. The team was extremely professional, punctual, and the finish was impeccable. I highly recommend them to everyone!"
                            </Text>
                            <Text>Juliah S.</Text>
                        </Stack>

                        <Stack border="1px solid #f7f7f7" p="6">
                            <Text>
                                "Hiring this painting company was the best decision I made. They understood exactly what I wanted and exceeded all my expectations. I am extremely happy with the outcome!"
                            </Text>
                            <Text>Emmanuel C.</Text>
                        </Stack>

                        <Stack border="1px solid #f7f7f7" p="6">
                            <Text>
                                "The painters were very attentive and careful throughout the process. They transformed my space into a cozy and sophisticated environment. I couldn't be more satisfied!"
                            </Text>
                            <Text>James L.</Text>
                        </Stack>

                    </SimpleGrid>

                </Stack>




            </Stack>



            <Stack bg="#0174e9" color="white">

                <Stack spacing="12" justify="center" align="center" maxW={1400} margin="0 auto" p="4">
                    <Stack align="center">
                        <Text fontSize="3xl" fontWeight={600} lineHeight="2.8rem">Still have questions?</Text>
                        <Text fontSize="xl">Our team is ready to answer all your inquiries and assist you with your residential painting needs. Get in touch with us today</Text>
                    </Stack>


                    <Stack>
                        <HStack fontSize="xl">
                            <Icon as={RiPhoneFill} />
                            <Text>(352) 354-2939</Text>
                        </HStack>
                    </Stack>

                </Stack>

            </Stack>


        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//   const cookies = parseCookies(ctx)

//   if (cookies['strongr:token']) {
//     return {
//       redirect: {
//         destination: '/painel',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }
