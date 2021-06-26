import React, { useEffect, useState } from 'react'
//import ExpensesTable from '../ExpensesTable/ExpensesTable'
//import OperationsTable from '../OperationsTable/OperationsTable'
import { Table , Button, message} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined, PlusCircleOutlined} from '@ant-design/icons'
//import ProductModal from '../../components/Modal/ProductModal'
//import ModalConfirm from '../../components/Modal/ModalConfirm'
//import ModalUpDate from '../../components/Modal/ModalUpDate'
import GoToMain from '../../components/GoToMain'
//import './ProductsCrud.css'
const { Column } = Table;

const LastMoves2 = () => {
    const [operations, setOperations] = useState([])
    const token = localStorage.getItem('Token') 

    const getAllOperations = async () => {
        
        try{
          const resp = await axios.get('http://localhost:8080/api/operations',{headers: {Authorization: 'Bearer ' + token}});
          setOperations(resp.data)  
        }
        catch(error){
            localStorage.removeItem('Token') 
            message.error("Session expired. Please Login to continue operating", 2, GoToMain)
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
