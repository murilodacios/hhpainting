import { Button, HStack, Icon, Image, Input, Stack, Text, FormControl, FormLabel, RadioGroup, Radio, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiArrowRightUpLine } from "react-icons/ri";
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
                <title>Professional Painters - HH Painting</title>

                <meta name="google-site-verification" content="Va6QO7z7MvjZJ9fSZ0pfpyXIoVUVmspKCzyaouH_Yr0" />
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11240105576"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-11240105576');
                    `}} />
            </Head>



            <Stack bg="#00132B" bgPos="center" bgSize="cover">




                <Stack py={{ base: "12", md: "20" }} align="center" justify="center" p="4">

                    <Stack spacing="8" >

                        <Link href="/">
                            <Image src="/logo.png" w="50px" cursor="pointer" />
                        </Link>

                        <Stack>
                            <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight={500} lineHeight="1.1" color="white">Get a free quote now!</Text>
                            <Text fontSize={{ base: "xl", md: "2xl" }} color="#88C3FF">We Will Paint Your Beautiful House!</Text>
                        </Stack>

                        {/* <Stack bg="#fff" borderRadius="10px" p="4" as="form" onSubmit={handleSubmit(onSubmit)}>
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



                        </Stack> */}



                        <div dangerouslySetInnerHTML={{
                            __html: `
                            <div id="mc_embed_shell">
                            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
                        <style type="text/css">
                              #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; }
                              /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                                 We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                      </style>
                      <div id="mc_embed_signup">
                          <form action="https://hhpaintingfl.us9.list-manage.com/subscribe/post?u=158caf4abe1ad1cfd1edd6fcd&amp;id=83ccdfe374&amp;f_id=004620e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                              <div id="mc_embed_signup_scroll">
                                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                                  <div class="mc-field-group"><label for="mce-EMAIL">E-mail <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text">E-mail</span></div><div class="mc-field-group"><label for="mce-FNAME">Name </label><input type="text" name="FNAME" class=" text" id="mce-FNAME" value=""></div><div class="mc-field-group"><label for="mce-PHONE">Phone </label><input type="text" name="PHONE" class="REQ_CSS" id="mce-PHONE" value=""></div><div class="mc-field-group"><label for="mce-MMERGE8">Address </label><input type="text" name="MMERGE8" class=" text" id="mce-MMERGE8" value=""></div><div class="mc-field-group"><label for="mce-MMERGE2">ZIP code (USA) </label><input type="text" name="MMERGE2" class=" text" id="mce-MMERGE2" value=""></div><div class="mc-field-group input-group"><strong>What Kind of Service Do You Need? </strong><ul><li><input type="radio" name="MMERGE7" id="mce-MMERGE70" value="Interior Painting"><label for="mce-MMERGE70">Interior Painting</label></li><li><input type="radio" name="MMERGE7" id="mce-MMERGE71" value="Exterior Painting"><label for="mce-MMERGE71">Exterior Painting</label></li></ul></div><div class="mc-field-group"><label for="mce-MMERGE9">Please, tell us a bit about your project </label><input type="text" name="MMERGE9" class=" text" id="mce-MMERGE9" value=""></div><div class="mc-field-group input-group"><strong>When do you need this service? </strong><ul><li><input type="radio" name="MMERGE10" id="mce-MMERGE100" value="As Fast As Possible! (1-2 days)"><label for="mce-MMERGE100">As Fast As Possible! (1-2 days)</label></li><li><input type="radio" name="MMERGE10" id="mce-MMERGE101" value="Soon (1 week)"><label for="mce-MMERGE101">Soon (1 week)</label></li><li><input type="radio" name="MMERGE10" id="mce-MMERGE102" value="I'm not in a hurry"><label for="mce-MMERGE102">I'm not in a hurry</label></li></ul></div>
                              <div id="mce-responses" class="clear foot">
                                  <div class="response" id="mce-error-response" style="display: none;"></div>
                                  <div class="response" id="mce-success-response" style="display: none;"></div>
                              </div>
                          <div aria-hidden="true" style="position: absolute; left: -5000px;">
                              /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                              <input type="text" name="b_158caf4abe1ad1cfd1edd6fcd_83ccdfe374" tabindex="-1" value="">
                          </div>
                              <div class="optionalParent">
                                  <div class="clear foot">
                                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"  onClick="setTimeout(() => {window.location.href='https://hhpaintingfl.com/thank-you'}, '1500')">
                                      <p style="margin: 0px auto;"><a href="http://eepurl.com/iH4rOI" title="Mailchimp - marketing por e-mail fácil e divertido"><span style="display: inline-block; background-color: black; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
                                  </div>
                              </div>
                          </div>
                      </form>
                      </div>
                      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[8]='MMERGE8';ftypes[8]='text';fnames[2]='MMERGE2';ftypes[2]='text';fnames[7]='MMERGE7';ftypes[7]='radio';fnames[9]='MMERGE9';ftypes[9]='text';fnames[10]='MMERGE10';ftypes[10]='radio';fnames[3]='ADDRESS';ftypes[3]='address';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
                      
                        `}}>

                        </div>

                        <Stack align="center">


                            <Link href="https://www.google.com/maps/place/HH+Painting/@29.6280106,-82.3781613,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a33a5f84d55d:0x51552d8e3fcac784!8m2!3d29.6280106!4d-82.3781613!16s%2Fg%2F11v15t8fp_?entry=ttu">
                                <Stack cursor="pointer">
                                    <Image src="/stars.png" w="120px" />
                                    <Image src="/google.png" w="120px" />
                                </Stack>
                            </Link>

                        </Stack>

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
