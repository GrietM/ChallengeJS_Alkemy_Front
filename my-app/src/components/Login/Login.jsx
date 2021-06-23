import React , {useState } from 'react';
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
//import './Login.css'
import axios from 'axios'
//import ConfirmLogin from '../Modal/ConfirmLogin'

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

  const goToHome = () => {
    window.location.href = '/Home'        
}
 
 
  const onFinish = async(values) => {
     console.log('Success:', values);
     const userObject = 
       {
         userName: values.username,
         password: values.password
       }
     //console.log ('userObject:', userObject)
     try{
     const response = await axios.post('http://localhost:8080/api/admin/users/login/', userObject );
     localStorage.setItem("Token", response.data.token) 
     console.log("Token generado exitosamente:", response.data.token)
     message.success('Welcome to AcountANT',3,goToHome())
      //readyToRedirect = true
     } catch(err){
       message.error('Error de inicio de sesión. Verifique usuario y contraseña ingresados',5)
     }
    /*  finally{
       if (readyToRedirect === true){
         //console.log("finally" , values)
         //activo el modal
         setUserLogin(values)
         setIsModalLogin(true)
         HandleConfig()
         //GoToMain()
       }
     }; */
   }
 /*  const onFinish = (values) => {
    console.log('Success:', values);
  }; */

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const CreateUser = () => {
    alert('Armar un post de user con un modal')
  }

  return (
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
            message: 'Please input your username!',
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
        <Button type="primary" onClick={CreateUser}>
          Create User
        </Button>
      </Form.Item>
      </div>
    </Form>
    </Space>
  );
};

export default Login