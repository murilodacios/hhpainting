import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid } from "@chakra-ui/react";
import { RiBrush2Fill, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill } from "react-icons/ri";
import { CardServices } from "../components/CardServices";
import { Header } from "../components/Header";


export default function Home() {

  return (
    <>
      {/* <Stack bg="#0573E4" color="white">
        <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between" align="center">
          <HStack py="4">
            <Text fontWeight={700}>GET FREE ESTIMATE</Text>
            <Text>Gainesville, FL</Text>
          </HStack>

          <HStack>
            <Icon as={RiPhoneFill} />
            <Text>+1 352-278-6979</Text>
          </HStack>

        </HStack>
      </Stack> */}

      <Header />

      <Stack maxW={1280} w="100%" margin="0 auto" py="8" fontFamily="Inter" bgImage="/background.png" bgSize="cover">
        <Grid templateColumns="1.2fr 1fr">
          <Stack spacing="12">

            <Stack spacing="8">
              <Text fontSize="xl">Get a Free Estimate with Us</Text>
              <Text fontSize="6xl" fontWeight={500} lineHeight="1.1" color="gray.800">Transform your space with <strong>HH Painting</strong></Text>
              <Text fontSize="3xl" lineHeight="1.4">Residential and Commercial <br></br>Painting Experts</Text>
            </Stack>

            <Box>
              <Button variant="solid" bg="#0573E4" color="white" size="lg" borderRadius="4">
                <Text px="12">Click here and see our services</Text>
              </Button>
            </Box>

            <Text fontSize="lg" fontWeight={600}>About Us</Text>
            <Text fontWeight={300} fontSize="lg">
              At HH Painting, we are a dedicated team of professionals passionate about delivering high-quality painting services for both residential
              and commercial clients. With years of experience in the industry, we have built a strong reputation for our exceptional craftsmanship,
              attention to detail, and outstanding customer service.
            </Text>
          </Stack>

          <Box position="relative">
            <Stack left="100" top="20" bg="#A3C7E1" position="absolute" w="90px" h="90px" align="center" justify="center">
              <Icon as={RiPaintBrushFill} fontSize="32" color="white" />
            </Stack>

            <Stack left="-20" top="250" bg="#0573E4" position="absolute" w="90px" h="90px" align="center" justify="center">
              <Icon as={RiHome2Fill} fontSize="32" color="white" />
            </Stack>

            <Image src="/hero-image.png" />
          </Box>



        </Grid>

      </Stack>


      <Stack bg="#eee">
        <HStack maxW={1280} w="100%" margin="0 auto" py="8" justify="space-between">
          <Text fontSize="lg" fontWeight={600} color="black">
            We aren't just a painting company,<br></br>
            we turn your dream into reality.
          </Text>

          <HStack spacing="0">
            <Input borderRadius="0" bg="white" placeholder="Type your ZIP code" />
            <Button borderRadius="0" bg="#0573E4" color="white">
              <Text px="6">Get Estimate</Text>
            </Button>
          </HStack>
        </HStack>
      </Stack>


      <Stack maxW={1280} w="100%" margin="0 auto" py="8">
        <Text fontSize="4xl" fontWeight={400} lineHeight="1.2">Our service ecosystem <br></br>transforms our clients' dreams</Text>
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
                  Whether you're looking to refresh the interior of your home, update the exterior, or create a whole new color scheme, we have the expertise to bring your vision to reality.
                </Text>

                <SimpleGrid columns={3} gap="4">
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

                </SimpleGrid>
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

                <SimpleGrid columns={3} gap="4">
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

                </SimpleGrid>
              </Stack>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Stack>

      <Stack bg="gray.50">
        <HStack maxW={1280} w="100%" margin="0 auto" justify="space-between">
          <Grid templateColumns="1.1fr 1fr">
            <Stack pt="12" mt="6" spacing="6">
              <Text fontSize="lg" fontWeight={600} lineHeight="1.2" color="gray.500">A helping hand to make<br></br> your dreams come true.</Text>
              <Text fontWeight={300} fontSize="4xl" lineHeight="1.4">
                Transforming spaces, inspiring emotions. Experience the artistry of our painting services and elevate your surroundings.
              </Text>
              <Image pt="8" src="house.png" />
            </Stack>

            <Stack spacing="8" p="6" justify="center">

              <Text fontSize="xl" fontWeight={400} color="gray.600">With HH Painting, you can rely on a professional and dedicated team that provides exceptional painting services, adding value and transforming your spaces.</Text>


              <Text color="gray.600">● <Text as="strong" color="gray.700">Proven Expertise:</Text> With years of experience in the industry, our team has the knowledge and skill necessary to deliver high-quality results.</Text>

              <Text color="gray.600">● <Text as="strong" color="gray.700">Personalized Service:</Text> We value each client and strive to understand their specific needs, offering customized and tailored service that meets their expectations.</Text>

              <Text color="gray.600">● <Text as="strong" color="gray.700">Superior Quality:</Text> We only use high-quality materials and advanced painting techniques to ensure exceptional and long-lasting results.</Text>

              <Text color="gray.600">● <Text as="strong" color="gray.700">Punctuality:</Text> We strictly adhere to agreed-upon deadlines, ensuring that your project is completed within the established timeframe.</Text>

              <Text color="gray.600">● <Text as="strong" color="gray.700">Transparent Communication:</Text> We maintain clear and open communication with our clients, keeping them informed about the project's progress and promptly addressing any questions or concerns.</Text>

              <Text color="gray.600">● <Text as="strong" color="gray.700">Customer Satisfaction:</Text> Our top priority is the satisfaction of our clients. We work tirelessly to exceed their expectations and ensure they are fully satisfied with the final results.</Text>

              <Box>
                <Button variant="solid" bg="#0573E4" color="white" size="lg" borderRadius="4">
                  <Text px="12">Click here and get a free estimate</Text>
                </Button>
              </Box>


            </Stack>

          </Grid>
        </HStack>
      </Stack>


      <Stack maxW={1280} w="100%" margin="0 auto" py="8">
        <Text fontSize="4xl" fontWeight={400} lineHeight="1.2">See What Our Clients Say<br></br> About Us</Text>
        <Text fontWeight={300} fontSize="lg">
          Customer Reviews
        </Text>

        <SimpleGrid columns={2} pt="6">
          <HStack>
            <Image src="/before.jpg" w="200px" />
            <Stack bg="white" p="4">
              <Icon as={RiChatQuoteFill} />
              <Text>
                HH Painting exceeded my expectations! Their attention to detail and professionalism were remarkable.
                My home looks absolutely stunning now. Highly recommend!
              </Text>
              <Text fontWeight="bold">Sarah G.</Text>
            </Stack>
          </HStack>

          <HStack>
            <Image src="/after.jpg" w="200px" />
            <Stack bg="white" p="4">
              <Icon as={RiChatQuoteFill} />
              <Text>
                HH Painting exceeded my expectations! Their attention to detail and professionalism were remarkable.
                My home looks absolutely stunning now. Highly recommend!
              </Text>
              <Text fontWeight="bold">Sarah G.</Text>
            </Stack>
          </HStack>
        </SimpleGrid>


      </Stack>


      <Stack bg="#0573E4" color="white" borderRadius="50px 50px 0 0">
        <Stack maxW={1280} w="100%" margin="0 auto" py="12" align="center">
          <Text fontSize="4xl">That's what sets us apart.</Text>
          <Text fontSize="2xl">
            Our ability to deliver and exceed your expectations is what makes us so different.
          </Text>
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
