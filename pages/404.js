import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import Page from '../components/page';

export default function NotFound() {
  const textColor = useColorModeValue('gray.500', 'gray.300');

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
          404
        </Heading>
        <Text fontSize='18px' mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={textColor} mb={6}>
          The page you&apos;re looking for does not seem to exist.
        </Text>

        <Link href='/' passHref>
          <Button colorScheme='blue'>Go to Home</Button>
        </Link>
      </Box>
    </Page>
  );
}
