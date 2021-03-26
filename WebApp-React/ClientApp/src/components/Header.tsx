import { Flex, Heading } from '@chakra-ui/react'
import * as React from 'react'


const Header = () => {
    return (
        <Flex as="nav" align="center" justify="space-between" w="100%" mb={8} p={8}>
            <Flex align="center"><Heading size="md">Nude Solutions Assignment</Heading></Flex>
        </Flex>
    )
}

export default Header