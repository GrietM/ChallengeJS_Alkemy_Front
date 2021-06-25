import React, { useEffect, useState } from 'react'
import { Table, message } from 'antd'
import axios from 'axios'
import {DeleteOutlined , EditOutlined, PlusCircleOutlined} from '@ant-design/icons'
import DeleteModal from '../Modals/DeleteModal'
import EditModal from '../Modals/EditModal'
import PostModal from '../Modals/PostModal'
import GoToMain from '../GoToMain'

const Incomes = () => {
    const [incomes, setIncomes] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const token = localStorage.getItem('Token') 

    const getAllIncomes = async () => {
        if(token){
        try{
          const resp = await axios.get('http://localhost:8080/api/admin/operationsbytype?operationType=income'
        ,{headers: {Authorization: 'Bearer ' + token}});
          setIncomes(resp.data)  
        }
        catch(error){
            localStorage.removeItem('Token') 
            message.error("Session expired. Please Login to continue operating", 4, GoToMain)
            throw error        
        }}
        else {
            message.error('Please Login to access this information. Redirecting to Login Page...',2, GoToMain)
          }
        }

        useEffect(() =>{
            getAllIncomes()
        },[]
        )
        const [operationVisible, setModal] = useState(false)
        const [ operationDetails, setOperationDetails]  = useState({})

       const handleOnDelete = (event) => {
            //antes de borrar llamar a un modal que confirme que quiere borrar ese libro
            setOperationDetails (event)
            setIsModalVisible(true)
        } 

        const [ isEditModalVisible, setIsEditModalVisible] = useState(false);
        const [ operationEditDetails, setOperationEditDetails]  = useState({})

        const handleOnEdit = (row) => {
            setOperationEditDetails (row)
            setIsEditModalVisible(true)
        } 

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
                    <DeleteOutlined style={{fontSize:'20px', color:'red'}} onClick={()=>handleOnDelete(row)}/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <EditOutlined style={{fontSize:'20px', color:'blue'}} onClick={()=>handleOnEdit(row)}/>
                  </>
              },
        ]
    if (token){   
    return(
        <div>
        <br/>
        <h2>Incomes</h2>
        <PostModal 
        postModal={operationVisible} 
        setModal={setModal} 
        getAllIncomes={getAllIncomes} 
        />
        <DeleteModal 
        isModalVisible={isModalVisible} 
        setIsModalVisible={setIsModalVisible} 
        getAllIncomes={getAllIncomes} 
        operationDetails={operationDetails} 
        />
        <EditModal 
        isEditModalVisible={isEditModalVisible}
        setIsEditModalVisible={setIsEditModalVisible} 
        getAllIncomes={getAllIncomes} 
        operationEditDetails={operationEditDetails} 
        setOperationEditDetails={setOperationEditDetails}
        />
           <Table columns= {columns} dataSource={incomes}/>
        </div>
        )}
        else {
            return null
        }
    }
    
    
export default Incomes;
