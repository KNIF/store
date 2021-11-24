import {
  Box,
  Flex,
  Heading,
  Text,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import CartContext from '../lib/context';
import Page from '../components/page';
import Category from '../components/category';

export default function Home() {
  const { cart, setCart } = useContext(CartContext);
  const { data, error } = useSWR('/api/products', fetcher);

  const textColor = useColorModeValue('gray.700', 'gray.300');

  // Show error
  if (error)
    return (
      <Page>
        <Box textAlign='center' py={10} px={6}>
          <Box display='inline-block'>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              bg={'red.500'}
              rounded={'50px'}
              w={'55px'}
              h={'55px'}
              textAlign='center'
            >
              <CloseIcon boxSize={'20px'} color={'white'} />
            </Flex>
          </Box>
          <Heading as='h2' size='xl' mt={6} mb={2}>
            Error
          </Heading>
          <Heading as='h3' size='md' mb={5}>
            {error.status} {error.statusText}
          </Heading>
          <Text color={textColor}>{error.message}</Text>
        </Box>
      </Page>
    );

  // Show loader
  if (!data)
    return (
      <Page>
        <Box textAlign='center' py={10} px={6}>
          <Spinner size='lg' />
        </Box>
      </Page>
    );

  //setCart(data);

  // Show page
  return (
    <Page title='Home'>
      <Box textAlign='center' py={10} px={6}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='blue.400'
          backgroundClip='text'
          mb={3}
        >
          AUDI Store
        </Heading>

        {/* List products */}
        {data.map((category) => (
          <Box key={category.name}>
            <Category name={category.name} products={category.models} />
          </Box>
        ))}
      </Box>
    </Page>
  );
}
