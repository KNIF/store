import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';

import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box p={4}>About</Box>
    </>
  );
}
