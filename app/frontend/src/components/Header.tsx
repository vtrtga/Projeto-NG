import React, { ReactElement, useContext, useEffect } from 'react'
import { AppBar, Toolbar, Button, TableHead } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
function Header (): ReactElement {
  const navigate = useNavigate();
  const { user, setUser, setBalance, balance } = useContext(Context);

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
  },[]);

  return (
  <div>
    <AppBar position='static'>
      <Toolbar variant='regular'>
        <Button variant='text' onClick={() => navigate('/transactions') } size='medium' color='secondary' sx={{ bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' } , margin: '3px', width: '5cm', color: 'black'}}>
          Transactions
        </Button>
        <Button onClick={logout} variant='text' size='medium' color='secondary' sx={{ justifySelf: 'flex-end', position: 'absolute', left: '28cm', margin: '5cm', bgcolor: 'ButtonFace', ":hover": { bgcolor: '#e6e2d3' },  width: '3cm', color: 'black'}}>
          Logout
        </Button>
        <TableHead sx={{ position: 'absolute', marginLeft: '25cm', justifySelf: 'flex-end' }}>You are logged in as { user.username }</TableHead>
        <TableHead sx={{ position: 'absolute', marginLeft: '15cm' }}>Balance: ${ balance }</TableHead>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header
