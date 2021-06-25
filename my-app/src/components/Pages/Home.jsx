import { Button, message, Space } from 'antd'
import React from 'react'
import Balance from '../Balance/Balance'
import ExpensesTable from '../ExpensesTable/ExpensesTable'
import LastMoves2 from '../LastMoves/LastMoves2'
import GoToMain from '../GoToMain'

const Home = () => {
    const token = localStorage.getItem('Token') 

    const goToNewOperation = () => {
        window.location.href = '/Operations'        
    }
    if (token){
    return(
       <>
       <br/>
       <Balance/>
       <br/>
       <Button type="primary" onClick={goToNewOperation}>
           Register a New Operation
       </Button>
       <br/>
       <br/>
       <h2>Check your recent activity</h2>
       <LastMoves2/>
        </>
    ) }
    else {
        message.error('Please Login to access this information. Redirecting to Login Page...', GoToMain)
        return null
       
      }
}

export default Home