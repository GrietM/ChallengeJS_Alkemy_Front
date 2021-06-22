import React, { useEffect, useState } from 'react'
import { Table , Button, message} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined, PlusCircleOutlined} from '@ant-design/icons'
//import ProductModal from '../../components/Modal/ProductModal'
//import ModalConfirm from '../../components/Modal/ModalConfirm'
//import ModalUpDate from '../../components/Modal/ModalUpDate'
//import GoToMain from '../../components/GoToMain'
//import './ProductsCrud.css'
const { Column } = Table;

const LastMoves2 = () => {
    const [operations, setOperations] = useState([])

    const getAllOperations = async () => {
        
        try{
          const resp = await axios.get('http://localhost:8080/api/admin/operations')//,{headers: {Authorization: 'Bearer ' + token}});
          
          console.log(resp)
          setOperations(resp.data)  
        }
        catch(error){
            //localStorage.removeItem('Token')
            //GoToMain()   
            //message.error("Sesión expirada. Inicie sesión nuevamente", 4)
            throw error        
        }}

        useEffect(() =>{
            getAllOperations()
        },[]
        )

    return(
           <Table dataSource={operations} pagination={{ position: ['none','none'] }}>
                <Column title="Concept" dataIndex="concept" key="concept" />
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Date" dataIndex="date" key="date" />
                <Column title="Operation" dataIndex="operationType" key="operation" />
            </Table>
        )
    }
    
    
export default LastMoves2;
