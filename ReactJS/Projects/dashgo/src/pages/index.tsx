import {Button, Flex, FormControl, FormLabel, Input, Stack} from "@chakra-ui/react";

export default function Home() {
  return (
      <Flex
        w='100vw' h='100vh' align='center' justify='center'>
          <Flex as="form" width="100%" maxWidth={360} bg='gray.800'
                p='8' borderRadius='8' flexDir="column">
              <Stack spacing='4'>
                  <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input type='email' name='email'
                             focusBorderColor='pink.500'
                             bgColor="gray.900" variant='filled'
                             _hover={{ bgColor: 'gray.900' }}
                             size='lg' id='email'
                      />
                      <FormLabel htmlFor="password">Senha</FormLabel>
                      <Input type='password' name='password'
                             focusBorderColor='pink.500'
                             bgColor="gray.900" variant='filled'
                             _hover={{ bgColor: 'gray.900' }}
                             size='lg' id='password'
                      />
                  </FormControl>
              </Stack>
              <Button type="submit" mt="6" colorScheme='pink'>
                  Entrar
              </Button>
          </Flex>
      </Flex>
  )
}
