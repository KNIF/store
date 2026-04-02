import { Box, Flex, Text } from '@chakra-ui/react';
import { useColorModeValue } from '../context/ColorModeContext';

import Logo from './logo';

// footer component
export default function Footer() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} color={textColor}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: borderColor,
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '2px solid',
            borderColor: borderColor,
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          This is a demo site. I do not own any copyright to the images or logos
          shown here.
        </Text>
      </Box>
    </Box>
  );
}
