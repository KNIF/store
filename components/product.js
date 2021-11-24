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
import { useContext } from 'react';

import CartContext from '../lib/context';

export default function Product({ name, price, image }) {
  const { cart, setCart } = useContext(CartContext);
  const toast = useToast();
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  function addToCart() {
    setCart([...cart, { name, price, image }]);
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
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsa+2pBwAFSAIYd753CwAAAABJRU5ErkJggg=='
        />

        <Text pt={6} fontSize={'lg'}>
          {name}
        </Text>

        <Text fontSize={'sm'}>{price} EUR</Text>

        <Button
          colorScheme='blue'
          variant='ghost'
          mt='1rem'
          onClick={addToCart}
        >
          <Icon as={FaCartPlus} w={5} h={5} />
        </Button>

        {/* <Flex mt='1rem' justifyContent='center'>
          <NumberInput
            defaultValue={1}
            min={1}
            max={5}
            maxWidth='5rem'
            marginRight='1em'
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button colorScheme='blue' variant='ghost'>
            <Icon as={FaCartPlus} w={5} h={5} />
          </Button>
        </Flex> */}
      </Box>
    </>
  );
}
