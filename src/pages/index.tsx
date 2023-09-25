import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiBrush2Fill, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
import { About } from "../components/About";
import { CardServices } from "../components/CardServices";
import { Contact } from "../components/Contact";
import { Garantia } from "../components/Garantia";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowWorks } from "../components/HowWorks";
import { LastChance } from "../components/LastChance";
import { Problem } from "../components/Problem";
import { QuemSomos } from "../components/QuemSomos";
import { Reviews } from "../components/Reviews";
import { Reviews2 } from "../components/Reviews2";
import { Services } from "../components/Services";


export default function Home() {

  return (
    <>

    <Head>
      <title>Painters of Gainesville - HH Painting</title>
    </Head>

      <Header />

      <Hero />

      <Problem />

      <Services />

      <Reviews />

      <HowWorks />

      <Reviews2 />

      <Garantia />

      <QuemSomos />

      <LastChance />
      
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
