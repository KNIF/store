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

const navbarItems = {
  Home: '/',
  About: '/about',
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const globalBgColor = useColorModeValue('gray.100', 'gray.900');
  const btnBgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Box
        bg={globalBgColor}
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
          {/* Mobile friendly navbar */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            style={{ marginRight: '1rem' }}
          />

          <HStack spacing={8} alignItems={'center'}>
            {/* Audi Logo */}
            <Logo />

            {/* Navbar Items */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
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

          {/* Navbar buttons */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={5}
          >
            {/* Toggle theme button */}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {/* Shopping cart button */}
            <NextLink href={'/cart'} passHref>
              <Button fontSize={'sm'} fontWeight={600} colorScheme='blue'>
                <Icon as={FaShoppingCart} w={5} h={5} />
              </Button>
            </NextLink>
          </Stack>
        </Flex>

        {/* Mobile navbar menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
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
        ) : null}
      </Box>
    </>
  );
}
