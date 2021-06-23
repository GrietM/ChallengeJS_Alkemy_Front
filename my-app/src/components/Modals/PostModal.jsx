import React, { useEffect, useState } from 'react'
import { Modal , Button, Form , Input, message, Radio, Col , Row, DatePicker, Select} from 'antd'
import axios from 'axios'
import Password from 'antd/lib/input/Password'


const { Item } = Form
const { Group } = Radio
const MyPostModal = ({operationVisible, setOperationVisible , getAllOperations}) => {
    
    const token = localStorage.getItem('Token')
    const [formedit] = Form.useForm()
   
    const closeOperationModal = ()=>{
        setOperationVisible(false)
    }
 
    const saveModal = async (newoperation)=>{
        try{ 
            console.log("por grabar ==", newoperation)
            const response = await axios.post('http://localhost:8080/api/admin/operations/', newoperation,{headers: {Authorization: 'Bearer ' + token}});
            //console.log("post de usuario-response",response)
            message.success("Operation succesfully created")
            closeOperationModal()
           // getAllOperations()
        } catch (error) {
            message.error("Fallo la Grabacion del usuario - Error:"  + error)
            throw error
        }
    }
    
    const formSuccess =(newoperation) =>{
        saveModal(newoperation)
    } 
    const formFailed =(error) =>{
        message.error("ERROR en los datos. No cumplen las validaciones que se muestran en rojo")
    } 

    /* const [value, setValue] = useState("admin")
    const onChange =e=>{
        console.log('value', value)
        console.log('e.target.value', e.target.value)
        setValue(e.target.value)
    }
 */
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
           {/*   <Item label="Tipo" 
                name="type" 
                rules={[{ required: true, message: 'Seleccione el TIPO de usuario' }]}
            >
                <Group noStyle onChange={onChange} value={value} name="radioButton" >
                    <Radio value={"admin"}>Administrador</Radio>
                    <Radio value={"visitor"}>Visita</Radio>
                </Group>
            </Item> */}
            <Item label="Concept" 
                name="concept" 
                rules={[{ required: true, message: 'Ingrese el NOMBRE (max:20)' , max:20 }]}
                
            >
                <Input/>
            </Item>
            <Item label="Amount" 
                name="amount" 
                rules={[{ required: true, message: 'Ingrese el APELLIDO (max:20)' , max:20}]}
                
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