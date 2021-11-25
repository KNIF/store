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

import { useCartContext } from '../context/CartContext';

// product component
export default function Product({ name, price, image }) {
  // get access to cart items from global context
  const { state, dispatch } = useCartContext();

  // instantiate toast message handler
  const toast = useToast();

  // set background color of box surrounding the item according to the color mode (dark/light)
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  // set color of the blur of the item while lazy loading the products according to the color mode (dark/light)
  const blurData = useColorModeValue(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8++l7PQAJAQNXTZfoNwAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUl1SuBwABdgDU74/CPwAAAABJRU5ErkJggg=='
  );

  // add item to cart
  function addToCart() {
    // add item to cart by calling the reducer increment function
    dispatch({ type: 'INC', value: { name, price } });

    // show toast message confirming item addition to cart
    toast({
      title: 'AUDI Store',
      description: name + ' added to cart.',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  }

  // render product component
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
