import { Box, Heading, Text, Button } from '@chakra-ui/react';

import Navbar from '../components/navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='teal.500'
          backgroundClip='text'
        >
          404
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
          The page you're looking for does not seem to exist
        </Text>

        <Button
          colorScheme='teal'
          backgroundColor='teal.500'
          color='white'
          variant='solid'
          href='/'
        >
          Go to Home
        </Button>
      </Box>
    </>
  );
}
