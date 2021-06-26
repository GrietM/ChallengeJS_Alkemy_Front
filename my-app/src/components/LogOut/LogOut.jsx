import React from 'react'
import { Button, message } from 'antd';
import GoToMain from '../GoToMain'

const LogOut = () =>{  

    const token = localStorage.getItem('Token')

    const logOutLegend = () => {
        if (token){
            return ("Logout")}
    }

const handleLogOut = () => {
    localStorage.removeItem('Token')
    message.success('Logged Out! Thanks for your visit',5)
    setTimeout(GoToMain, 2000);
}

    return (
    <>
    <Button 
        type="primary" 
        onClick={handleLogOut}
        style={{fontWeight:'bolder'}}
    >
        {logOutLegend()}
    </Button>
    </>
)
}

export default LogOut