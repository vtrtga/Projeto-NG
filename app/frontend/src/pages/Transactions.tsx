import { AppBar, Toolbar } from '@mui/material'
import React, { ReactElement } from 'react'

function Transactions (): ReactElement {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar variant='regular'></Toolbar>
      </AppBar>
    </div>
  )
}

export default Transactions
