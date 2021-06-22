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
import MyModal from '../Modals/Modal'
//import ConfirmModal from '../Modal/ConfirmModal'
//import EditModal from '../Modal/EditModal'
//import GoToMain from '../GoToMain'


const Operations = () => {
  
    //const [users, setUsers] = useState([])
    //const [isModalVisible, setIsModalVisible] = useState(false);
        
    const [operationVisible, setOperationVisible] = useState(false)
    
    const openOperationModal = ()=>{
        setOperationVisible(true)
    }
    //const [ userdetails, setUsersdetails]  = useState({})

    return(
        <div>
        <br></br>
        <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openOperationModal} >New Operation</Button>
        <MyModal 
        operationVisible={operationVisible} 
        setOperationVisible={setOperationVisible} 
        //getAllUsers={getAllUsers} 
      />
        <br></br>
        <br></br>
        <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Income</Radio>
            <Radio value={2}>Expense</Radio>
        </Radio.Group>
        </div>
    )}

export default Operations