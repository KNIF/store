import {
  Box,
  Button,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  Flex,
  Heading,
  NumberInputRoot,
  NumberInputInput,
  NumberInputIncrementTrigger,
  NumberInputDecrementTrigger,
  NumberInputControl,
  Table,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Trash2 } from 'lucide-react';
import Router from 'next/router';

import Page from '../components/page';
import { useCartContext } from '../context/CartContext';
import { useColorModeValue } from '../context/ColorModeContext';
import { useForceUpdate } from '../hooks/forceupdate';
import { toaster } from '../lib/toaster';

// cart page
export default function Cart() {
  // get access to cart items from global context
  const { state, dispatch } = useCartContext();

  // instantiate the force page rerender hook
  const forceUpdate = useForceUpdate();

  // set background color of table according to the color mode (dark/light)
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  // handler for checkout confirmation dialog state (open/close)
  const { open, onOpen, onClose } = useDisclosure();

  // execute css media queries and store the results in boolean variables
  const [isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge] =
    useMediaQuery([
      '(max-width: 600px)',
      '(min-width: 600px)',
      '(min-width: 768px)',
      '(min-width: 992px)',
      '(min-width: 1200px)',
    ]);

  // adjust paddingX to viewport size
  function getPx() {
    // check if viewport is large and increase paddingX of page if so
    return isExtraLarge ? '10vw' : '3vw';
  }

  // function to update amount of item with given name
  function changeItemAmount(name, value) {
    let type;
    let iValue = parseInt(value, 10);

    // find item with given name and check if should increment or decrement
    for (const s of state) {
      if (s.name === name) {
        type = s.amount < iValue ? 'INC' : 'DEC';
      }
    }

    // execute increment or decrement of given item
    if (type) {
      dispatch({ type, value: { name } });
    }

    // force rerender of page
    forceUpdate();
  }

  // function to delete item with given name from cart
  function deleteItem(name) {
    dispatch({ type: 'DEL', value: { name } });
  }

  // function to show toast message if cart is empty
  function cardEmptyToast() {
    toaster.create({
      title: 'AUDI Store',
      description: 'Your cart is empty.',
      type: 'warning',
      duration: 3000,
    });
  }

  // function to clear cart
  function clearCart() {
    if (state.length === 0) {
      // show warning toast if cart is empty
      cardEmptyToast();
    } else {
      // clear cart
      dispatch({ type: 'CLEAR' });
    }
  }

  // function to attempt checkout
  function attemptCheckout() {
    if (state.length === 0) {
      // show warning toast if cart is empty
      cardEmptyToast();
    } else {
      // open checkout confirmation dialog
      onOpen();
    }
  }

  // function to checkout after confirmation
  function checkOut() {
    // display success toast message
    toaster.create({
      title: 'AUDI Store',
      description: 'Thank you for your purchase.',
      duration: 3000,
      type: 'success',
    });

    // close checkout confirmation dialog
    onClose();

    // clear cart
    dispatch({ type: 'CLEAR' });

    // redirect to home page after 1 second
    setTimeout(() => {
      Router.push('/');
    }, 1000);
  }

  // render page
  return (
    <Page title='Cart'>
      <Box textAlign='center' py={10} px={getPx}>
        {/* cart header */}
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
          {/* table with cart items */}
          <Table.Root
            colorPalette='blue'
            rounded='lg'
            shadow='lg'
            padding='1.5rem'
            backgroundColor={bgColor}
            size='lg'
          >
            {/* table head */}
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Product</Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end'>Price</Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end'>Amount</Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end'>Total</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            {/* table body */}
            <Table.Body>
              {/* loop though cart items and render every item */}
              {state.map((item) => (
                <Table.Row key={item.name}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell textAlign='end'>{item.price} EUR</Table.Cell>
                  <Table.Cell textAlign='end'>
                    <Flex justifyContent='center'>
                      {/* delete item button */}
                      <Button
                        onClick={() => deleteItem(item.name)}
                        colorPalette='blue'
                        variant='ghost'
                      >
                        <Trash2 size={16} />
                      </Button>

                      {/* amount chooser */}
                      <NumberInputRoot
                        defaultValue={String(item.amount)}
                        onValueChange={(details) =>
                          changeItemAmount(item.name, details.value)
                        }
                        min={1}
                        minWidth='6vw'
                        maxWidth='8vw'
                        ml='1vw'
                      >
                        <NumberInputInput />
                        <NumberInputControl>
                          <NumberInputIncrementTrigger />
                          <NumberInputDecrementTrigger />
                        </NumberInputControl>
                      </NumberInputRoot>
                    </Flex>
                  </Table.Cell>
                  <Table.Cell textAlign='end'>
                    {/* calculate item price */}
                    {(
                      parseInt(item.price.replace('.', ''), 10) * item.amount
                    ).toLocaleString('de-DE')}{' '}
                    EUR
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.ColumnHeader>TOTAL</Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end' />
                <Table.ColumnHeader textAlign='end'>
                  {/* calculate total amount of items */}
                  {state.reduce((sum, item) => sum + item.amount, 0)}
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign='end'>
                  {/* calculate total price */}
                  {state
                    .reduce(
                      (sum, item) =>
                        sum +
                        parseInt(item.price.replace('.', ''), 10) * item.amount,
                      0
                    )
                    .toLocaleString('de-DE')}{' '}
                  EUR
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Footer>
          </Table.Root>

          {/* bottom bar */}
          <Flex justifyContent='center' mt='2rem'>
            {/* clear cart button */}
            <Button
              colorPalette='blue'
              variant='ghost'
              mr='10vw'
              onClick={clearCart}
            >
              Clear Cart
            </Button>

            {/* checkout button */}
            <Button colorPalette='blue' onClick={attemptCheckout}>
              Check out
            </Button>

            {/* ask confirmation before submitting order */}
            <DialogRoot
              open={open}
              onOpenChange={(details) => {
                if (!details.open) onClose();
              }}
              placement='center'
              closeOnInteractOutside={false}
            >
              <DialogBackdrop />
              <DialogContent>
                <DialogHeader>Check out?</DialogHeader>
                <DialogBody>
                  Are you sure you want to buy these items?
                </DialogBody>
                <DialogFooter>
                  <Button onClick={onClose} variant='outline'>
                    No
                  </Button>
                  <Button colorPalette='blue' ml={3} onClick={checkOut}>
                    Yes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </DialogRoot>
          </Flex>
        </Box>
      </Box>
    </Page>
  );
}
