import React from 'react'
import { Descriptions } from 'antd';
import { getTimeProps } from 'antd/lib/date-picker/generatePicker';

const Balance = () => {
  /* let totalIncomes= axios.get(ruta del incomes)
  let totalExpenses= axios.get(ruta del expenses)
  let balance = totalIncomes-totalExpenses */
  
  let totalExpenses = 200000
  let totalIncomes = 320000
  let balance = totalIncomes-totalExpenses 
  //let date= new Date()
  
    return (
  <Descriptions title="Current Balance" style= {{fontWeight:'bolder'}}>
    <Descriptions.Item label="UserName" style= {{fontWeight:'bolder'}}> Marce Griet</Descriptions.Item>
    <Descriptions.Item label="Total Incomes">{totalIncomes} $</Descriptions.Item>
    <Descriptions.Item label="Total Expenses">{totalExpenses} $</Descriptions.Item>
    <Descriptions.Item label="Balance at"> Date </Descriptions.Item>
    <Descriptions.Item label="Total"> {balance} $ </Descriptions.Item>
  </Descriptions>
    )
}

export default Balance