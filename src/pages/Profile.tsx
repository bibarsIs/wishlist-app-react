import { Container, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { wishListItem } from '../components/LatestWishlistedKList';
import { Heading } from '@chakra-ui/layout';
import { WishlistItemInProfile } from '../components/WishlistItemInProfile';

export default function Profile() {
    const userWishlistItemsQuery = useQuery({
        queryKey: ['userWishlistItems'], queryFn: async () => {
            const response = await axios.get('api/user/items')
            return response.data as wishListItem[]
        }
    })


    if (userWishlistItemsQuery.isLoading) return <Heading>Loading...</Heading>
    else if (userWishlistItemsQuery.isError) return <pre>{ JSON.stringify(userWishlistItemsQuery.error) }</pre>

    return (
        <Container pt="20">
            <Heading pb={ 4 }>Your wishlisted items</Heading>
            <VStack spacing={4}>
                { userWishlistItemsQuery.data.map((item) => (
                    <WishlistItemInProfile key={ item.id }>
                        { item }
                    </WishlistItemInProfile>
                )) }
            </VStack>
        </Container>

    );
}
