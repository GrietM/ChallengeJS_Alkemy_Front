import React , {useState } from 'react';
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import axios from 'axios'
import MyPostUserModal from '../Modals/PostUserModal';
import MyCard from '../Card';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {

  const token = localStorage.getItem('Token') 

  const goToHome = () => {
    window.location.href = '/Home'        
  } 
  
  const [userModalVisible, setUserModalVisible] = useState(false)

  const openUserModal = ()=>{
    setUserModalVisible(true)
  }


  const onFinish = async(values) => {
     console.log('Success:', values);
     const userObject = 
       {
         userName: values.username,
         password: values.password
       }

     try{
     const response = await axios.post('http://localhost:8080/api/users/login/', userObject );
     localStorage.setItem("Token", response.data.token) 
     console.log("Token succesfully generated:", response.data.token)
     message.success('Welcome to AcountANT',3,goToHome())
     } catch(err){
       message.error('Login error. Check username and password entered',5)
     }
   
   }
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (!token){
  return (
    <div>
      <br></br>
    <Space>
    
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'This field is required. Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <div> 
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={ openUserModal}>
          Create User
        </Button>
        <MyPostUserModal 
        userModalVisible={userModalVisible} 
        setUserModalVisible={setUserModalVisible} 
        //getAllUsers={getAllUsers} 
      />
      </Form.Item>
      </div>
    </Form>
    </Space>
    </div>
  )} 
  else 
  {
    return (
      <MyCard style={{textAlign:'center'}}></MyCard>
    )
  }
};

export default Login