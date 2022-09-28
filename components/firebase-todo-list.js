import { useState, useEffect, Fragment } from 'react'

// Firebase
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { database } from '../lib/firebase'

// Components
import {
  Button,
  Container,
  CheckboxGroup,
  Checkbox,
  Stack,
  Divider,
  Box,
  Spinner
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { FaPlusCircle } from 'react-icons/fa'
import { TodoInput } from './basic-todo-list'

const FirebaseTodoList = ({ user, onSignOut, onDelete }) => {
  // const dbInstance = collection(database, "todos")
  const [todoList, setTodoList] = useState([{ task: '', done: false }])
  const [uneditedTodoList, setUneditedTodoList] = useState([
    { task: '', done: false }
  ])
  const [loading, setLoading] = useState(true)

  // get data function with regard to user
  const getTodoList = callback => {
    if (user?.uid) {
      getDoc(doc(database, 'todos', user.uid)).then(res => {
        const data = res.data()
        callback(data?.todoList || [])
      })
    }
  }

  // initial get data call
  useEffect(() => {
    const callback = data => {
      setTodoList(data)
      setUneditedTodoList(data)
      setLoading(false)
    }
    setLoading(true)
    getTodoList(callback)
  }, [])

  const todoTabOnInput = (e, index) => {
    const newList = todoList.map((todoObj, i) =>
      i === index ? { ...todoObj, task: e.target.value } : todoObj
    )
    setTodoList(newList)
  }

  const addNewHandler = () => {
    const newList = [...todoList, { task: '', done: false }]
    setTodoList(newList)
  }

  const deleteHandler = index => {
    const newList = todoList.filter((todoObj, i) => i !== index)
    setTodoList(newList)
  }

  const CheckboxChangeHandler = arrIndxStr => {
    const arrIndx = arrIndxStr.map(n => Number(n))
    const newList = todoList.map((todoObj, i) =>
      arrIndx.includes(i)
        ? { ...todoObj, done: true }
        : { ...todoObj, done: false }
    )
    setTodoList(newList)
  }

  const onCancelHandler = () => setTodoList(uneditedTodoList)

  const onSaveHandler = () => {
    if (user?.uid) {
      setDoc(
        doc(database, 'todos', user.uid),
        { todoList },
        { merge: true }
      ).then(() => setUneditedTodoList(todoList))
    }
  }

  return (
    <CheckboxGroup
      onChange={CheckboxChangeHandler}
      value={todoList
        .map((taskObj, i) => ({ ...taskObj, i }))
        .filter(taskObj => taskObj.done)
        .map(({ i }) => `${i}`)}
    >
      <Stack>
        {loading ? (
          <Container centerContent>
            <Spinner />
          </Container>
        ) : (
          todoList.map(({ task, done }, i) => (
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
          ))
        )}
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
        <Divider />
        <Stack direction="row" justify="space-between">
          <Button onClick={onSignOut}>Sign out</Button>
          <Button onClick={onDelete}>Delete Acc</Button>
          <Button
            onClick={onCancelHandler}
            disabled={
              JSON.stringify(todoList) === JSON.stringify(uneditedTodoList)
            }
          >
            Cancel
          </Button>
          <Button
            onClick={onSaveHandler}
            disabled={
              JSON.stringify(todoList) === JSON.stringify(uneditedTodoList)
            }
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </CheckboxGroup>
  )
}

export default FirebaseTodoList
