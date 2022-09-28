import NextLink from 'next/link'

import Image from 'next/image'

import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import { InfoSection, InfoTitle } from '../components/info'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import QuoteGenerate from '../components/quote-generate'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <QuoteGenerate />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mar Santos
          </Heading>
          <p>Freelance Developer & Designer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/suntoes.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Applicant Info.
        </Heading>
        <InfoSection>
          <InfoTitle>Full Name:</InfoTitle>
          Mar Angelo N. Santos
        </InfoSection>
        <InfoSection>
          <InfoTitle>Email:</InfoTitle>
          <NextLink href="tel:+639761110175" passHref>
            <Link>
              +63 (0976) 111-0175 <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </InfoSection>
        <InfoSection>
          <InfoTitle>Phone #:</InfoTitle>
          <NextLink href="mailto:mar.suntoes@gmail.com" passHref>
            <Link>
              mar.suntoes@gmail.com <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </InfoSection>
        <InfoSection>
          <InfoTitle>Date (published):</InfoTitle>
          September 28, 2022
        </InfoSection>
        <InfoSection>
          <InfoTitle>Job Position Applied to:</InfoTitle>
          Full Stack React Developer
        </InfoSection>
      </Section>
    </Container>
  </Layout>
)

export default Home
