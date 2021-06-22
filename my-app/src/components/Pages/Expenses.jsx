import React, { useEffect, useState } from 'react'
//import ExpensesTable from '../ExpensesTable/ExpensesTable'
import OperationsTable from '../OperationsTable/OperationsTable'
import { Table , Button, message} from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined, PlusCircleOutlined} from '@ant-design/icons'
//import ProductModal from '../../components/Modal/ProductModal'
//import ModalConfirm from '../../components/Modal/ModalConfirm'
//import ModalUpDate from '../../components/Modal/ModalUpDate'
//import GoToMain from '../../components/GoToMain'
//import './ProductsCrud.css'
const { Column } = Table;

const columns =[
    {
        title:"Concept",
        dataIndex:"concept",
        key:"concept"
    },
    {
        title:"Amount",
        dataIndex:"amount",
        key:"amount"
    },
    {
        title:"Date",
        dataIndex:"date",
        key:"date"
    },
    {
        title:"Operation",
        dataIndex:"operationType",
        key:"operation"
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, row) =>
          <>
            <DeleteOutlined style={{fontSize:'20px', color:'red'}} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <EditOutlined style={{fontSize:'20px', color:'blue'}}/>
          </>
      },
]

const Expenses = () => {
    const [expenses, setExpenses] = useState([])

    const getAllExpenses = async () => {
        
        try{
          //const resp = await axios.get('http://localhost:8080/api/admin/operations/operationsbytype,get,{ params: { operationType: expense } }')//,{headers: {Authorization: 'Bearer ' + token}});
          const resp = await axios.get('http://localhost:8080/api/admin/operationsbytype', {
    params: {
      operationType: 'expense'    }
  })
  console.log('resp',resp)
          setExpenses(resp.data)  
        }
        catch(error){
            //localStorage.removeItem('Token')
            //GoToMain()   
            //message.error("Sesión expirada. Inicie sesión nuevamente", 4)
            throw error        
        }}

        useEffect(() =>{
            getAllExpenses()
        },[]
        )

    return(
           <Table columns= {columns} dataSource={expenses}/>
    
        )
    }
    
    
export default Expenses;
