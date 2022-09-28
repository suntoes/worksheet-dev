import Head from 'next/head'
import NavBar from '../navbar'
import { Box } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="suntoes' dev worksheet" />
        <meta name="author" content="Mar Santos" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Mar Santos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="suntoes" />
        <meta name="twitter:creator" content="suntoes" />
        <meta
          name="twitter:image"
          content="https://www.suntoes.codes/card.png"
        />
        <meta property="og:site_name" content="Mar Santos" />
        <meta name="og:title" content="Mar Santos" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.suntoes.codes/card.png"
        />
        <title>Mar Santos</title>
      </Head>

      <NavBar path={router.asPath} />

      {children}
    </Box>
  )
}

export default Main
