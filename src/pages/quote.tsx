import { Box, Button, HStack, Icon, Image, Input, SimpleGrid, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Heading, Divider, CardFooter, ButtonGroup, Tag, Grid, FormControl, FormLabel, Checkbox, RadioGroup, Radio, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiArrowRightLine, RiArrowRightUpLine, RiBrush2Fill, RiChatQuoteFill, RiFacebookFill, RiHome2Fill, RiInstagramFill, RiPaintBrushFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";
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
import { api } from "../services/api";

type InputData = {
    name: string;
    email: string;
    phone: string;
    zip_code: string;
    address: string;
    type: string;
    about: string;
    velocity: string;
    found_us: string;
}

export default function Quote() {

    const [page, setPage] = useState(0)
    const toast = useToast()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<InputData>()

    const router = useRouter()

    const onSubmit = (data: InputData) => {
        const {
            name,
            email,
            phone,
            zip_code,
            address,
            type,
            about,
            velocity,
            found_us
        } = data

        api.post("/leads/create", {
            name,
            email,
            phone,
            zip_code,
            address,
            type,
            about,
            velocity,
            found_us
        }).then(response => {
            toast({
                title: 'Successful registration',
                description: "We will get in touch with you soon",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })

            reset()

            setTimeout(() => {
                router.push("/thank-you")
            }, 1000)
        }).catch(err => {
            toast({
                title: 'Error creating',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right'
            })

            reset()
        })


    }


    return (
        <>

            <Head>
                <title>Painters of Gainesville - HH Painting</title>
            </Head>



            <Stack bgImage="/back-hero.png" bgPos="center" bgSize="cover">




                <Stack py={{ base: "12", md: "20" }} align="center" justify="center" p="4">

                    <Stack spacing="8" >

                        <Link href="/">
                            <Image src="/logo.png" w="50px" cursor="pointer" />
                        </Link>

                        <Stack>
                            <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight={500} lineHeight="1.1" color="white">Get a free quote now!</Text>
                            <Text fontSize={{ base: "xl", md: "2xl" }} color="#88C3FF">Transform Your Ugly House Into A Beautiful Home!</Text>
                        </Stack>

                        <Stack bg="#fff" borderRadius="10px" p="4" as="form" onSubmit={handleSubmit(onSubmit)}>
                            {page === 0 ?

                                <>

                                    <Text fontSize="xl" fontWeight="bold">Basic info</Text>

                                    <FormControl>
                                        <FormLabel htmlFor="name">
                                            Name
                                        </FormLabel>
                                        <Input id="name" {...register("name")} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor="email">
                                            E-mail
                                        </FormLabel>
                                        <Input id="email" type="email" {...register("email")} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel htmlFor="phone">
                                            Phone
                                        </FormLabel>
                                        <Input id="phone" {...register("phone")} />
                                    </FormControl>

                                    {watch("name") && watch("email") && watch("phone")
                                        &&

                                        <HStack pt="4">
                                            <Button colorScheme="blue" onClick={() => setPage(page + 1)} >Next</Button>
                                        </HStack>
                                    }
                                </>

                                :

                                page == 1 ?

                                    <>

                                        <Text fontSize="xl" fontWeight="bold">Your address</Text>

                                        <FormControl>
                                            <FormLabel htmlFor="address">
                                                Address
                                            </FormLabel>
                                            <Input id="address" {...register("address", {
                                                value: ""
                                            })} />
                                        </FormControl>

                                        <FormControl>
                                            <FormLabel htmlFor="zip_code">
                                                Zip
                                            </FormLabel>
                                            <Input {...register("zip_code", {
                                                value: ""
                                            })} />
                                        </FormControl>

                                        <HStack align="center" pt="6">
                                            <Button onClick={() => setPage(page - 1)}>Back</Button>

                                            {watch("address") && watch("zip_code")
                                                &&
                                                <Button colorScheme="blue" onClick={() => setPage(page + 1)} >Next</Button>
                                            }
                                        </HStack>


                                    </>

                                    :


                                    page == 2 ?

                                        <>

                                            <Text fontSize="xl" fontWeight="bold">What Kind of Service Do You Need?</Text>

                                            <RadioGroup>
                                                <Stack direction='column'>
                                                    <Radio value='Interior Painting' {...register("type")}>Interior Painting</Radio>
                                                    <Radio value='Exterior Painting' {...register("type")}>Exterior Painting</Radio>
                                                </Stack>
                                            </RadioGroup>

                                            <HStack align="center" pt="6">
                                                <Button onClick={() => setPage(page - 1)}>Back</Button>

                                                {watch("type")
                                                    &&
                                                    <Button colorScheme="blue" onClick={() => setPage(page + 1)} >Next</Button>
                                                }
                                            </HStack>


                                        </>

                                        :

                                        page == 3 ?

                                            <>

                                                <Text fontSize="xl" fontWeight="bold">Please, tell us a bit about your project</Text>

                                                <FormControl>
                                                    <Input {...register("about", {
                                                        value: ""
                                                    })} />
                                                </FormControl>

                                                <HStack align="center" pt="6">
                                                    <Button onClick={() => setPage(page - 1)}>Back</Button>

                                                    {watch("about")
                                                        &&
                                                        <Button colorScheme="blue" onClick={() => setPage(page + 1)} >Next</Button>
                                                    }
                                                </HStack>


                                            </>

                                            :

                                            page == 4 ?

                                                <>

                                                    <Text fontSize="xl" fontWeight="bold">When do you need this service?</Text>

                                                    <RadioGroup>
                                                        <Stack direction='column'>
                                                            <Radio value='As Fast As Possible! (1-2 days)' {...register("velocity")} >As Fast As Possible! (1-2 days)</Radio>
                                                            <Radio value='Soon (1 Week)' {...register("velocity")} >Soon (1 Week)</Radio>
                                                            <Radio value='I am not in a hurry' {...register("velocity")} >I am not in a hurry</Radio>
                                                        </Stack>
                                                    </RadioGroup>

                                                    <HStack align="center" pt="6">
                                                        <Button onClick={() => setPage(page - 1)}>Back</Button>

                                                        {watch("velocity")
                                                            &&
                                                            <Button colorScheme="blue" onClick={() => setPage(page + 1)} >Next</Button>
                                                        }
                                                    </HStack>


                                                </>

                                                :

                                                page == 5 ?

                                                    <>

                                                        <Text fontSize="xl" fontWeight="bold">How you found out about us?</Text>

                                                        <RadioGroup>
                                                            <Stack direction='column'>
                                                                <Radio value='Referral' {...register("found_us")}>Referral</Radio>
                                                                <Radio value='Social Media' {...register("found_us")}>Social Media</Radio>
                                                                <Radio value='Google' {...register("found_us")}>Google</Radio>
                                                                <Radio value='Youtube' {...register("found_us")}>Youtube</Radio>
                                                                <Radio value='Others' {...register("found_us")}>Others</Radio>
                                                            </Stack>
                                                        </RadioGroup>

                                                        <HStack align="center" pt="6">
                                                            <Button onClick={() => setPage(page - 1)}>Back</Button>

                                                        </HStack>

                                                        {watch("found_us")
                                                            &&
                                                            <Button variant="solid" colorScheme="blue" type="submit">
                                                                <Text>Submit</Text>
                                                            </Button>
                                                        }




                                                    </>

                                                    :

                                                    ""


                            }



                        </Stack>


                        <Stack>
                            <Image src="/stars.png" w="120px" />

                            <Link href="https://www.angi.com/companylist/us/fl/gainesville/hh-painting-reviews-10744644.htm">
                                <HStack cursor="pointer" color="white">
                                    <Text>We are 5 stars on Angies List</Text>
                                    <Icon as={RiArrowRightUpLine} />
                                </HStack>
                            </Link>

                        </Stack>

                    </Stack>

                </Stack>



            </Stack>


            <Stack borderBottom="1px solid #eee">
                <HStack maxW={1400} w="100%" margin="0 auto" px="4" py="8" gap="12" justify="space-between" align="flex-start" fontFamily="Inter">
                    <Stack spacing="8" align="flex-start" direction={{ base: "column", md: "row" }}>
                        <Text fontSize="md" fontWeight={500} color="#454545">
                            We transform your home to make it truly<br></br> yours and more vibrant. Just the way you <br></br>have always dreamed.
                        </Text>

                        <Stack spacing="2" color="#454545">
                            <Text fontSize="xl" fontWeight="bold">
                                +30 satisfied<br></br>
                                partners
                            </Text>
                        </Stack>
                    </Stack>


                    <Stack direction={{ base: "column-reverse", md: "row" }} align="flex-start">
                        <Stack>
                            <Image src="/stars.png" w="120px" />
                            <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                <HStack cursor="pointer">
                                    <Text>We are 5 stars on Google</Text>
                                    <Icon as={RiArrowRightUpLine} />
                                </HStack>
                            </Link>
                        </Stack>

                        <Image src="/google.png" w="120px" />
                    </Stack>

                </HStack>
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
