import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import Page from '../components/page';

// 404 not found page
export default function NotFound() {
  // set color of text according to the color mode (dark/light)
  const textColor = useColorModeValue('gray.500', 'gray.300');

  // render 404 page
  return (
    <Page>
      <Box textAlign='center' py={10} px='3vw'>
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
        <Text color={textColor} mb={6} px='3vw'>
          The page you&apos;re looking for does not seem to exist.
        </Text>

        {/* button to go back to homepage */}
        <Link href='/' passHref>
          <Button colorScheme='blue'>Go to Home</Button>
        </Link>
      </Box>
    </Page>
  );
}
