import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Button, TableHead, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context';

function UserPanel (): JSX.Element {
  const navigate = useNavigate();
  const { user, balance, setUser, setBalance } = useContext(Context);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfos');
    localStorage.removeItem('userBalance');
    navigate('/');
  }

  useEffect(() => {
    const userInfos = localStorage.getItem('userInfos');
    console.log(user, 'Usercontext');
    setUser(JSON.parse(userInfos || '{}'));
    setBalance(localStorage.getItem('userBalance'));
  });

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
        <TableHead sx={{ position: 'absolute', marginLeft: '25cm' }}>You are logged in as { user.username }</TableHead>
      </Toolbar>
    </AppBar>

    <Container maxWidth="sm" >
      Account id: { user.accountId }
      Your balance: { balance }
    </Container>
    </>
  )
}

export default UserPanel
