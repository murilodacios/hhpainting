import { Box, Card, CardBody, HStack, Icon, Image, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiArchiveLine, RiBarChart2Line, RiCloudLine, RiCopperCoinLine, RiEye2Line, RiHome2Line, RiMailLine, RiSearch2Line, RiUser3Line, RiUserLine } from "react-icons/ri";

type CardProps = {
    title: string;
    type: string;
}

export function CardServices({title, type}: CardProps) {

    return (
        <>
            <Card _hover={{bg: "#0573E4", color: "#fff"}} transition="0.3s all">
                <CardBody>
                    {/* <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                      /> */}
                    <Stack my='5' spacing='2'>
                        <Box>
                        {/* {type && type == "Exterior" ? <Tag colorScheme="blue">Exterior</Tag> : <Tag></Tag>} */}
                            
                        </Box>
                        <Text fontSize='xl'>{title}</Text>
                        {/* <Text>
                          This sofa is perfect for modern tropical spaces, baroque inspired
                          spaces, earthy toned spaces and for people who love a chic design with a
                          sprinkle of vintage design.
                        </Text> */}

                    </Stack>
                </CardBody>

            </Card>
        </>
    )
}