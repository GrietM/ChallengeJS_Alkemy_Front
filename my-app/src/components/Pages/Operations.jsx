/* LA IDEA SERIA ARMAR DIRECTAMENTE ESTA PAGINA Y QUE AHI TENGA:

1- BOTON DE AGREGAR OPERACION --> SE ABRE UN MODAL Y ME CARGA EL FORMULARIO, INDISTINTAMENTE 
DE QUE SEA GASTO O INGRESO

2- ABAJO RENDERIZAR TABLA DE OPERACIONES UTILIZANDO FILTROS PARA MOSTRAR INGRESOS O EGRESOS,
NUNCA MOSTRARLA COMPELTA. EN CAMBIO EN LA PAGINA HOME MOSTRARLA COMPLETA PERO CON 10 COMPONENTES COMO MAXIMO */
import React, { useEffect, useState } from 'react'
import { Radio, Button, message, Table } from 'antd';
//import OperationsForm from '../Form/Form';
import axios from 'axios'
import {DeleteOutlined , EditOutlined , PlusCircleOutlined} from '@ant-design/icons';
import MyPostModal from '../Modals/PostModal'
import GoToMain from '../GoToMain'

//import ConfirmModal from '../Modal/ConfirmModal'
//import EditModal from '../Modal/EditModal'



const Operations = () => {
  
    //const [users, setUsers] = useState([])
    //const [isModalVisible, setIsModalVisible] = useState(false);
    const token = localStorage.getItem('Token') 

    const [operationVisible, setOperationVisible] = useState(false)
    
    const openOperationModal = ()=>{
        setOperationVisible(true)
    }
    //const [ userdetails, setUsersdetails]  = useState({})
    if (token){
    return(
        <div>
        <br></br>
        <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openOperationModal} >New Operation</Button>
        <MyPostModal 
        operationVisible={operationVisible} 
        setOperationVisible={setOperationVisible} 
        //getAllUsers={getAllUsers} 
      />
        
        </div>
    )}
    else {
        message.error('Please Login to access this information. Redirecting to Login Page...', GoToMain)
        return null
    }}

export default Operations