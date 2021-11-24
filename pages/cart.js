import {
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
  useMediaQuery,
} from '@chakra-ui/react';

import Page from '../components/page';
import { useAppContext } from '../context/AppContext';

export default function Cart() {
  const { state, dispatch } = useAppContext();
  const bgColor = useColorModeValue('gray.100', 'gray.900');

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
    return isExtraLarge ? '30rem' : '10rem';
  }

  //Object.entries(cart).reduce((sum, item) => console.log(item[1].price), 0);

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
                <Th isNumeric>Amount</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {Object.entries(cart).map((item) => (
                <Tr key={item}>
                  <Td>{item.name}</Td>
                  <Td isNumeric>
                    <NumberInput
                      defaultValue={1}
                      min={1}
                      max={5}
                      allowMouseWheel
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td isNumeric>{item.price} EUR</Td>
                </Tr>
              ))} */}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>TOTAL</Th>
                {/* <Th isNumeric>{cart.length}</Th> */}
                <Th isNumeric>
                  {/* {Object.entries(cart)
                    .reduce(
                      (sum, item) =>
                        sum + parseInt(item[1].price.replace('.', '')),
                      0
                    )
                    .toLocaleString('de-DE')}{' '} */}
                  EUR
                </Th>
              </Tr>
            </Tfoot>
          </Table>

          <Flex justifyContent='center' mt='2rem'>
            <Button colorScheme='blue' variant='ghost' mr='10vw'>
              Clear Cart
            </Button>

            <Button colorScheme='blue' onClick={() => console.log(state)}>
              Check out
            </Button>
          </Flex>
        </Box>
      </Box>
    </Page>
  );
}
