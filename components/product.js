import {
  Box,
  Button,
  Text,
  Icon,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import Image from 'next/image';

import { useAppContext } from '../context/AppContext';

export default function Product({ name, price, image }) {
  const { state, dispatch } = useAppContext();

  const toast = useToast();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const blurData = useColorModeValue(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8++l7PQAJAQNXTZfoNwAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUl1SuBwABdgDU74/CPwAAAABJRU5ErkJggg=='
  );

  function addToCart() {
    dispatch({ type: 'INC', value: { name, price } });

    toast({
      title: 'AUDI Store',
      description: name + ' added to cart.',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  }

  return (
    <>
      <Box rounded='lg' shadow='lg' padding='1.5rem' backgroundColor={bgColor}>
        <Image
          src={image}
          alt={name}
          width={275}
          height={118}
          placeholder='blur'
          blurDataURL={blurData}
        />

        <Text fontSize={'lg'}>{name}</Text>

        <Text fontSize={'sm'}>{price} EUR</Text>

        <Button
          colorScheme='blue'
          variant='ghost'
          mt='1rem'
          onClick={addToCart}
        >
          <Icon as={FaCartPlus} w={5} h={5} />
        </Button>
      </Box>
    </>
  );
}
