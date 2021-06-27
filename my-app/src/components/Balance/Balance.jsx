import React, {useState, useEffect} from 'react'
import { Descriptions } from 'antd';
import axios from 'axios'

const Balance = () => {

  const [balance, setBalance] = useState([])
  const [totalIncomes, setTotalIncomes]= useState([])
  const [totalExpenses, setTotalExpenses]= useState([])

  const token = localStorage.getItem('Token') 
  const getOperationsBalance = async () => {
    try{
      const resp = await axios.get('http://localhost:8080/api/balance',{headers: {Authorization: 'Bearer ' + token}});
      let totalExpenses= resp.data.totalExpenses
      let totalIncomes= resp.data.totalIncomes
      let balance = resp.data.balance
      setBalance(balance) 
      setTotalIncomes(totalIncomes)
      setTotalExpenses(totalExpenses)
    }
    catch(error){
        //localStorage.removeItem('Token')
        //GoToMain()   
        //message.error("Sesión expirada. Inicie sesión nuevamente", 4)
        throw error        
    }}
 
    useEffect(() =>{ 
      getOperationsBalance()
    },[]
)
    return (
      <div style={{backgroundColor:'white', paddingLeft:20}} >
      <h2 style={{fontWeight:'bolder'}}>Current Balance</h2>
      <Descriptions  
        style= {{fontWeight:'bolder'}}
        contentStyle={{fontSize:20}} 
        labelStyle={{fontSize:20}}>
        <Descriptions.Item label="Total Incomes"> ${totalIncomes}</Descriptions.Item>
        <Descriptions.Item label="Total Expenses"> ${totalExpenses}</Descriptions.Item>
        <Descriptions.Item label="Total Balance"> ${balance} </Descriptions.Item>
      </Descriptions>
      </div>
    )
}

export default Balance