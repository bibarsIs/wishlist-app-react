import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WishlistItem } from './WishlistItem';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    SimpleGrid,
    SkeletonCircle,
    SkeletonText
} from '@chakra-ui/react'

export type WishListItemType = {
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
            return response.data as WishListItemType[]
        }
    })

    // if loading or error
    if (latestItemsQuery.isLoading) return (
        <SimpleGrid minChildWidth="300px" spacing={ 4 }>
            { [...Array(6)].map((x, i) =>
                <Card key={i}>
                    <CardHeader>
                        <Flex gap="4">
                            <SkeletonCircle size="16"/>
                            <Box>
                                <SkeletonText spacing="4" skeletonHeight="2"/>
                                <SkeletonText spacing="4" skeletonHeight="2"/>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <SkeletonText noOfLines={ 4 } spacing="4" skeletonHeight="2"/>
                    </CardBody>
                </Card>
            ) }
        </SimpleGrid>

    )
    else if (latestItemsQuery.isError) return <pre>{ JSON.stringify(latestItemsQuery.error) }</pre>


    // when loaded
    return (
        <SimpleGrid minChildWidth="300px" spacing={ 4 }>
            { latestItemsQuery.data.map((item) => (
                <WishlistItem key={ item.id }>
                    { item }
                </WishlistItem>
            )) }
        </SimpleGrid>
    );
}
