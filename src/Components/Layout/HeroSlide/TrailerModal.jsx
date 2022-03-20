import { Modal } from '@mui/material';
import React from 'react';
import ModalContent from '../../common/Modal';

function TrailModal({ item }) {
  return (
    <Modal open={open} id={`modal_${item.id}`}>
      <ModalContent>
        <iframe width='100%' height='500px' title='trailer'></iframe>
      </ModalContent>
    </Modal>
  );
}

export default TrailModal;
