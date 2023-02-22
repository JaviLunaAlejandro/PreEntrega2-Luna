import React from 'react'
import { Link } from 'react-router-dom'
import { Stack} from '@chakra-ui/react'
import { Flex, Spacer, Box, Button, } from '@chakra-ui/react'

import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Flex alignItems="center" bg='#f9bc60' gap="2" b>
            <Box id='brand' p='10' >
                <Link to={"/"}><h1 color='black'>Pet Shop Loli y Pancha</h1></Link>
            </Box>
            <Spacer />
            <Stack spacing={4} direction='row' align='center'>
            <Link to={`/`}>
                <Button colorScheme='teal' size='xs'>
                    Catálogo
                </Button>
                </Link>
                <Link to={`/category/${"Perros"}`}>
                <Button colorScheme='teal' size='xs'>
                    Perros
                </Button>
                </Link>
                <Link to={`/category/${"Gatos"}`}>
                <Button colorScheme='teal' size='xs'>
                    Gatos
                </Button>
                </Link>
                <Link to={`/category/${"Accesorios"}`}>
                <Button colorScheme='teal' size='xs'>
                    Accesorios
                </Button>
                </Link>
            </Stack>
            <Spacer />
            <Box p='10' w="300px" bg='white.400'>
                <CartWidget />
            </Box>
        </Flex>

    )
}

export default NavBar
