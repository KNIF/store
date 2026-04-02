import { Icon } from '@chakra-ui/react';
import { useColorModeValue } from '../context/ColorModeContext';

// logo component
export default function Logo() {
  const strokeColor = useColorModeValue('black', 'white');

  // render AUDI logo as svg
  return (
    <Icon viewBox='0 -15 200 100' width='200' height='50'>
      <path
        fill='none'
        stroke={strokeColor}
        strokeWidth='7'
        d='m34,4a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0zm42,0a30,30 0 1,0 2,0z'
      />
    </Icon>
  );
}
