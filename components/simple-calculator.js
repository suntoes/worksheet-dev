import { useState, useEffect } from 'react'

import {
  Container,
  Heading,
  Divider,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  IconButton
} from '@chakra-ui/react'

import { AddIcon, RepeatIcon } from '@chakra-ui/icons'

const SimpleCalculator = () => {
  const [[firstInput, secondInput], setInput] = useState(['0', '0'])
  const [output, setOutput] = useState(0)

  useEffect(() => {
    setOutput(Number(firstInput || '0') + Number(secondInput || '0') || output)
  }, [firstInput, secondInput])

  return (
    <Container px={20} centerContent>
      <Heading
        as="h3"
        fontSize={20}
        alignSelf="start"
        my={6}
        data-testid="title"
      >
        Act 1.3: Simple Calculator
      </Heading>
      <Heading alignSelf="start" data-testid="output">
        {output}
      </Heading>
      <Divider my={5} />
      <Stack direction="row" spacing={1}>
        <NumberInput
          value={firstInput}
          onChange={valStr => setInput([valStr, secondInput])}
        >
          <NumberInputField data-testid="input-one" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Box
          display="flex"
          minWidth={'40px'}
          alignItems="center"
          justifyContent="center"
        >
          <AddIcon />
        </Box>
        <NumberInput
          value={secondInput}
          onChange={valStr => setInput([firstInput, valStr])}
        >
          <NumberInputField data-testid="input-two" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <IconButton
          icon={<RepeatIcon />}
          onClick={() => {
            setInput(['0', '0'])
            setOutput(0)
          }}
          data-testid="reset-button"
        />
      </Stack>
    </Container>
  )
}

export default SimpleCalculator
