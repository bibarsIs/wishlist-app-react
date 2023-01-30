import { Card, CardHeader, CardBody, Heading, Text, Flex, Avatar, Box } from '@chakra-ui/react'
import { WishListItemType } from './LatestWishlistedKList'

export function WishlistItem({ children: item }: {
    children: WishListItemType
}) {
    return (
        <Card>
            <CardHeader>
                <Flex gap="4">
                    <Avatar name={ item.creator.name } size="lg"/>
                    <Box>
                        <Heading size="lg">{ item.creator.name }</Heading>
                        <Heading size="md">{ item.name }</Heading>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{ item.description }</Text>
            </CardBody>
        </Card>
    );
}
