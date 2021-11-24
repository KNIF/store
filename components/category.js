import { Box, Wrap, WrapItem, Heading } from '@chakra-ui/react';
import Product from './product';

export default function Category({ name, products }) {
  return (
    <>
      <Box mb='5rem'>
        <Heading as='h2' size='xl' mt={6} mb={2} textAlign='left'>
          {name}
        </Heading>

        <Wrap spacing='3rem'>
          {products.map((product) => (
            <WrapItem key={product.name}>
              <Product
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
