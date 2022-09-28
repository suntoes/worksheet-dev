import NextLink from 'next/link'

import { Link, Container, Heading } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Posts = () => (
  <Layout title="Open Ended">
    <Container>
      <Heading as="h3" fontSize={20} my={6}>
        2&#41; Technical Section
      </Heading>
      <Section delay={0.1}>
        <NextLink href={'/technical/activity-1'} passHref scroll={false}>
          <Link>
            Activity 1: Variety of Apps <ExternalLinkIcon mx="2px" />
          </Link>
        </NextLink>
      </Section>
      <Section delay={0.3}>
        <NextLink href={'/technical/activity-2'} passHref scroll={false}>
          <Link>
            Activity 2: Testing a React Component <ExternalLinkIcon mx="2px" />
          </Link>
        </NextLink>
      </Section>
      <Section delay={0.5}>
        <NextLink href={'/technical/activity-3'} passHref scroll={false}>
          <Link>
            Activity 3: Simple Todo App w/ Firebase{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </NextLink>
      </Section>
    </Container>
  </Layout>
)

export default Posts
