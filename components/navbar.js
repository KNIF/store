import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import Logo from './logo';

const navbarItems = {
  Home: '/',
  About: '/about',
};

export default function Navbar() {
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
        }}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              fontSize={'sm'}
              fontWeight={600}
              colorScheme='blue'
              href={'#'}
            >
              View cart & checkout
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
