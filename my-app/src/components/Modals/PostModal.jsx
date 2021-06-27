import React from 'react'
import { Modal , Button, Form , Input, message, Col , Row, DatePicker, Select} from 'antd'
import axios from 'axios'

const jwt = require ('jsonwebtoken');

const { Item } = Form

const MyPostModal = ({operationVisible, setOperationVisible , getAllOperations}) => {
    
    const token = localStorage.getItem('Token')
    const decoded = jwt.verify(token, 'AlkemyChallengeJS')
    const [formedit] = Form.useForm()
   
    const closeOperationModal = ()=>{
        setOperationVisible(false)
        window.location.href = window.location.href; // eslint-disable-line
    }
 
    const saveModal = async (newoperation)=>{
        try{ 
            await axios.post('http://localhost:8080/api/operations/', newoperation,{headers: {Authorization: 'Bearer ' + token}});
            message.success("Operation succesfully created")
            closeOperationModal()
        } 
        catch (error) {
            message.error("Failed to create operation. Clear your entries and check fields requirements shown in red")
            throw error
        }
    }
    
    const formSuccess =(newoperation) =>{
        saveModal(newoperation)
    } 
    const formFailed =(error) =>{
        message.error("Failed to create operation. Clear your entries and check fields requirements shown in red")
    } 
    const handleCancel = ()=>{
        closeOperationModal()
    }

    const formview={
        labelCol:{ span:4}, 
        wrapperCol:{span:20},
      }

    const dateFormat = 'YYYY/MM/DD';

    return (
    <div>
      <Modal title='New Operation' 
        visible={operationVisible}
        width={700}
        footer={null}
        onCancel={closeOperationModal}
      >
        <Row>
            <Col xs={4} sm={4} md={2} lg={2}></Col>
            <Col xs={20} sm={20} md={22} lg={22}>
        <Form 
            name="formulario" 
            onFinish={formSuccess}
            onFinishFailed={formFailed}
            form={formedit}
            {...formview}
        >
            <Item label="Concept" 
                name="concept" 
                rules={[{ required: true, message: 'Insert Concept (max:20)' , max:20 }]}
                
            >
                <Input/>
            </Item>
            <Item label="Amount" 
                name="amount" 
                rules={[{ required: true, message: 'Insert amount (only numeric values accepted)'}]}
                
            >
               <Input  />
            </Item>
            <Item label="Date" name="date">
                <DatePicker format={dateFormat}/>
            </Item>
            <Item label="Operation Type" name="operationType">
                <Select>
                    <Select.Option value="expense">Expense</Select.Option>
                    <Select.Option value="income">Income</Select.Option>
                </Select>
            </Item>
            <Item label="User" name="user">
                {decoded.userName}
            </Item>
            <Item style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit">Guardar</Button>
                &nbsp;&nbsp;&nbsp;
                <Button htmlType="button" onClick={handleCancel}>Cancelar</Button>
            </Item>      
        </Form>
      </Col>
      </Row>
    </Modal>
    </div>
)
}

export default MyPostModal;