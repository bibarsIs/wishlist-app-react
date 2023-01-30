import { Container, useToast } from '@chakra-ui/react';
import { LoginForm } from '../components/LoginForm';

export function Login() {
    // todo show toast if unauthorized user navigated from profile
    // const toast = useToast()

    return (
        <Container mt='40'>
            <LoginForm />
        </Container>
    );
}
