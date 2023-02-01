import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Heading, useToast } from '@chakra-ui/react'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Error from './pages/Error';
import {
    createBrowserRouter, createRoutesFromElements, redirect, Route,
    RouterProvider,
} from 'react-router-dom';


// tanstack router
/*
const rootRoute = createRouteConfig({
    component: RootLayout,
    errorComponent: Error
});
const indexRoute = rootRoute.createRoute({ path: '/', component: Home })
const loginRoute = rootRoute.createRoute({ path: 'login', component: Login })

const profileRoute = rootRoute.createRoute({ path: 'profile', component: Profile })
const routeConfig = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    profileRoute,
])
export const router = new ReactRouter({ routeConfig })
*/

// react router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout/> }>
            <Route index element={ <Home/> }/>
            <Route path="login" element={ <Login/> }/>
            <Route path="profile" element={ <Profile/> }
                   loader={
                       () => axios.get('api/user/items')
                           .then(response => response.data)
                           .catch(error => {
                               return redirect('/login')
                           })
                   }
            />
            <Route path="*" element={ <Error/> }/>
        </Route>
    )
);

// axios config
axios.defaults.baseURL = 'http://localhost:80';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')

// tanstack query
const queryClient = new QueryClient()
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
