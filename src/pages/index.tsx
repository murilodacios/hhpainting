import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { RiBrush2Fill, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
import { About } from "../components/About";
import { CardServices } from "../components/CardServices";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";


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

      <Hero />

      <Services />

      <About />

      <Reviews />

      <Contact />



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
