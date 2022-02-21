import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import FooterFields from '../templates/FooterFields'

const lastRow = [
  'Maintained by Areeb Jamal & Team',
  `© ${new Date().getFullYear()} eventyay`,
  'Terms',
  'Contact',
  'Refund Policy',
  'Privacy',
]

export const Footer = (): JSX.Element => {
  return (
    <Box sx={{ bgcolor: '#1b1c1d' }} component="footer" p={4}>
      <Container maxWidth="md">
        <FooterFields />
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ bgcolor: '#323334' }}
        />
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          pt={2}
          mr={{ lg: 8 }}
          color="#bbbbbb"
          divider={
            <Divider
              sx={{ bgcolor: '#323334' }}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent="center"
          spacing={1}
        >
          {lastRow.map((val, index) => {
            return (
              <Typography key={index} variant="body2">
                {val}
              </Typography>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
