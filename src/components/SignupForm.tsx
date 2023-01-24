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

export function SignupForm({ isOpen, onClose }: {
    isOpen: boolean,
    onClose: () => void,

}) {

    return (
        <Modal
            isOpen={ isOpen }
            onClose={ onClose }
        >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton/>
                <form>
                    <ModalBody pb={ 6 }>
                        <FormControl isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="Email"/>
                        </FormControl>

                        <FormControl mt={ 4 } isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Name"/>
                            <FormHelperText>This name will be visible publicly</FormHelperText>
                        </FormControl>

                        <FormControl mt={ 4 } isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="Password"/>
                            <FormHelperText>Must be at least 6 characters long</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme="teal" mr={ 3 }>
                            Save
                        </Button>
                        <Button onClick={ onClose }>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
        ;
}
