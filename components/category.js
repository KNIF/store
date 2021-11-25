import { Box, Wrap, WrapItem, Heading, useMediaQuery } from '@chakra-ui/react';
import Product from './product';

// product category component
export default function Category({ name, products }) {
  // return boolean value based on the screen size
  const [isSmall] = useMediaQuery('(max-width: 735px)');

  // render category component
  return (
    <Box mb='5rem' alignContent='center'>
      {/* category name */}
      <Heading as='h2' size='xl' mb={2} textAlign='left'>
        {name}
      </Heading>

      <Wrap spacing='3rem' justify={isSmall && 'space-around'}>
        {/* iterate through products passed via props (parameter) and render them */}
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
  );
}
