import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { ExternalLink } from 'lucide-react';

import Page from '../components/page';
import { useColorModeValue } from '../context/ColorModeContext';

// about page
export default function About() {
  // set color of text according to the color mode (dark/light)
  const textColor = useColorModeValue('gray.700', 'gray.300');

  // render about page
  return (
    <Page title='About'>
      <Box textAlign='center' py={10} px='3vw'>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          backgroundColor='blue.400'
          backgroundClip='text'
        >
          About
        </Heading>

        <Text color={textColor} mt={6}>
          This website is a demo of a basic online store for cars.
          <br />
          Built using{' '}
          <Link href='https://nextjs.org' target='_blank' rel='noopener noreferrer'>
            Next.js
            <ExternalLink size={12} style={{ display: 'inline', marginLeft: '3px', verticalAlign: 'middle' }} />
          </Link>{' '}
          and{' '}
          <Link href='https://chakra-ui.com' target='_blank' rel='noopener noreferrer'>
            Chakra UI
            <ExternalLink size={12} style={{ display: 'inline', marginLeft: '3px', verticalAlign: 'middle' }} />
          </Link>
          {'.'}
        </Text>

        <Text color={textColor} mt={6}>
          The source code is available on{' '}
          <Link href='https://github.com/KNIF/store' target='_blank' rel='noopener noreferrer'>
            GitHub
            <ExternalLink size={12} style={{ display: 'inline', marginLeft: '3px', verticalAlign: 'middle' }} />
          </Link>
        </Text>

        <Text color={textColor} mt={6}>
          Created by{' '}
          <Link href='https://mauricehuber.com' target='_blank' rel='noopener noreferrer'>
            Maurice Huber
          </Link>{' '}
          between 23.11.2021 and 25.11.2021
          {'.'}
        </Text>
      </Box>
    </Page>
  );
}
