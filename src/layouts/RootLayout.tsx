import Navbar from '../components/Navbar';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    
    return (
        <Container maxW='container.md' pb={20}>
            <Navbar/>
            <Outlet/>
        </Container>
    )
}
