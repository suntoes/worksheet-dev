import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={10}>
      This website by Mar Santos is dedicated to answer{' '}
      <Link
        href="https://north-scarf-0da.notion.site/Full-Stack-React-Developer-Worksheet-6fb28efe9e4146fea72fdf00a3fc7f35"
        target="_blank"
      >
        this worksheet
      </Link>
      .
    </Box>
  )
}

export default Footer
