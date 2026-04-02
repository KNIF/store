import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import { Menu, Moon, ShoppingCart, Sun, X } from 'lucide-react';
import NextLink from 'next/link';
import { useState } from 'react';

import Logo from './logo';
import { useColorMode, useColorModeValue } from '../context/ColorModeContext';

// store navbar items in an object
const navbarItems = {
  Home: '/',
  About: '/about',
};

// navbar component
export default function Navbar() {
  // handler for mobile hamburger menu state (open/close)
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((prev) => !prev);
  const onClose = () => setIsOpen(false);

  // hook for getting and setting the color mode
  const { colorMode, toggleColorMode } = useColorMode();

  // set background color of navbar and buttons according to the color mode (dark/light)
  const navbarBgColor = useColorModeValue('gray.100', 'gray.900');
  const btnBgColor = useColorModeValue('gray.200', 'gray.700');

  // render navbar component
  return (
    <Box
      bg={navbarBgColor}
      px={4}
      style={{
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* mobile friendly navbar hamburger menu */}
        <IconButton
          size={'md'}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          display={{ md: 'none' }}
          onClick={onToggle}
          style={{ marginRight: '1rem' }}
          variant='ghost'
        >
          {isOpen ? <X /> : <Menu />}
        </IconButton>

        {/* left side of navbar */}
        <HStack gap={8} alignItems={'center'}>
          <Logo />

          {/* navbar items */}
          <HStack as={'nav'} gap={4} display={{ base: 'none', md: 'flex' }}>
            {/* iterate though array with navbar items and render them in a button */}
            {Object.entries(navbarItems).map(([key, value]) => (
              <Link
                asChild
                key={key}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: btnBgColor,
                }}
              >
                <NextLink href={value}>
                  {key}
                </NextLink>
              </Link>
            ))}
          </HStack>
        </HStack>

        {/* right side of navbar */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          gap={5}
        >
          {/* toggle theme button */}
          <Button onClick={toggleColorMode} variant='outline'>
            {/* render button with icon according to set color scheme */}
            {colorMode === 'light' ? <Moon /> : <Sun />}
          </Button>

          {/* shopping cart button */}
          <Button asChild fontSize={'sm'} fontWeight={600} colorPalette='blue'>
            <NextLink href={'/cart'}>
              <ShoppingCart size={20} />
            </NextLink>
          </Button>
        </Stack>
      </Flex>

      {/* mobile navbar menu only shows if hamburger icon is clicked */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} gap={4}>
            {/* iterate though array with navbar items and render them in a button */}
            {Object.entries(navbarItems).map(([key, value]) => (
              <Link
                asChild
                key={key}
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: btnBgColor,
                }}
              >
                <NextLink href={value} onClick={onClose}>
                  {key}
                </NextLink>
              </Link>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
