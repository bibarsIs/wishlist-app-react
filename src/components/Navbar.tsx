import { Flex, Heading, Box, Text, Button, Spacer, HStack, Center } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Flex minWidth='max-content'>
            <Center >
                <Heading size='md'>
                    Home
                </Heading>
            </Center>
            <Spacer />
            <Center>
                <Text>
                    Sign up
                </Text>
            </Center>
            <Center>
                <Text>
                    Log in
                </Text>
            </Center>
        </Flex>
    )
}
