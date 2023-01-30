import { Box, Container, Spinner, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WishListItemType } from '../components/LatestWishlistedKList';
import { Heading } from '@chakra-ui/layout';
import { WishlistItemInProfile } from '../components/WishlistItemInProfile';
import { router } from '../main';

export default function Profile() {
    const userWishlistItemsQuery = useQuery({
        queryKey: ['userWishlistItems'],
        queryFn: async () => {
            try {
                const response = await axios.get('api/user/items')
                return response.data as WishListItemType[]
            } catch (e) {
                await router.navigate({ to: '/login' })
            }
        }
    })

    if (userWishlistItemsQuery.isLoading) return (
        <>
            <Box mt="20">Loading profile...</Box>
            <Spinner size="xl"/>
        </>
    );
    // else if (userWishlistItemsQuery.isError) return (
    //     <Text>Error: Log in to view your profile.</Text>
    // );
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
