import React from 'react';
import {Modal, message} from 'antd';
import axios from 'axios'

const ConfirmModal = ({isModalVisible ,setIsModalVisible ,  getAllExpenses, getAllIncomes, operationDetails}) => {
 
  const operationid =  'http://localhost:8080/api/operations/' + operationDetails._id
  const token = localStorage.getItem('Token') 

  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const handleOnDelete = async (hhh) => {
    try{
      await axios.delete(operationid,{headers: {Authorization: 'Bearer ' + token}});
      message.success('Operation succesfully deleted')
      if (operationDetails.operationType ==='expense'){
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
