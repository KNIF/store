import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Page from '../components/page';

export default function Home() {
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Page>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='blue.400'
          backgroundClip='text'
        >
          Cart
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          My Shopping Cart
        </Text>
        <Text color={textColor} mb={6}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Box>
    </Page>
  );
}
