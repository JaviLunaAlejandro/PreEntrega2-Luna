import React from 'react'
import { Container, Flex, Spacer, Box, Button, Menu, MenuButton, MenuList, MenuItem, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Flex alignItems="center" bg='#f9bc60' gap="2">
            <Box id='brand' p='10' bg='white.400'>
                <h1 color='black'>Pet Shop Loli y Pancha</h1>
            </Box>
            <Spacer />
            <Box>
            {<Menu>
            {<MenuButton className='menu-button'  as={Button} size="lg" variant="outlione" bg="#f9bc60" rightIcon={<ChevronDownIcon/>}>
                Categorias
            </MenuButton>}
                <MenuList >
                    <MenuItem className='item'>Mascotas</MenuItem>
                    <MenuItem className='item'>Marcas</MenuItem>
                    <MenuItem className='item'>Ofertas</MenuItem>
                </MenuList>
            </Menu>}
            </Box>
            <Spacer/>
            <Box p='10' w="300px" bg='white.400'>
                <CartWidget />
            </Box>
        </Flex>
 
    )
}

export default NavBar
