import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { WishListItemType } from './LatestWishlistedKList';

export function WishlistItemInProfile({ children: item } : {
    children: WishListItemType
}) {
    return (
        <Card>
            <CardHeader>
                <Flex gap="4">
                    <Box>
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
