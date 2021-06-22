import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const LogOut = () =>{  
    return (
    <>
    <Button 
        type="primary" 
        icon = {<UserOutlined/>}
        //onClick={handleLogOut}
    >
        Logout
    </Button>
    </>
)
}

export default LogOut