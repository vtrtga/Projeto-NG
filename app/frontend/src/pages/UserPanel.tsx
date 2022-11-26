import React, { useState } from 'react'
import { Container } from '@mui/system'
import Header from '../components/Header';
import TransactionPanel from '../components/TransactionPanel';

function UserPanel (): JSX.Element {
  // const [userTransactions, setUserTransactions] = useState([]);
  return(
    <>
    <Header />
    <Container maxWidth="sm" >
      <TransactionPanel />
    </Container>
    </>
  )
}

export default UserPanel
