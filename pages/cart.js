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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Router from "next/router";

import Page from "../components/page";
import { useCartContext } from "../context/CartContext";
import { useForceUpdate } from "../hooks/forceupdate";

// cart page
export default function Cart() {
  // get access to cart items from global context
  const { state, dispatch } = useCartContext();

  // instantiate toast message handler
  const toast = useToast();

  // instantiate the force page rerender hook
  const forceUpdate = useForceUpdate();

  // set background color of table according to the color mode (dark/light)
  const bgColor = useColorModeValue("gray.100", "gray.900");

  // handler for checkout confirmation dialog state (open/close)
  const { isOpen, onOpen, onClose } = useDisclosure();

  // reference to cancel button in checkout confirmation dialog
  const cancelRef = useRef();

  // execute css media queries and store the results in boolean variables
  const [isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge] =
    useMediaQuery([
      "(max-width: 600px)",
      "(min-width: 600px)",
      "(min-width: 768px)",
      "(min-width: 992px)",
      "(min-width: 1200px)",
    ]);

  // adjust paddingX to viewport size
  function getPx() {
    //console.log({ isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge });

    // check if viewport is large and increase paddingX of page if so
    return isExtraLarge ? "10vw" : "3vw";
  }

  // function to update amount of item with given name
  function changeItemAmount(name, value) {
    let type;
    let iValue = parseInt(value);

    // find item with given name and check if should increment or decrement
    for (const s of state) {
      if (s.name === name) {
        type = s.amount < iValue ? "INC" : "DEC";
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
    dispatch({ type: "DEL", value: { name } });
  }

  // function to show toast message if cart is empty
  function cardEmptyToast() {
    toast({
      title: "AUDI Store",
      description: "Your cart is empty.",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  }

  // function to clear cart
  function clearCart() {
    if (state.length === 0) {
      // show warning toast if cart is empty
      cardEmptyToast();
    } else {
      // clear cart
      dispatch({ type: "CLEAR" });
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
    toast({
      title: "AUDI Store",
      description: "Thank you for your purchase.",
      duration: 3000,
      status: "success",
      isClosable: true,
      position: "top",
    });

    // close checkout confirmation dialog
    onClose();

    // clear cart
    dispatch({ type: "CLEAR" });

    // redirect to home page after 1 second
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  }

  // render page
  return (
    <Page title="Cart">
      <Box textAlign="center" py={10} px={getPx}>
        {/* cart header */}
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          backgroundColor="blue.400"
          backgroundClip="text"
          mb="2rem"
        >
          Cart
        </Heading>

        <Box px="3rem">
          {/* table with cart items */}
          <Table
            variant="simple"
            colorScheme="blue"
            rounded="lg"
            shadow="lg"
            padding="1.5rem"
            backgroundColor={bgColor}
            size="lg"
          >
            {/* table head */}
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Amount</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            {/* table body */}
            <Tbody>
              {/* loop though cart items and render every item */}
              {state.map((item) => (
                <Tr key={item.name}>
                  <Td>{item.name}</Td>
                  <Td isNumeric>{item.price} EUR</Td>
                  <Td isNumeric>
                    <Flex justifyContent="center">
                      {/* delete item button */}
                      <Button
                        onClick={() => deleteItem(item.name)}
                        colorScheme="blue"
                        variant="ghost"
                      >
                        <DeleteIcon />
                      </Button>

                      {/* amount chooser */}
                      <NumberInput
                        defaultValue={item.amount}
                        onChange={(value) => changeItemAmount(item.name, value)}
                        min={1}
                        allowMouseWheel
                        minWidth="6vw"
                        maxWidth="8vw"
                        ml="1vw"
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
                    {/* calculate item price */}
                    {(
                      parseInt(item.price.replace(".", "")) * item.amount
                    ).toLocaleString("de-DE")}{" "}
                    EUR
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>TOTAL</Th>
                <Th isNumeric />
                <Th isNumeric>
                  {/* calculate total amount of items */}
                  {state.reduce((sum, item) => sum + item.amount, 0)}
                </Th>
                <Th isNumeric>
                  {/* calculate total price */}
                  {state
                    .reduce(
                      (sum, item) =>
                        sum +
                        parseInt(item.price.replace(".", "")) * item.amount,
                      0
                    )
                    .toLocaleString("de-DE")}{" "}
                  EUR
                </Th>
              </Tr>
            </Tfoot>
          </Table>

          {/* bottom bar */}
          <Flex justifyContent="center" mt="2rem">
            {/* clear cart button */}
            <Button
              colorScheme="blue"
              variant="ghost"
              mr="10vw"
              onClick={clearCart}
            >
              Clear Cart
            </Button>

            {/* checkout button */}
            <Button colorScheme="blue" onClick={attemptCheckout}>
              Check out
            </Button>

            {/* ask confirmation before submitting order */}
            <AlertDialog
              motionPreset="slideInBottom"
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
                  <Button colorScheme="blue" ml={3} onClick={checkOut}>
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
