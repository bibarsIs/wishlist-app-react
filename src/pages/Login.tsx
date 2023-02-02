import { Container, useToast } from '@chakra-ui/react';
import { LoginForm } from '../components/LoginForm';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export function Login() {
    const [isRedirected, setIsRedirected] = useSearchParams()
    const toast = useToast()
    const toastId = 'redirected'
    useEffect(() => {
        if (isRedirected.get('isRedirected') && !toast.isActive(toastId)) {
            toast({
                    id: toastId,
                    title: 'Error: you are unauthorized.',
                    description: 'You must log in to access that page.',
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                }
            )
        }

    }, [useLocation()])
    return (
        <Container mt="40">
            <LoginForm/>
        </Container>
    );
}
