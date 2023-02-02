import { Container, Spinner, VStack } from '@chakra-ui/react';
import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WishListItemType } from '../components/LatestWishlistedKList';
import { Heading } from '@chakra-ui/layout';
import { WishlistItemInProfile } from '../components/WishlistItemInProfile';
import { redirect } from 'react-router-dom';

// from tutorial on https://tkdodo.eu/blog/react-query-meets-react-router
const userWishlistItemsQuery = () => ({
        queryKey: ['userWishlistItems'],
        queryFn: (): Promise<WishListItemType[]> => {
            return axios
                .get('api/user/items')
                .then(response => response.data)
                .catch(error => {
                    return redirect('/login?isRedirected=true', )
                })
        }
    }
)

export function userWishlistItemsLoader(queryClient: QueryClient) {
    return async () => {
        const query = userWishlistItemsQuery()
        return (queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    }
}

export default function Profile() {
    const { data: wishlistItems } = useQuery(userWishlistItemsQuery())
    if (!wishlistItems) return <Spinner />
    return (
        <Container mt="20">
            <Heading pb={ 4 }>Your wishlisted items</Heading>
            <VStack spacing={ 4 }>
                { wishlistItems.map((item) => (
                    <WishlistItemInProfile key={ item.id }>
                        { item }
                    </WishlistItemInProfile>
                )) }
            </VStack>
        </Container>

    );
}
