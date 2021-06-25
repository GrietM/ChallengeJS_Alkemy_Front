import React, { useEffect, useState } from 'react'
import { Radio, Button, message, Table } from 'antd';
import axios from 'axios'
import {DeleteOutlined , EditOutlined , PlusCircleOutlined} from '@ant-design/icons';
import MyPostModal from './Modals/PostModal'
import GoToMain from './GoToMain'

const Operations = () => {
  
    const token = localStorage.getItem('Token') 

    const [operationVisible, setOperationVisible] = useState(false)
    
    const openOperationModal = ()=>{
        setOperationVisible(true)
    }
   
    if (token){
    return(
        <div>
        <br></br>
        <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openOperationModal} >New Operation</Button>
        <MyPostModal 
        operationVisible={operationVisible} 
        setOperationVisible={setOperationVisible} 
      />
        
        </div>
    )}
    else {
        message.error('Please Login to access this information. Redirecting to Login Page...',2, GoToMain)
        return null
    }}

export default Operations