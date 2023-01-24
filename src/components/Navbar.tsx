import {
    Flex,
    Heading,
    Box,
    Text,
    Button,
    Spacer,
    HStack,
    Center,
    ButtonGroup,
    Link,
    useDisclosure,
} from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router';
import { SignupForm } from './SignupForm';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex as="nav" minWidth="max-content" pt="4" gap="4">
                <Center>
                    <Link as={ RouterLink } to="/" fontSize="2xl" search={ true } params={ undefined }>
                        Home
                    </Link>
                </Center>
                <Spacer/>
                <ButtonGroup gap="2">
                    <Button onClick={ onOpen }>Sign Up</Button>
                    <RouterLink to="/login" search={ undefined } params={ undefined }>
                        <Button colorScheme="teal">Log in</Button>
                    </RouterLink>
                </ButtonGroup>
                <Link as={ RouterLink } to="/profile" fontSize="xl" search={ true } params={ undefined }>
                    Profile
                </Link>
            </Flex>

            <SignupForm isOpen={ isOpen } onClose={ onClose }/>
        </>
    )
}
