/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import axios from 'axios'

const { Column } = Table;

const LastMoves = () => {
    const [operations, setOperations] = useState([])
    const token = localStorage.getItem('Token') 

    const getAllOperations = async () => {
        
        try{
          const resp = await axios.get('http://localhost:8080/api/operations',{headers: {Authorization: 'Bearer ' + token}});
          setOperations(resp.data)  
        }
        catch(error){
            throw error        
        }}

        useEffect(() =>{ 
            getAllOperations()
        },[]
        )

    return(
           <Table key="lastMoves" dataSource={operations} pagination={{ position: ['none','none'] }} >
                <Column title="Concept" dataIndex="concept" key="concept" />
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Date" dataIndex="date" key="date" />
                <Column title="Operation" dataIndex="operationType" key="operation" />
            </Table>
        )
    }
    
    
export default LastMoves;
