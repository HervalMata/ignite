import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import {Input} from "../../components/Form/Input";
import {Sidebar} from "../../components/Sidebar";
import {Header} from "../../components/Header";
import Link from "next/link"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória').min(6, 'Senha deverá ter no minino 6 caracteres'),
    password: yup.string().required('Confirmação de senha é obrigatória').oneOf([null, yup.ref('As senhas precisam ser iguais')])
})

export default function CreateUser() {
    const { register, handleSubmit, formState  } = useForm({
        resolver: yupResolver(createUserFormSchema)
    });
    const { errors, isSubmitting } = formState;
    const handleSignIn: SubmitHandler<CreateUserFormData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }
    return (
        <Box>
            <Header />
            <Flex width="100%" maxWidth={1480} my="6" mx='auto' px={['6', '8']}>
                <Sidebar />
                <Box as='form' flex='1' borderRadius={8} bg='gray.800' px={['6', '8']} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='name' label='Nome completo' error={errors.name} {...register('name')}/>
                            <Input name='email' type='email' label='Email' error={errors.email} {...register('email')} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='password' type='password' label='Senha' error={errors.password} {...register('password')} />
                            <Input name='password_confirmation' type='password' label='Confirmação de senha' error={errors.password_confirmation} {...register('password_confirmation')} />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button type='submit' colorScheme='pink' isLoading={isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}