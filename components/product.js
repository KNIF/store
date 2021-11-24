import { Box, Flex, Text, Skeleton, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export default function Product({ name, price, image }) {
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <>
      <Box rounded='lg' shadow='lg' padding='1.5rem' backgroundColor={bgColor}>
        <Image
          src={image}
          alt={name}
          width={275}
          height={118}
          placeholder={<Skeleton />}
        />
        <Text pt={6} fontSize={'lg'}>
          {name}
        </Text>
        <Text fontSize={'sm'}>{price} EUR</Text>
      </Box>
    </>
  );
}
