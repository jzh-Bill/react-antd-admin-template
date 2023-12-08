import { Modal, Button} from 'antd';
import React from 'react';

const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: 'Do you want to delete this table?',
      content: '',
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() { },
    });
  }

const PopModalDeleteTable = () => {
  return (
    <Button type="danger" onClick={showConfirm.bind()}>Delete</Button>
  )
}


export default PopModalDeleteTable;