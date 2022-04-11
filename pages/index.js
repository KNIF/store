import {
  Box,
  Flex,
  Heading,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import Page from "../components/page";
import Category from "../components/category";

// home/index page
export default function Home() {
  // instantiate handler for dynamically fetching products from backend
  const { data, error } = useSWR("/api/products", fetcher);

  // set color of text according to the color mode (dark/light)
  const textColor = useColorModeValue("gray.700", "gray.300");

  // show error message if backend returns an error
  if (error)
    return (
      <Page>
        <Box textAlign="center" py={10} px="3vw">
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={"red.500"}
              rounded={"50px"}
              w={"55px"}
              h={"55px"}
              textAlign="center"
            >
              <CloseIcon boxSize={"20px"} color={"white"} />
            </Flex>
          </Box>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Error
          </Heading>
          <Heading as="h3" size="md" mb={5}>
            {/* show error status code and status message */}
            {error.status} {error.statusText}
          </Heading>
          {/* show custom error message returned from backend */}
          <Text color={textColor}>{error.message}</Text>
        </Box>
      </Page>
    );

  // show spinner loader while backend is fetching products
  if (!data)
    return (
      <Page>
        <Box textAlign="center" py={10} px="3vw">
          <Spinner size="lg" />
        </Box>
      </Page>
    );

  // render page with products
  return (
    <Page title="Home">
      <Box textAlign="center" py={10} px="3vw">
        {/* iterate through data returned by backend and render each product category with its items */}
        {data.map((category) => (
          <Box key={category.name}>
            <Category name={category.name} products={category.models} />
          </Box>
        ))}
      </Box>
    </Page>
  );
}
