import React, { useEffect, useState } from 'react'
import { Radio, Button, message, Table } from 'antd';
//import OperationsForm from '../Form/Form';
import axios from 'axios'
import {DeleteOutlined , EditOutlined , PlusCircleOutlined} from '@ant-design/icons';
import MyPostModal from '../Modals/PostModal'
import GoToMain from '../GoToMain'

//import ConfirmModal from '../Modal/ConfirmModal'
//import EditModal from '../Modal/EditModal'



const Operations = () => {
  
    //const [users, setUsers] = useState([])
    //const [isModalVisible, setIsModalVisible] = useState(false);
    const token = localStorage.getItem('Token') 

    const [operationVisible, setOperationVisible] = useState(false)
    
    const openOperationModal = ()=>{
        setOperationVisible(true)
    }
    //const [ userdetails, setUsersdetails]  = useState({})
    if (token){
    return(
        <div>
        <br></br>
        <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openOperationModal} >New Operation</Button>
        <MyPostModal 
        operationVisible={operationVisible} 
        setOperationVisible={setOperationVisible} 
        //getAllUsers={getAllUsers} 
      />
        
        </div>
    )}
    else {
        message.error('Please Login to access this information. Redirecting to Login Page...', GoToMain)
        return null
    }}

export default Operations