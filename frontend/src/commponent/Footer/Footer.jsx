import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import './index.css'

const Footer = () => {
  return (
<footer className='dark'>
  <Box>
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item >
          <Box className='box' borderBottom={1} fontSize={19} color='white'>Hello World</Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
</footer>
  )
}

export default Footer