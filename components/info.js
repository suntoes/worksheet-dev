import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const InfoSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const ChildBioYear = styled.span`
  font-weight: bold;
`

export const ParentBioYear = styled.div`
  display: inline-block;
  text-align: left;
  padding-left: 3.5em;
  margin-right: 1em;
`

export const InfoTitle = ({ children }) => (
  <ParentBioYear>
    <ChildBioYear>{children}</ChildBioYear>
  </ParentBioYear>
)
