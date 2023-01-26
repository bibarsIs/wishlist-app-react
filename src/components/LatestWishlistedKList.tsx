import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Heading } from '@chakra-ui/layout';
import { WishlistItem } from './WishlistItem';
import { SimpleGrid  } from '@chakra-ui/react'

export type wishListItem = {
    id: number,
    name: string,
    description: string,
    creator: {
        id: number,
        name: string
    }
}

export function LatestWishlistedKList() {
    const latestItemsQuery = useQuery({
        queryKey: ['latestItems'],
        queryFn: async () => {
            // get 6 latest wishlisted items by other users
            const response = await axios.get('api/latestWishlisted')
            return response.data as wishListItem[]
        }
    })

    // if loading or error
    if (latestItemsQuery.isLoading) return <Heading>Loading...</Heading>
    else if (latestItemsQuery.isError) return <pre>{ JSON.stringify(latestItemsQuery.error) }</pre>


    return (
        <SimpleGrid minChildWidth='300px' spacing={4}>
            { latestItemsQuery.data.map((item) => (
                <WishlistItem key={ item.id }>
                    { item }
                </WishlistItem>
            )) }

        </SimpleGrid >
    );
}
