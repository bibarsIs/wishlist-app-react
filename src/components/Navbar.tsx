import {
    Flex,
    Button,
    Spacer,
    Center,
    ButtonGroup,
    Link,
    useDisclosure,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { SignupForm } from './SignupForm';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    async function SignOut() {
        await axios.post('logout')
    }

    // clears cache on the backend.
    // async function clearCache() {
    //     await axios.get('api/clear')
    // }

    const query = useQuery(['user']);

    const isLoggedIn = query.data
    return (
        <>
            <Flex as="nav" minWidth="max-content" pt="4" gap="4">
                <Center>
                    <Link as={ RouterLink } to="/" fontSize="2xl">
                        Home
                    </Link>
                </Center>
                <Spacer/>

                    <ButtonGroup gap="2">
                    {/*<Button onClick={clearCache}>Clear</Button>*/}
                        { !isLoggedIn ?
                            (<><Button onClick={ onOpen }>Sign Up</Button><RouterLink to="/login">
                            <Button colorScheme="teal">Log in</Button>
                        </RouterLink></>)
                        :
                        (<Button onClick={ SignOut }>Sign out</Button>)
                        }
                        </ButtonGroup>
                {isLoggedIn ?
                        <Link as={ RouterLink } to="/profile" fontSize="xl">
                        Profile
                        </Link>
                    : ''
                }
            </Flex>

            <SignupForm isOpen={ isOpen } onClose={ onClose }/>
        </>
)
}
