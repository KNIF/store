import { Box, Wrap, WrapItem, Heading, useMediaQuery } from '@chakra-ui/react';
import Product from './product';

export default function Category({ name, products }) {
  const [isSmall] = useMediaQuery('(max-width: 735px)');

  return (
    <>
      <Box mb='5rem' alignContent='center'>
        <Heading as='h2' size='xl' mb={2} textAlign='left'>
          {name}
        </Heading>

        <Wrap spacing='3rem' justify={isSmall && 'space-around'}>
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
