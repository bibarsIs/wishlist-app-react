import {
    Flex,
    Button,
    Spacer,
    Center,
    ButtonGroup,
    Link,
    useDisclosure,
} from '@chakra-ui/react'
import { Link as RouterLink } from '@tanstack/react-router';
import { SignupForm } from './SignupForm';
import axios from 'axios';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    async function SignOut() {
        await axios.post('logout')
    }

    // clears cache on the backend.
    // async function clearCache() {
    //     await axios.get('api/clear')
    // }

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
                    {/*<Button onClick={clearCache}>Clear</Button>*/}
                    <Button onClick={ onOpen }>Sign Up</Button>
                    <RouterLink to="/login" search={ undefined } params={ undefined }>
                        <Button colorScheme="teal">Log in</Button>
                    </RouterLink>
                    <Button onClick={ SignOut }>Sign out</Button>

                </ButtonGroup>
                <Link as={ RouterLink } to="/profile" fontSize="xl" search={ true } params={ undefined }>
                    Profile
                </Link>
            </Flex>

            <SignupForm isOpen={ isOpen } onClose={ onClose }/>
        </>
    )
}
