import { Icon, useColorModeValue } from '@chakra-ui/react';

// logo component
export default function Logo() {
  // render AUDI logo as svg
  return (
    <Icon viewBox='0 -15 200 100' width='200' height='50'>
      <path
        fill='none'
        stroke={useColorModeValue('black', 'white')}
        strokeWidth='7'
        d='m34,4a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0z'
      />
    </Icon>
  );
}
