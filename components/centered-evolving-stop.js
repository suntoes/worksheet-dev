import { useState } from 'react'

import { Box, Button, Container, Heading } from '@chakra-ui/react'

const colorArray = [
  'blackAlpha',
  'whiteAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink'
]

const CenteredEvolvingStop = () => {
  const [multiplier, setMultiplier] = useState(1)
  const [color, setColor] = useState('whiteAlpha.400')

  const onClickHandler = () => {
    const randomColorIndex = Math.floor(
      Math.random() * (colorArray.length - 0 + 1) + 0
    )
    setColor(colorArray[randomColorIndex] + '.400')
    setMultiplier(multiplier + 0.1)
  }

  return (
    <Box
      display="flex"
      position="fixed"
      boxSize="full"
      alignItems="center"
      justifyContent="center"
    >
      <Container width="full" alignSelf="start" mt="56px" px={20}>
        <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
          Act 1.4: An evolving &ldquo;STOP&rdquo; button
        </Heading>
      </Container>
      <Button
        position="absolute"
        height={`${40 * multiplier}px`}
        width={`${67 * multiplier}px`}
        onClick={onClickHandler}
        fontSize={`${1 * multiplier}em`}
        bg={color}
        variant="unstyled"
      >
        Stop
      </Button>
    </Box>
  )
}

export default CenteredEvolvingStop
