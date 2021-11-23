import {
  Box,
  Heading,
  Text,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import Page from '../components/page';

export default function Home() {
  const { data } = useSWR('/api/products', fetcher);

  const textColor = useColorModeValue('gray.700', 'gray.300');

  // Show loader
  if (!data)
    return (
      <Page>
        <Box textAlign='center' py={10} px={6}>
          <Spinner size='lg' />
        </Box>
      </Page>
    );

  // Show page
  return (
    <Page>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='blue.400'
          backgroundClip='text'
          mb={3}
        >
          Audi Store
        </Heading>
        <Text color={textColor} px='3rem'>
          {JSON.stringify(data)}
        </Text>
      </Box>
    </Page>
  );
}
