import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import Logo from './logo';

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
        }}
      >
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '2px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '2px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © {new Date().getFullYear()} AUDI AG. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}
