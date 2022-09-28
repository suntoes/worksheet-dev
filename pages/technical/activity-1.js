import { useState, Fragment } from 'react'

import { Box, Container, IconButton } from '@chakra-ui/react'

import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import Layout from '../../components/layouts/article'

import CenteredHelloWorld from '../../components/centered-hello-world'
import CounterApp from '../../components/counter-app'
import SimpleCalculator from '../../components/simple-calculator'
import CenteredEvolvingStop from '../../components/centered-evolving-stop'
import BasicTodoList from '../../components/basic-todo-list'
import CardsFromAPI from '../../components/cards-from-api'

const subActs = [
  CenteredHelloWorld,
  CounterApp,
  SimpleCalculator,
  CenteredEvolvingStop,
  BasicTodoList,
  CardsFromAPI
]

const ActivityOne = () => {
  const fullActIndexes = [0, 3]

  const [subActPage, setSubActPage] = useState(0)

  const paginate = n => {
    switch (n) {
      case -1:
        setSubActPage(subActPage - 1)
        break
      case 1:
        setSubActPage(subActPage + 1)
        break
      default:
        break
    }
  }

  const ArrowNav = ({ offsetX = 0 }) => (
    <Container
      maxWidth="container.md"
      height="full"
      position="absolute"
      transform={`translateX(${9999}px)`}
    >
      <Box
        display="flex"
        height="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton
          cursor="pointer"
          icon={<ArrowLeftIcon />}
          onClick={() => paginate(-1)}
          transform={`translateX(${-9999 - offsetX}px)`}
          disabled={subActPage === 0}
        />
        <IconButton
          cursor="pointer"
          icon={<ArrowRightIcon />}
          onClick={() => paginate(1)}
          transform={`translateX(${-9999 - offsetX}px)`}
          disabled={subActPage === subActs.length - 1}
        />
      </Box>
    </Container>
  )

  return (
    <Layout title="Activity 1" isFull={fullActIndexes.includes(subActPage)}>
      {fullActIndexes.includes(subActPage) ? (
        <Box
          zIndex={99}
          display="flex"
          position="fixed"
          boxSize="100%"
          alignItems="center"
          justifyContent="center"
          transform="translateX(9999px)"
        >
          <ArrowNav offsetX={9999} />
        </Box>
      ) : (
        <ArrowNav />
      )}

      {subActs.map((SubAct, i) => (
        <Fragment key={`act-1-sub-act-${i + 1}`}>
          {subActPage === i && <SubAct />}
        </Fragment>
      ))}
    </Layout>
  )
}

export default ActivityOne
