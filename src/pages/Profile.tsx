import { Box, Container, Spinner, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WishListItemType } from '../components/LatestWishlistedKList';
import { Heading } from '@chakra-ui/layout';
import { WishlistItemInProfile } from '../components/WishlistItemInProfile';
import { router } from '../main';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export default function Profile() {
    const userWishlistItemsQuery = useQuery({
            queryKey: ['userWishlistItems'],
            queryFn: (): Promise<WishListItemType[]> => {
                return axios
                    .get('api/user/items')
                    .then(response => response.data)
                    .catch(error => router.navigate({ to: '/login' }))
            }
        }
    )

    if (userWishlistItemsQuery.isLoading) return (
        <>
            <Box mt="20">Loading profile...</Box>
            <Spinner size="xl"/>
        </>
    );
    else if (userWishlistItemsQuery.isError) return <pre>{ JSON.stringify(userWishlistItemsQuery.error) }</pre>

    return (
        <Container mt="20">
            <Heading pb={ 4 }>Your wishlisted items</Heading>
            <VStack spacing={ 4 }>
                { userWishlistItemsQuery.data.map((item) => (
                    <WishlistItemInProfile key={ item.id }>
                        { item }
                    </WishlistItemInProfile>
                )) }
            </VStack>
        </Container>

    );
}
