import { Container, Heading, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" fontSize={20} my={6}>
        3&#41; Experience Section
      </Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Describe a software stack you believe you’re most experienced with.
        </Heading>
        <Paragraph>
          MERN Stack and it&lsquo;s evolving frameworks and/or technologies.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          &#40;If applicable&#41; Describe what project you have worked on
          professionally.
        </Heading>
        <Paragraph>
          While working with a team of 4-5 people, I have contributed in the
          early-development stage of a huge project for Noblemen LLC.
        </Paragraph>
        <Paragraph>
          The major feature that I&lsquo;ve worked on is probably my tasks
          throughout my work there. I coded about 8+ web admin pages and
          it is the homebase wherein the content management take places by
          the managers for the end-users.
        </Paragraph>
        <Paragraph>
          What gave me a hard time during my work was the lack of communication
          and the lay-out for the project to the team. Since during this two
          factor, certain tasks and works are prone to entanglement sometimes.
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          &#40;If applicable&#41; Describe a project that you have done using
          your software stack.
        </Heading>
        <Paragraph>
          The visual website for{' '}
          <Link href="https://suntoes.codes/works/coffeedojo" target="_blank">
            Coffee Dojo
          </Link>
          . With the help of my own business proposal and the cafe owner,
          I&lsquo;ve kickstarted their very first website for the brand.
        </Paragraph>
        <Paragraph>
          I&lsquo;ve worked on not only the responsive design & unique animation 
		  of the website, but also under the hood, there is a dedicated server that 
		  runs 24/7 and web-scrapes for recent instagram posts about the brand.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Experience
