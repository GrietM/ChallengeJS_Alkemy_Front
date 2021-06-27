import { Button, message } from 'antd'
import React, {useState} from 'react'
import Balance from '../Balance/Balance'
import LastMoves from '../LastMoves/LastMoves'
import GoToMain from '../../components/GoToMain/GoToMain'
import MyPostModal from '../Modals/PostModal'
import {PlusCircleOutlined} from '@ant-design/icons';

const Home = () => {
    const token = localStorage.getItem('Token') 
   
    const [operationVisible, setOperationVisible] = useState(false)
    const openOperationModal = ()=>{
        setOperationVisible(true)
    }

    if (token){
    return(
       <>
       <br/>
       <Balance/>
       <br/>
       <Button type="primary" onClick={ openOperationModal} icon={<PlusCircleOutlined/>}>
        New Operation
       </Button>
       <MyPostModal 
        operationVisible={operationVisible} 
        setOperationVisible={setOperationVisible} 
        />
        <br/>
       <h3 style={{fontWeight:'bolder'}}>Check your recent activity</h3>
       <LastMoves/>
        </>
    ) }
    else {
        message.error('Please Login to access this information. Redirecting to Login Page...',2, GoToMain)
        return null
       
      }
}

export default Home