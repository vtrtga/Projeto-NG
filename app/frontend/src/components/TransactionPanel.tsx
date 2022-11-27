import { Button, Container, OutlinedInput } from "@mui/material";
import React, { useContext, useState } from "react";
import Context from "../context/Context";
import { getUserInfos, transactionRequest } from "../services/request";


function TransactionPanel() {
  const [value, setValue] = useState<any>();
  const [payeeId, setPayeeId] = useState<any>();
  const { user, setBalance } = useContext(Context);

  const handleTransaction = async () => {
    try {
      await transactionRequest('/transactions', 
      { 
        value, creditedAccountId: payeeId, debitedAccountId: user.accountId 
      }
      );
      const newBalance = await getUserInfos(`/users/balance/${ user.accountId }`);

      setBalance(newBalance.balance);
      localStorage.setItem('userBalance', newBalance.balance);
    } catch(e) {
      console.error(e);
    }
  }
  
  return(
    <>
    <Container sx={{ marginTop: "200px", height: "500px" , bgcolor: "#2196f3", color: "white", textAlign: "center", borderRadius: "6px", border: "1px solid black", display: "grid"}}>
      <h4>Enter a transaction value:</h4>
     <OutlinedInput onChange={({ target: { value } }) => { setValue(Number(value)) }} value={ value } type="number" sx={{ width: "300px", bgcolor: "whitesmoke", margin: "auto" }} />
      <h4>Enter the beneficiary account id:</h4>
      <OutlinedInput onChange={({ target: { value } }) => { setPayeeId(Number(value)) }} value={ payeeId } type="number" sx={{ width: "300px", bgcolor: "whitesmoke", margin: "auto" }}/>
      <Button onClick={ handleTransaction } variant="text" sx={ { margin: "auto", bgcolor: 'whitesmoke', color: "black", ":hover": { bgcolor: '#e6e2d3' }, height: "35px", width: "80px" } }>
        Submit
      </Button>
      </Container>
    </>
  )
}

export default TransactionPanel;