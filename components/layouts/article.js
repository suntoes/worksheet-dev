import { motion } from 'framer-motion'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Footer from '../footer'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title, isFull }) => {
  const t = `${title} - Mar Santos`

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}

        {isFull ? (
          children
        ) : (
          <Container
            maxW="container.md"
            pt={14}
            paddingInlineStart={0}
            paddingInlineEnd={0}
          >
            {children}
            <Footer />
          </Container>
        )}
      </>
    </motion.article>
  )
}

export default Layout
