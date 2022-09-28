import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const OpenEnded = () => (
  <Layout title="Open Ended">
    <Container>
      <Heading as="h3" fontSize={20} my={6}>
        1&#41; Open Ended Section
      </Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          A third grade student, interested in learning programming, asked you
          about what Github is. How would you describe Github?
        </Heading>
        <Paragraph>
          Github is like a social media platform &#40;ex. Facebook&#41;
          programmers where there are posts, groups, organizations and even
          marketplace too that is all about programming.
        </Paragraph>
        <Paragraph>
          A cool feature to it is that not only users can showoff their
          creations as post there, but anyone can contribute to the project
          creators showoff publicly.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What is an app that you use or have used that you like the design of?
          Briefly describe what you like about its design.
        </Heading>
        <Paragraph>
          Stack by Google. It&lsquo;s an app that helps user organize their
          documents such as receipts, bills, ids and etc. A cool feature of it
          too is that it can scan those documents and turn it into a
          soft-copy-like document with AI, live.
        </Paragraph>
        <Paragraph>
          The simplicity and functionality of this app is what I fancy the most.
          Not only that, but it also has a touch of AI-automation within the
          app. Not too much, not less, just the right amount.
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Can you briefly describe a project that you are currently working on?
          &#40;If not applicable, instead share what you are currently learning
          related to development&#41;
        </Heading>
        <Paragraph>
          I am currently learning Firebase by Google. Not only to be able to use
          it for this worksheet, but also as a knowledge for Databases in
          general. I&lsquo;ve always used MongoDB so far and I figured
          it&lsquo;d be nice to know another competing database system.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default OpenEnded
