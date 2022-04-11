import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Page from "../components/page";

// about page
export default function About() {
  // set color of text according to the color mode (dark/light)
  const textColor = useColorModeValue("gray.700", "gray.300");

  // render about page
  return (
    <Page title="About">
      <Box textAlign="center" py={10} px="3vw">
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          backgroundColor="blue.400"
          backgroundClip="text"
        >
          About
        </Heading>

        <Text color={textColor} mt={6}>
          This website is a demo of a basic online store for cars.
          <br />
          Built using{" "}
          <Link href="https://nextjs.org" isExternal>
            Next.js
            <ExternalLinkIcon mx="3px" />
          </Link>{" "}
          and{" "}
          <Link href="https://chakra-ui.com" isExternal>
            Chakra UI
            <ExternalLinkIcon mx="3px" />
          </Link>
          {"."}
        </Text>

        <Text color={textColor} mt={6}>
          The source code is available on{" "}
          <Link href="https://github.com/KNIF/store" isExternal>
            GitHub
            <ExternalLinkIcon mx="3px" />
          </Link>
        </Text>

        <Text color={textColor} mt={6}>
          Created by{" "}
          <Link href="https://mauricehuber.com" isExternal>
            Maurice Huber
          </Link>{" "}
          between 23.11.2021 and 25.11.2021
          {"."}
        </Text>
      </Box>
    </Page>
  );
}
