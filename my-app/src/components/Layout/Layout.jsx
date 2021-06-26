import React from 'react'
import '../Layout/Layout.css'
import { Layout, Menu} from 'antd';
import  {NavLink,  Routes, Route} from 'react-router-dom';
import {
    HomeOutlined,
    DollarOutlined,
    WalletOutlined,
    UserOutlined
  } from '@ant-design/icons';
import LogOut from '../LogOut/LogOut';
import Expenses from '../Pages/Expenses';
import Incomes from '../Pages/Incomes';
import Login from '../Login/Login'
import logo from '../../images/logo6.png'
//import Balance from '../../components/Balance/Balance'
import Home from '../Pages/Home';
//import OperationsTable from '../OperationsTable/OperationsTable';
//import Operations from '../Operations';
import Error404 from '../Pages/Error404';

const jwt = require ('jsonwebtoken');

const { Header, Content, Footer } = Layout;

const token = localStorage.getItem('Token')

const loginLegend = () => {
    if (token){
        let decoded = jwt.verify(token, 'AlkemyChallengeJS')
        return decoded.userName}
    else {
        return ("Login")
    }
    }


const MyLayout = () =>{
    return (
    <Layout className="layout">
        <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item className="item" key="5" >
                <div className='logo' style={{alignContent:'center'}}>
                <img src={logo}/>
                </div>       
            </Menu.Item>
            <Menu.Item className="item" key="0" icon={<UserOutlined/>}>
                <NavLink to="/"  style= {{fontWeight:'bolder'}}>
                {loginLegend()}
                </NavLink>          
            </Menu.Item>
            <Menu.Item className="item" key="1" icon={<HomeOutlined />}>
                <NavLink to="/Home"  style= {{fontWeight:'bolder'}}>
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item className="item" key="2" icon={<DollarOutlined />}>
                <NavLink to="/Incomes"  style= {{fontWeight:'bolder'}}>
                    Incomes
                </NavLink>
            </Menu.Item>
            <Menu.Item className="item" key="3" icon={<WalletOutlined />}>
                <NavLink to="/Expenses"  style= {{fontWeight:'bolder'}}>
                    Expenses
                </NavLink>
            </Menu.Item>
            {/* <Menu.Item className="item" key="4" icon={<PlusCircleOutlined/>}>
                <NavLink  to="/Operations"  style= {{fontWeight:'bolder'}}>
                    Add
                </NavLink>
            </Menu.Item> */}
            <Menu.Item className='logOut'>
                <LogOut/>
            </Menu.Item>
            
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
           
            <Routes>
            <Route exact path="/" element= {<Login/>} />  
            <Route exact path="/Home" element= {<Home/>} />      
            <Route exact path="/Incomes" element= {<Incomes/>} />   
            <Route exact path= "/Expenses" element = {<Expenses/>}/>     
            <Route exact path="*" element= {<Error404/>} /> 
            </Routes>
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Marcela Griet</Footer>
    </Layout>
)
}


export default MyLayout