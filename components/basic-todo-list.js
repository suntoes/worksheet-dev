import { useState, useRef, useEffect, Fragment } from 'react'

import {
  Textarea,
  Container,
  Heading,
  CheckboxGroup,
  Checkbox,
  Stack,
  Divider,
  Box
} from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import { FaPlusCircle } from 'react-icons/fa'

export const TodoInput = ({ value, done, onInput }) => {
  const textAreaRef = useRef()

  // dynamically change textarea height depending on the scrollheight
  useEffect(() => {
    textAreaRef.current.style.height = '0px'
    const scrollHeight = textAreaRef.current.scrollHeight
    textAreaRef.current.style.height = scrollHeight + 'px'
  }, [value])

  return (
    <Textarea
      ref={textAreaRef}
      onInput={onInput}
      placeholder="Type here"
      value={value}
      color={done ? 'gray' : 'initial'}
      textDecoration={done ? 'line-through' : 'initial'}
      minHeight="40px"
      variant="ghost"
      resize="none"
    />
  )
}

const BasicTodoList = () => {
  const [list, setList] = useState([{ task: '', done: false }])

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('basic-todo-list-data')) || list)
  }, [])

  const localStorageSave = data =>
    localStorage.setItem('basic-todo-list-data', JSON.stringify(data))

  const todoTabOnInput = (e, index) => {
    const newList = list.map((todoObj, i) =>
      i === index ? { ...todoObj, task: e.target.value } : todoObj
    )
    setList(newList)
    localStorageSave(newList)
  }

  const addNewHandler = () => {
    const newList = [...list, { task: '', done: false }]
    setList(newList)
    localStorageSave(newList)
  }

  const deleteHandler = index => {
    const newList = list.filter((todoObj, i) => i !== index)
    setList(newList)
    localStorageSave(newList)
  }

  const CheckboxChangeHandler = arrIndxStr => {
    const arrIndx = arrIndxStr.map(n => Number(n))
    const newList = list.map((todoObj, i) =>
      arrIndx.includes(i)
        ? { ...todoObj, done: true }
        : { ...todoObj, done: false }
    )
    setList(newList)
    localStorageSave(newList)
  }

  return (
    <Container px={20}>
      <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
        Act 1.5: Basic Todo List
      </Heading>
      <CheckboxGroup
        onChange={CheckboxChangeHandler}
        defaultValue={list
          .map((taskObj, i) => ({ ...taskObj, i }))
          .filter(taskObj => taskObj.done)
          .map(({ i }) => `${i}`)}
      >
        <Stack>
          {list.map(({ task, done }, i) => (
            <Fragment key={i}>
              <Stack direction={'row'} align="center">
                <Checkbox value={`${i}`} />
                <TodoInput
                  value={task}
                  done={done}
                  onInput={e => todoTabOnInput(e, i)}
                />
                <DeleteIcon onClick={() => deleteHandler(i)} cursor="pointer" />
              </Stack>
              <Divider />
            </Fragment>
          ))}
          <Box
            display="flex"
            h="40px"
            alignItems="center"
            justifyContent="center"
          >
            <FaPlusCircle
              onClick={addNewHandler}
              fontSize="1.1em"
              cursor="pointer"
            />
          </Box>
        </Stack>
      </CheckboxGroup>
    </Container>
  )
}

export default BasicTodoList
