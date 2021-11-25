import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import NextLink from 'next/link';

import Logo from './logo';

// store navbar items in an object
const navbarItems = {
  Home: '/',
  About: '/about',
};

// navbar component
export default function Navbar() {
  // handler for mobile hamburger menu state (open/close)
  const { isOpen, onOpen, onClose } = useDisclosure();

  // hook for getting and setting the color mode
  const { colorMode, toggleColorMode } = useColorMode();

  // set background color of navbar and buttons according to the color mode (dark/light)
  const navbarBgColor = useColorModeValue('gray.100', 'gray.900');
  const btnBgColor = useColorModeValue('gray.200', 'gray.700');

  // render navbar component
  return (
    <>
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
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} // render hamburger icon if menu is open else render close icon
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen} // toggle menu open/close
            style={{ marginRight: '1rem' }}
          />

          {/* left side of navbar */}
          <HStack spacing={8} alignItems={'center'}>
            <Logo />

            {/* navbar items */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {/* iterate though array with navbar items and render them in a button */}
              {Object.entries(navbarItems).map(([key, value]) => (
                <NextLink href={value} key={key} passHref>
                  <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: btnBgColor,
                    }}
                    href={value}
                  >
                    {key}
                  </Link>
                </NextLink>
              ))}
            </HStack>
          </HStack>

          {/* right side of navbar */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={5}
          >
            {/* toggle theme button */}
            <Button onClick={toggleColorMode}>
              {/* render button with icon according to set color scheme */}
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {/* shopping cart button */}
            <NextLink href={'/cart'} passHref>
              <Button fontSize={'sm'} fontWeight={600} colorScheme='blue'>
                <Icon as={FaShoppingCart} w={5} h={5} />
              </Button>
            </NextLink>
          </Stack>
        </Flex>

        {/* mobile navbar menu only shows if hamburger icon is clicked */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* iterate though array with navbar items and render them in a button */}
              {Object.entries(navbarItems).map(([key, value]) => (
                <NextLink href={value} key={key} passHref>
                  <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: btnBgColor,
                    }}
                    href={value}
                  >
                    {key}
                  </Link>
                </NextLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
