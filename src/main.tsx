import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import { Login } from './pages/Login';
import Error from './pages/Error';
import Profile from './pages/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <Error />,
        children: [
            {index: true, element: <Home />},
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <DevSupport ComponentPreviews={ ComponentPreviews }
                        useInitialHook={ useInitial }
            >
                <RouterProvider router={router} />
            </DevSupport>
        </ChakraProvider>
    </React.StrictMode>,
)
