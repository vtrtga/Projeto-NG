import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Button, TableHead, Toolbar } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

function UserPanel (): JSX.Element {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [userInfo, setUserInfo] = useState<any>({});

  const logout = () => {
    console.log(user)
    localStorage.removeItem('token');
    navigate('/');
  }

  useEffect(() => setUserInfo(user), [user]);

  console.log(userInfo)

  return(
    <>
    <AppBar position='static'>
      <Toolbar variant='regular'>
        <Button variant='text' onClick={() => navigate('/transfers') } size='medium' color='secondary' sx={{ bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' } , margin: '3px', width: '3cm', color: 'black'}}>
          Transfer
        </Button>
        <Button onClick={logout} variant='text' size='medium' color='secondary' sx={{ bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' }, margin: '3px', width: '3cm', color: 'black'}}>
          Logout
        </Button>
        <TableHead sx={{ position: 'absolute', marginLeft: '25cm' }}>You are logged in as { userInfo.username }</TableHead>
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
  )
}

export default UserPanel
