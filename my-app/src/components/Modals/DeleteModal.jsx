import React from 'react';
import {Modal, message} from 'antd';
import axios from 'axios'

const ConfirmModal = ({isModalVisible ,setIsModalVisible ,  getAllExpenses, getAllIncomes, operationDetails}) => {
 // console.log('ConfirmModal-usertails - 1', userdetails)
  const operationid =  'http://localhost:8080/api/admin/operations/' + operationDetails._id
  
 // console.log('ConfirmModal-bookdetails -2 ',userid)
 //const token = localStorage.getItem('Token') 

  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const handleOnDelete = async (hhh) => {
    //console.log('ModalConfirm-3 ',hhh)
    try{
      const response = await axios.delete(operationid)//,{headers: {Authorization: 'Bearer ' + token}});
      //validar que salio ok el delete para refrescar la tabla
      //console.log('despues de borrar',response)
      message.success('Operation succesfully deleted')
      if (operationDetails.operationType=='expense'){
      getAllExpenses()
      } else{
      getAllIncomes()
      }
      setIsModalVisible(false)
    } catch (error){
      message.error('Error at Operation Deletion: ' + error)
      throw error
    }
  } 
  return (
      <Modal title="Are you sure you want to delete this operation?" visible={isModalVisible} onOk={handleOnDelete} onCancel={handleCancel}>
        <h3 >{operationDetails.concept}</h3>
      </Modal>
  );
};

export default ConfirmModal;
