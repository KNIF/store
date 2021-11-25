import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import Router from 'next/router';

import Page from '../components/page';
import { useAppContext } from '../context/AppContext';
import { useForceUpdate } from '../hooks/forceupdate';

export default function Cart() {
  const { state, dispatch } = useAppContext();
  const toast = useToast();
  const forceUpdate = useForceUpdate();

  const bgColor = useColorModeValue('gray.100', 'gray.900');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge] =
    useMediaQuery([
      '(max-width: 600px)',
      '(min-width: 600px)',
      '(min-width: 768px)',
      '(min-width: 992px)',
      '(min-width: 1200px)',
    ]);

  function getPx() {
    console.log({ isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge });

    return isExtraLarge ? '10vw' : '3vw';
  }

  function getAmount(name) {
    return state.find((item) => item.name === name).amount;
  }

  function changeItem(name, value) {
    let type;
    value = parseInt(value);

    for (let s of state) {
      if (s.name === name) {
        if (s.amount < value) {
          type = 'INC';
        } else {
          type = 'DEC';
        }
        console.log({ a: s.amount, b: value, c: type });
      }
    }

    if (type) {
      dispatch({ type, value: { name } });
    }

    forceUpdate();
  }

  function deleteItem(name) {
    dispatch({ type: 'DEL', value: { name } });
  }

  function clearCart() {
    dispatch({ type: 'CLEAR' });
  }

  function attemptCheckout() {
    if (state.length === 0) {
      toast({
        title: 'AUDI Store',
        title: 'Your cart is empty.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else {
      onOpen();
    }
  }

  function checkOut() {
    toast({
      title: 'AUDI Store',
      description: 'Thank you for your purchase.',
      duration: 3000,
      status: 'success',
      isClosable: true,
      position: 'top',
    });

    onClose();
    clearCart();

    setTimeout(() => {
      Router.push('/');
    }, 1000);
  }

  return (
    <Page title='Cart'>
      <Box textAlign='center' py={10} px={getPx}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='blue.400'
          backgroundClip='text'
          mb='2rem'
        >
          Cart
        </Heading>

        <Box px='3rem'>
          <Table
            variant='simple'
            colorScheme='blue'
            rounded='lg'
            shadow='lg'
            padding='1.5rem'
            backgroundColor={bgColor}
            size='lg'
          >
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Amount</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.map((item) => (
                <Tr key={item.name}>
                  <Td>{item.name}</Td>
                  <Td isNumeric>{item.price} EUR</Td>
                  <Td isNumeric>
                    <Flex justifyContent='center'>
                      <Button
                        onClick={() => deleteItem(item.name)}
                        colorScheme='blue'
                        variant='ghost'
                      >
                        <DeleteIcon />
                      </Button>

                      <NumberInput
                        defaultValue={item.amount}
                        onChange={(value) => changeItem(item.name, value)}
                        min={1}
                        allowMouseWheel
                        minWidth='6vw'
                        maxWidth='8vw'
                        ml='1vw'
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    {(
                      parseInt(item.price.replace('.', '')) * item.amount
                    ).toLocaleString('de-DE')}{' '}
                    EUR
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>TOTAL</Th>
                <Th isNumeric></Th>
                <Th isNumeric>
                  {state.reduce((sum, item) => sum + item.amount, 0)}
                </Th>
                <Th isNumeric>
                  {state
                    .reduce(
                      (sum, item) =>
                        sum +
                        parseInt(item.price.replace('.', '')) * item.amount,
                      0
                    )
                    .toLocaleString('de-DE')}{' '}
                  EUR
                </Th>
              </Tr>
            </Tfoot>
          </Table>

          <Flex justifyContent='center' mt='2rem'>
            <Button
              colorScheme='blue'
              variant='ghost'
              mr='10vw'
              onClick={clearCart}
            >
              Clear Cart
            </Button>

            <Button colorScheme='blue' onClick={attemptCheckout}>
              Check out
            </Button>

            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
              closeOnOverlayClick={false}
            >
              <AlertDialogOverlay />
              <AlertDialogContent>
                <AlertDialogHeader>Check out?</AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to buy these items?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                  <Button colorScheme='blue' ml={3} onClick={checkOut}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Flex>
        </Box>
      </Box>
    </Page>
  );
}
