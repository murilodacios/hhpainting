import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid, FormControl, FormLabel, Checkbox, RadioGroup, Radio, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";



export default function ThankYou() {


    return (
        <>

            <Head>
                <title>Painters of Gainesville - HH Painting</title>
            </Head>

            <Stack bgImage="/back-hero.png" bgPos="center" bgSize="cover">
                <Stack py={{ base: "12", md: "20" }} align="center" justify="center" p="4" h="100vh">

                    <Stack spacing="8" align="center">

                        <Image src="/logo.png" w="50px" />

                        <Stack align="center">
                            <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight={500} lineHeight="1.1" color="white">Thank you for your registration!</Text>
                            <Text fontSize={{ base: "xl", md: "2xl" }} color="#88C3FF">We will get back to you as soon as possible!</Text>
                        </Stack>

                        <Link href="/">
                            <Button colorScheme="blue">
                                Go back home!
                            </Button>
                        </Link>


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
