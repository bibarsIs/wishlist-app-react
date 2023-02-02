import Navbar from '../components/Navbar';
import { Container } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function RootLayout() {
    let location = useLocation();
    const queryClient = useQueryClient()

    useEffect(() => {
        queryClient.getQueryData(['user'])
    }, [location]);

    const userQuery = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            // check if user is logged in
            return await axios.get('api/check-login')
        },
    })
    return (
        <Container maxW='container.md' pb={20}>
            <Navbar/>
            <Outlet/>
        </Container>
    )
}
