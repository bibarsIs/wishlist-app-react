import {
    Button,
    Center,
    Container,
    Divider,
    FormControl, FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input, useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupForm } from './SignupForm';
import axios from 'axios';


type Inputs = {
    email: string,
    password: string,
};

export function LoginForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: data.email,
                password: data.password
            }).then(r => {
                console.log(r)
            })
        });


    };
    return (
        <Container border="2px" p="10">
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Center>
                    <Heading pb="10">Log in</Heading>
                </Center>
                <FormLabel>Email address</FormLabel>
                <Input type="email" { ...register('email', { required: true }) } />
                <FormControl isInvalid={ errors.password as unknown as boolean }>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" { ...register('password', { required: true, minLength: 6 }) } />
                    { errors.password
                        ? <FormErrorMessage>Password must be at least 6 characters long.</FormErrorMessage>
                        : ''
                    }
                </FormControl>

                <Center>
                    <Button type="submit" mt={ 4 } colorScheme="teal" isLoading={ isLoggingIn }>Log in</Button>
                </Center>
            </form>
            <Divider mt="10"/>

            <Center>
                <HStack mt="10">
                    <Heading fontSize="lg">Or</Heading>
                    <Button colorScheme="teal" onClick={ onOpen }>Sign Up</Button>
                    <SignupForm isOpen={ isOpen } onClose={ onClose }></SignupForm>
                </HStack>
            </Center>
        </Container>
    )
        ;
}
