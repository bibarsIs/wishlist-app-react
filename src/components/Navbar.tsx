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
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { SignupForm } from './SignupForm';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex as="nav" minWidth="max-content" pt="4" gap='4'>
                <Center>
                    <Link as={ NavLink } to="/" fontSize="2xl">
                        Home
                    </Link>
                </Center>
                <Spacer/>
                <ButtonGroup gap="2">
                    <Button onClick={onOpen} >Sign Up</Button>
                    <RouterLink to="/login">
                        <Button colorScheme="teal">Log in</Button>
                    </RouterLink>
                </ButtonGroup>
                <Link as={NavLink} to='/profile' fontSize='xl'>
                    Profile
                </Link>
            </Flex>

            <SignupForm isOpen={isOpen} onClose={onClose} />
        </>
    )
}
