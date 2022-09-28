import { useState, useEffect } from 'react'

import axios from 'axios'

import {
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  Button,
  Container,
  Spinner,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'

const Card = ({
  first_name,
  last_name,
  username,
  avatar,
  gender,
  employment,
  subscription
}) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    boxSize="full"
    minHeight="150px"
    bg={useColorModeValue('white', 'gray.900')}
    fontSize="0.75em"
    boxShadow={'2xl'}
    rounded={'lg'}
    textAlign={'center'}
  >
    <Box px={3} pt={3}>
      <Avatar
        size={'xl'}
        src={avatar}
        alt={'Avatar Alt'}
        mb={4}
        pos={'relative'}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: `${
            subscription.status === 'Active'
              ? 'green'
              : subscription.status === 'Idle'
              ? 'orange'
              : 'red'
          }.300`,
          border: '2px solid white',
          rounded: 'full',
          pos: 'absolute',
          bottom: 0,
          right: 3
        }}
      />
      <Heading fontSize={'lg'} fontFamily={'body'}>
        {`${first_name} ${last_name}`}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={2}>
        {`@${username}`}
      </Text>
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
      >
        {`${gender}. ${employment?.title}. ${employment?.key_skill}`}
      </Text>
    </Box>
    <Stack px={3} py={3} direction={'row'} spacing={1} align="center">
      <Button
        flex={1}
        fontSize={'sm'}
        rounded={'full'}
        _focus={{
          bg: 'gray.200'
        }}
      >
        Message
      </Button>
      <Button
        flex={1}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500'
        }}
        _focus={{
          bg: 'blue.500'
        }}
      >
        Follow
      </Button>
    </Stack>
  </Box>
)

const CardsFromAPI = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  // get function
  const fetchUser = async ({ count, callback }) => {
    setLoading(true)
    try {
      const data = await axios.get(
        `https://random-data-api.com/api/v2/users?size=${count}&response_type=json`
      )
      callback(data?.data)
    } catch (err) {
      console.log('error: ', err)
      callback(false)
    }
  }

  // Fetch again with one data count limit
  const addUserHandler = () => {
    const callback = data => {
      if (!data) return
      const newUsers = [...users, data]
      setUsers(newUsers)
      setLoading(false)
    }
    fetchUser({ count: 1, callback })
  }

  // Initial fetch
  useEffect(() => {
    const callback = data => {
      if (!data) return
      setUsers(data)
      setLoading(false)
    }
    fetchUser({ count: 4, callback })
  }, [])

  return (
    <Container px={20}>
      <Heading as="h3" fontSize={20} alignSelf="start" my={6}>
        Act 1.6: Card List from API
      </Heading>
      <Box align="center" mb={8}>
        <Button onClick={addUserHandler} minW={208} disabled={loading}>
          {loading ? <Spinner /> : 'Fetch & Add a New User'}
        </Button>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        {users.map((user, i) => (
          <Card key={`user-${i + 1}`} {...user} />
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default CardsFromAPI
