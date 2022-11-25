import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Box, Container, width } from '@mui/system'

function UserPanel () {
  return(
    <React.Fragment>
    <>

    <AppBar position='static'>
      <Toolbar variant='regular'>
        <Button variant='text' size='medium' color='secondary' sx={{ bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' } , margin: '3px', width: '3cm', color: 'black'}}>
          Transfer
        </Button>
        <Button variant='text' size='medium' color='secondary' sx={{ bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' }, margin: '3px', width: '3cm', color: 'black'}}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>

    <Container maxWidth="xl" >
      <Box sx={{ bgcolor: 'whitesmoke', height: '100vh' }}>
      <h3>
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </h3>
      </Box>
    </Container>
    </>
    </React.Fragment>
  )
}

export default UserPanel
