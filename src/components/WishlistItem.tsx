import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex, Avatar, Spacer, Box } from '@chakra-ui/react'
import { wishListItem } from './LatestWishlistedKList'

export function WishlistItem({ children: item }: {
    children: wishListItem
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
