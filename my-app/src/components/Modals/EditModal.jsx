import React, { useEffect, useState } from 'react'
import { Modal , Button,DatePicker, Form , Input, message, Radio, Col , Row} from 'antd'
import axios from 'axios'


const { Item } = Form
const { Group } = Radio

const EditModal =({isEditModalVisible, setIsEditModalVisible, getAllExpenses,getAllIncomes, operationEditDetails, setOperationEditDetails}) => {
    
    const token = localStorage.getItem('Token')
    const [formedit] = Form.useForm()
   
    const closeModal = ()=>{
        setOperationEditDetails({})
        setIsEditModalVisible(false)
    }
 
    const saveModal = async (editOperation)=>{
        try{ 
            const sendOperation={...editOperation}
            //console.log("por grabar ==",'http://localhost:8080/api/admin/users/'+ usereditdetails._id)
            const response = await axios.put('http://localhost:8080/api/admin/operations/'+ operationEditDetails._id , sendOperation, {headers: {Authorization: 'Bearer ' + token}});
            //console.log("put de usuario-response",response)
            message.success("Operation Updated")
            closeModal()
            if (operationEditDetails.operationType=='expense'){
                getAllExpenses()
                } else{
                getAllIncomes()
                }
            
        } catch (error) {
            message.error("Failed to Update Operation - Error:"  + error)
            throw error
        }
    }
    
    const formSuccess =(editOperation) =>{
        saveModal(editOperation)
    } 
    const formFailed =(error) =>{
        message.error("ERROR. Check warnings in red")
    } 

    const onCancel = ()=>{
        closeModal()
    }

    useEffect(()=>{
        //console.log("EDITMODAL-useEffect de seteo")
        if (typeof operationEditDetails !== undefined){
            formedit.setFieldsValue ({
                concept:operationEditDetails.concept, 
                amount: operationEditDetails.amount,
                //date : expensesEditDetails.date,
                //No se puede editar el tipo de operacion
                }
                )
        } else {
            formedit.setFieldsValue ({
                concept : '',
                amount : '',
                //date :''
                })
        }
    } , [formedit,operationEditDetails])

    const dateFormat = 'YYYY/MM/DD';
    
    return (
    <div>
      <Modal title='OPeration Editing' 
        visible={isEditModalVisible}
        width={700}
        footer={null}
        onCancel={closeModal}
      >
        <Row>
            <Col xs={1} sm={2} md={3} lg={4}></Col>
            <Col xs={23} sm={22} md={21} lg={18}>
        <Form 
            name="formulario" 
            onFinish={formSuccess}
            onFinishFailed={formFailed}
            form={formedit}
        >
            <Item label="Concept" 
                name="concept" 
                rules={[{ required: true, message: 'Insert Operation Concept'}]}
            >
                <Input />
            </Item>
            <Item label="Amount" 
                name="amount" 
                rules={[{ required: true, message: 'Insert Operation Amount' }]}
            >
                <Input />
            </Item>         
            <Item label="Date" name="date">
                <DatePicker format={dateFormat}/>
            </Item>
            <p style={{textAlign:'center'}}>Operation type cannot be modified</p>
            <Item style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit">Save</Button>
                &nbsp;&nbsp;&nbsp;
                <Button htmlType="button" onClick={onCancel}>Cancel</Button>
            </Item>
        </Form>
       </Col>
      </Row>
    </Modal>
    </div>
)
}

export default EditModal;