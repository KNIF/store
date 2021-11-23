import {
  Box,
  Flex,
  HStack,
  Link,
  Icon,
  Button,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

const navbarItems = {
  Home: '/',
  About: '/about',
  Contact: '/contact',
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            {/* Audi Logo */}
            <Icon
              viewBox='0 -15 225 100'
              color='red.500'
              width='200'
              height='50'
            >
              <path
                fill='none'
                stroke={colorMode === 'light' ? '#000' : '#fff'}
                strokeWidth='7'
                d='m34,4a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0z'
              />
            </Icon>

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
                      bg,
                    }}
                    href={value}
                  >
                    {key}
                  </Link>
                </NextLink>
              ))}
            </HStack>
          </HStack>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
            >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'teal.500'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
