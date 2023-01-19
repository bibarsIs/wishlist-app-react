import {
    Button,
    Center,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    VStack
} from '@chakra-ui/react';
import { useState } from 'react';


type Inputs = {
    email: string,
    password: string,
};

export function LoginForm() {

    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isError, setIsError] = useState(false);

    return (
        <Container border='2px' p='10'>
            <form>
                <FormControl isRequired isInvalid={ isError }>
                    <Center>
                        <Heading pb="10">Log in</Heading>
                    </Center>

                    <FormLabel>Email address</FormLabel>
                    <Input type="email"/>
                    <FormLabel>Password</FormLabel>
                    <Input type="password"/>

                    <Center>
                        <Button type="submit" mt={ 4 } colorScheme="teal" isLoading={ isLoggingIn }>Log in</Button>
                    </Center>
                </FormControl>
            </form>
            <Divider mt="10"/>

            <Center>
                <HStack mt="10">
                    <Heading fontSize="lg">Or</Heading>
                    <Button colorScheme="teal">Sign Up</Button>
                </HStack>
            </Center>
        </Container>
    );
}
