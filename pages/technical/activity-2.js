import { Container, Heading, Image, Link } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'

const ActivityTwo = () => (
  <Layout title="Open Ended">
    <Container>
      <Heading as="h3" fontSize={20} my={6}>
        Act 3: Testing a React Component
      </Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          A Simple Calculator
        </Heading>
        <Paragraph>
          Here I&lsquo;ve tested a calculator that only adds 2 numbers from two
          separate input. The main 3 key feature I&lsquo;ve selected to test
          are: Rendition of the component, Input update onChange, and Output sum
          result.
        </Paragraph>
        <Paragraph>
          You may refer to the public source code{' '}
          <Link href="https://github.com/suntoes/worksheet-dev" target="_blank">
            here
          </Link>{' '}
          at {"./tests/simple-calculator.test.js"} or you may refer also at the 
		  Jest test result image down below:
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Image
          borderRadius={25}
          src="/images/simple-calculator-jest-test-result.png"
          alt="Jest test result"
        />
      </Section>
    </Container>
  </Layout>
)

export default ActivityTwo
