import { useState } from 'react'

import {
  Container,
  Heading,
  Divider,
  Stack,
  IconButton
} from '@chakra-ui/react'

import { MinusIcon, RepeatIcon, AddIcon } from '@chakra-ui/icons'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  return (
    <Container px={20} centerContent>
      <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
        Act 1.2: Counter App
      </Heading>
      <Heading>{count}</Heading>
      <Heading>
        {`...is an ${Math.abs(count) % 2 === 0 ? 'even' : 'odd'} number.
          `}
      </Heading>
      <Divider />
      <Stack direction="row" spacing={10} mt={5}>
        <IconButton icon={<MinusIcon />} onClick={() => setCount(count - 1)} />
        <IconButton icon={<RepeatIcon />} onClick={() => setCount(0)} />
        <IconButton icon={<AddIcon />} onClick={() => setCount(count + 1)} />
      </Stack>
    </Container>
  )
}

export default CounterApp
