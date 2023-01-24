import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, FormControl, FormLabel, Input, Button, FormHelperText,
} from '@chakra-ui/react'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

export function SignupForm({ isOpen, onClose }: {
    isOpen: boolean,
    onClose: () => void,
}) {

    type Inputs = {
        email: string,
        name: string,
        password: string,
        passwordConfirmation: string
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        const res = await axios.post('/register',
            {
                email: data.email,
                name: data.name,
                password: data.password,
                password_confirmation: data.passwordConfirmation
            },
            {
                headers: { 'Content-Type': 'application/json' }
            })
        console.log(res.data)
    };

    return (
        <Modal
            isOpen={ isOpen }
            onClose={ onClose }
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton/>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <ModalBody pb={ 6 }>
                        <FormControl isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="Email" { ...register('email') }/>
                        </FormControl>

                        <FormControl mt={ 4 } isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Name" { ...register('name') }/>
                            <FormHelperText>This name will be visible publicly</FormHelperText>
                        </FormControl>

                        <FormControl mt={ 4 } isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password" { ...register('password') }/>
                            <FormHelperText>Must be at least 6 characters long</FormHelperText>
                        </FormControl>

                        <FormControl mt={ 4 } isRequired>
                            <FormLabel>Password confirmation</FormLabel>
                            <Input type="password" placeholder="Repeat the password" { ...register('passwordConfirmation') }/>
                            <FormHelperText>Must be same as above</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme="teal" mr={ 3 }>
                            Sign up
                        </Button>
                        <Button onClick={ onClose }>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
        ;
}
