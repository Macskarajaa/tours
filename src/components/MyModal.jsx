import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const MyModal = ({open, setOpen, id, image, info}) => {

   

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal className="m-0" open={open} onClose={onCloseModal} center>
       <img src={image} alt="" />
       {info}
       
      </Modal>
    </div>
  );
};



