import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import { Login } from './pages/Login';
import Profile, { userWishlistItemsLoader } from './pages/Profile';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './pages/Error';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from 'react-router-dom';

// tanstack query
export const queryClient = new QueryClient()

// react router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout/> }>
            <Route index element={ <Home/> }/>
            <Route path="login" element={ <Login/> }/>
            <Route path="profile" element={ <Profile/> }
                   loader={userWishlistItemsLoader(queryClient)}
            />
            <Route path="*" element={ <Error/> }/>
        </Route>
    )
);

// axios config
axios.defaults.baseURL = 'http://localhost:80';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')

// root
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={ queryClient }>
            <ChakraProvider>
                <DevSupport ComponentPreviews={ ComponentPreviews }
                            useInitialHook={ useInitial }
                >
                    <RouterProvider router={ router }/>
                </DevSupport>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
