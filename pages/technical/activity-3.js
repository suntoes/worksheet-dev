import { useState, useEffect } from 'react'

// Firebase
import { doc, deleteDoc } from 'firebase/firestore'
import { auth, database } from '../../lib/firebase'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser
} from 'firebase/auth'

// Components
import {
  Button,
  Container,
  Heading,
  Stack,
  Divider,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Spinner
} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import FirebaseTodoList from '../../components/firebase-todo-list'

const ActivityThree = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputPass, setInputPass] = useState('')

  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    onAuthStateChanged(auth, currentUser => {
      setLoading(false)
      setUser(currentUser)
    })
  }, [])

  useEffect(() => {
    setError('')
    setInputEmail('')
    setInputPass('')
  }, [user])

  const register = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        inputEmail,
        inputPass
      )
      setUser(user)
    } catch (error) {
      setError(error.message)
    }
  }

  const login = async () => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        inputEmail,
        inputPass
      )
      setUser(user)
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

  const deleteAcc = async () => {
    await deleteDoc(doc(database, 'todos', user.uid)).then(() => {
      deleteUser(auth.currentUser).then(() => setUser(null))
    })
  }

  return (
    <Layout title="Activity 3">
      <Container px={20}>
        <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
          Act 3: Basic Todo List w/ Firebase
        </Heading>
        {user && (
          <Text fontSize={16} mb={3}>
            Hi {user?.email}! Here&lsquo;s you&lsquo;re todo list:
          </Text>
        )}
        {user ? (
          <FirebaseTodoList
            user={user}
            onSignOut={logout}
            onDelete={deleteAcc}
          />
        ) : loading ? (
          <Container centerContent>
            <Spinner />
          </Container>
        ) : (
          <Stack spacing={3}>
            <InputGroup>
              <InputLeftElement>
                <EmailIcon />
              </InputLeftElement>
              <Input
                type="email"
                value={inputEmail}
                onChange={e => setInputEmail(e.target.value)}
                placeholder="Type email here"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon />
              </InputLeftElement>
              <Input
                type="password"
                value={inputPass}
                onChange={e => setInputPass(e.target.value)}
                placeholder="Type password here"
              />
            </InputGroup>
            <Text color="red.400" fontSize={14}>
              {error}
            </Text>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Button
                onClick={register}
                disabled={inputEmail === '' || inputPass === ''}
              >
                Register
              </Button>
              <Button
                onClick={login}
                disabled={inputEmail === '' || inputPass === ''}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </Layout>
  )
}

export default ActivityThree
