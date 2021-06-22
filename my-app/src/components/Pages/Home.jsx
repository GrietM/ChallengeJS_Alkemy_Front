import { Button, Space } from 'antd'
import React from 'react'
import Balance from '../Balance/Balance'

import LastMoves2 from '../LastMoves/LastMoves2'

const Home = () => {
    
    const goToNewOperation = () => {
        window.location.href = '/Operations'        
    }
    return(
        <>
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
    )
}

export default Home