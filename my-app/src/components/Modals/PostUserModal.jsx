/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { Modal , Button, Form , Input, message, Col , Row} from 'antd'
import axios from 'axios'
import Password from 'antd/lib/input/Password'

const { Item } = Form

const MyPostUserModal = ({userModalVisible, setUserModalVisible , getAllUsers}) => {
    
    const [formedit] = Form.useForm()
   
    const closeUserModal = ()=>{
        setUserModalVisible(false)
    }
 
    const saveModal = async (newUser)=>{
        try{ 
            const response = await axios.post('http://localhost:8080/api/users/', newUser);
            message.success(`User succesfully created. User Name: ${response.data.userName} `)
            closeUserModal()            
        } 
        catch (error) {
            message.error("Failed to create user - This user already exists")
            throw error
        }
    }
    
    const formSuccess =(newUser) =>{
        saveModal(newUser)
    } 
    const formFailed =(error) =>{
        message.error("Failed to create operation. Clear your entries and check fields requirements shown in red")
    } 
    const handleCancel = ()=>{
        closeUserModal()
    }

    const formview={
        labelCol:{ span:4}, 
        wrapperCol:{span:20},
    }
      
    return (
    <div>
      <Modal title='New User' 
        visible={userModalVisible}
        width={700}
        footer={null}
        onCancel={closeUserModal}
      >
        <Row>
            <Col xs={4} sm={4} md={2} lg={2}></Col>
            <Col xs={20} sm={20} md={22} lg={22}>
        <Form 
            name="form" 
            onFinish={formSuccess}
            onFinishFailed={formFailed}
            form={formedit}
            {...formview}
        >
            <Item label="First Name" 
                name="firstName" 
                rules={[{ required: true, message: 'Enter first name (max:20)' , max:20 }]}
            >
                <Input/>
            </Item>
            <Item label="Last Name" 
                name="lastName" 
                rules={[{ required: true, message: 'Enter last name (max:20)' , max:20}]}
                
            >
                <Input  />
            </Item>
            <Item label="Email" 
                name="email" 
                rules={[{ required: true, message: 'Enter a valid email adress'}]}   
            >
                <Input  />
            </Item>
            <Item
             label="Password" 
             name="password" 
             rules={[{ required: true, message: 'Enter a password (max:10-min:3)' , min:3 ,max:10}]}
            >
                <Password  />
            </Item>
            <Item style={{textAlign:'center'}}>
                <Button type="primary" htmlType="submit">Submit</Button>
                &nbsp;&nbsp;&nbsp;
                <Button htmlType="button" onClick={handleCancel}>Cancel</Button>
            </Item>
        </Form>
      </Col>
      </Row>
    </Modal>
    </div>
)
}

export default MyPostUserModal;