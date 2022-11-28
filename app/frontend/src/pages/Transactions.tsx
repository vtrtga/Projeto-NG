import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Context from "../context/Context";
import '../styles/transactions.css';
import { getUserInfos } from "../services/request";

function Transactions() {
  const { user } = useContext(Context);
  const [transactions, setTransactions] = useState<any>([])
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();


  const didUpdate = async (id: number) => {
    try{
      const transactions = await getUserInfos(`/transactions/${ id }`)
      setTransactions(transactions);
      setIsLoggedIn(true);

    } catch(e) {
      setIsLoggedIn(false);
      console.error(e);
    }
  }
  useEffect(() => {
    didUpdate(user.accountId);
  },[user]);

  if(!isLoggedIn) return <Navigate to="/"/>

  return(
    <>
    <Header />
    <Container sx={{ marginTop: "200px", height: "500px" , bgcolor: "#2196f3", color: "white", textAlign: "center", borderRadius: "6px", border: "1px solid black", display: "grid"}} >
      <table>
        <thead>
        <tr>
        <th>Transaction id</th>
        <th>Debited account id</th>
        <th>Credited account id</th>
        <th>Value</th>
        <th>Transaction date</th>
        </tr>
        </thead>
        <tbody>

        {
          transactions.map((t: any) => {
            return(
              <tr>
                <td>{ t.id }</td>
                <td>{ t.debitedAccountId }</td>
                <td>{ t.creditedAccountId }</td>
                <td>{ t.value }</td>
                <td>{ t.createdAt }</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </Container>
    <Button onClick={() => navigate('/home')} variant='text' size='medium' color='secondary' sx={{postion: "absolute", left: "10cm", bottom: "3cm" ,margin: '5cm', bgcolor: '#92a8d1', ":hover": { bgcolor: '#e6e2d3' },  width: '3cm', color: 'black'}}>
    Back</Button>
    </>
  )
}

export default Transactions;