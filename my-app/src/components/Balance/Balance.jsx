import React, {useState, useEffect} from 'react'
import { Descriptions } from 'antd';
import { getTimeProps } from 'antd/lib/date-picker/generatePicker';
import axios from 'axios'

const Balance = () => {

  const [balance, setBalance] = useState([])
  const [totalIncomes, setTotalIncomes]= useState([])
  const [totalExpenses, setTotalExpenses]= useState([])

  const token = localStorage.getItem('Token') 
  const getOperationsBalance = async () => {
    try{
      const resp = await axios.get('http://localhost:8080/api/admin/balance',{headers: {Authorization: 'Bearer ' + token}});
      console.log("resp.data",resp.data)
      console.log(",resp.data.totalIncomes",resp.data.totalIncomes)
      console.log(",resp.data.totalExpenses",resp.data.totalExpenses)
      console.log("resp.data.balance",resp.data.balance)
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
 
    //let date= new Date()
     
  useEffect(() =>{
    getOperationsBalance()
},[]
)
    return (
  <Descriptions title="Current Balance" style= {{fontWeight:'bolder'}}>
    {/* <Descriptions.Item label="UserName" style= {{fontWeight:'bolder'}}> Marce Griet</Descriptions.Item> */}
    <Descriptions.Item label="Total Incomes"> {totalIncomes}$</Descriptions.Item>
    <Descriptions.Item label="Total Expenses"> {totalExpenses}$</Descriptions.Item>
    {/* <Descriptions.Item label="Balance at"> Date </Descriptions.Item> */}
    <Descriptions.Item label="Total Balance"> {balance} $ </Descriptions.Item>
  </Descriptions>
    )
}

export default Balance