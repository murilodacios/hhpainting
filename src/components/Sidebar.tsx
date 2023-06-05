import { HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiArchiveLine, RiBarChart2Line, RiCloudLine, RiCopperCoinLine, RiEye2Line, RiHome2Line, RiMailLine, RiSearch2Line, RiUser3Line, RiUserLine } from "react-icons/ri";

export function Sidebar() {

    return (
        <>
            <Stack bg="white" borderRight="1px solid #eee">

                <Stack w="100%" borderRight="0.5px solid #eee" height="100%" display={{ base: "none", md: "flex" }}>
                    <Stack spacing="4" px="4" py="5" w="100%">
                        <Image src="/logo.svg" w="50px" borderRadius="5px" />
                    </Stack>

                    <Stack align="flex-start" spacing="2" mt="16">

                        <HStack px="4" py="2" spacing="6" w="100%">
                            <Text fontSize="12" fontWeight="bold" color="gray.500">
                                PAINEL
                            </Text>
                        </HStack>

                        <HStack px="4" py="2" spacing="6" _hover={{ bg: "gray.50" }} w="100%">


                            <Link href="/painel">
                                <HStack>
                                    <Icon as={RiHome2Line} fontSize="20" />
                                    <Text cursor="pointer" fontSize="14">Visão geral</Text>
                                </HStack>
                            </Link>

                        </HStack>


                        <HStack px="4" py="2" spacing="6" w="100%">
                            <Text fontSize="12" fontWeight="bold" color="gray.500">
                                SERVIÇOS
                            </Text>
                        </HStack>


                        <HStack px="4" py="2" spacing="6" _hover={{ bg: "gray.50" }} w="100%">

                            <Link href="/carteira">
                                <HStack cursor="pointer">
                                    <Icon as={RiCopperCoinLine} fontSize="20" />
                                    <Text fontSize="14">Carteira</Text>
                                </HStack>
                            </Link>

                        </HStack>

                        <HStack px="4" py="2" spacing="6" _hover={{ bg: "gray.50" }} w="100%">

                            <Link href="/projetos">
                                <HStack cursor="pointer">
                                    <Icon as={RiArchiveLine} fontSize="20" />
                                    <Text fontSize="14">Projetos</Text>
                                </HStack>
                            </Link>

                        </HStack>

                        <HStack px="4" py="2" spacing="6" _hover={{ bg: "gray.50" }} w="100%">

                            <Link href="/insights">
                                <HStack cursor="pointer">
                                    <Icon as={RiBarChart2Line} fontSize="20" />
                                    <Text fontSize="14">Relatórios</Text>
                                </HStack>
                            </Link>

                        </HStack>



                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}