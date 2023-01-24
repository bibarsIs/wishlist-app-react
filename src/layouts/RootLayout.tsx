import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar';
import { Center, Container } from '@chakra-ui/react';

export default function RootLayout() {
    return (
        <Container maxW='container.md'>
            <Navbar/>
            <Outlet/>
        </Container>
    )
}
