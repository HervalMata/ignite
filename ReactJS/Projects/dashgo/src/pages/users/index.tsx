import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {RiAddLine, RiPencilLine} from "react-icons/ri";
import {Pagination} from "../../components/Pagination";
import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex width="100%" maxWidth={1480} my="6" mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Button as='a' size='sm' fontSize='sm' colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                >Criar novo</Button>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.600' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th>
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Herval Mata</Text>
                                        <Text fontWeight='small' color='gray.300'>camasilva84@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>21 de setembro, 2021</Td>
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm'
                                            colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                            >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Herval Mata</Text>
                                        <Text fontWeight='small' color='gray.300'>camasilva84@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>21 de setembro, 2021</Td>
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm'
                                            colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Herval Mata</Text>
                                        <Text fontWeight='small' color='gray.300'>camasilva84@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>21 de setembro, 2021</Td>
                                <Td>
                                    <Button as='a' size='sm' fontSize='sm'
                                            colorScheme='purple' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}