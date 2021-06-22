import React from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ExpensesTable = () =>{
    return(
        <Table dataSource={data}>
            <Column title="Concept" dataIndex="concept" key="concept" />
            <Column title="Amount" dataIndex="amount" key="amount" />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Operation" dataIndex="operation" key="operation" />
         </Table>
    )
}

export default ExpensesTable