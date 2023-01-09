// import React from 'react'
 import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <div style={{display:"flex",justifyContent:"space-evenly",fontSize:"20px",textDecoration:"none"}}>
//        <Link href="/">Vivek Soni</Link>
//        <Link href="/project">Projects</Link>
//        <Link href="/education">Education</Link>
//     </div>
//   )
// }

// export default Navbar

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box><Link href="/">Vivek Soni</Link></Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                
       <Link href="/project">Projects</Link>
       <Link href="/education">Education</Link>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://avatars.githubusercontent.com/u/112796001?v=4'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem><Link href="/project">Projects</Link></MenuItem>
                  <MenuItem><Link href="/education">Education</Link></MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Box>
  
      </>
    );
  }