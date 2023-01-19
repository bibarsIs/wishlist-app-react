import { Container } from '@chakra-ui/react';
import { LoginForm } from '../components/LoginForm';

export function Login() {
    return (
        <Container pt='40'>
            <LoginForm />
        </Container>
    );
}
