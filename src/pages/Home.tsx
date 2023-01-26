import { Container, Heading } from '@chakra-ui/react';
import { LatestWishlistedKList } from '../components/LatestWishlistedKList';


export default function Home() {
    return (
        <Container pt="40" maxW='container.md'>
            <Heading mb='6'>Latest added wishes</Heading>
            <LatestWishlistedKList/>
        </Container>
    )
}
