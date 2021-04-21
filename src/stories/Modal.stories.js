import React, {useState} from 'react';
import Modal from '../components/Modal';
import { Button } from '../components/Button';

export default {
  title: 'Components/Custom Modal',
  component: Modal,
}

export const ModalView = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Modal
        show={showModal}
        close={setShowModal}
      >
        Prueba de modal
      </Modal>
      <Button
        onClick={()=> setShowModal(true)}
        label="Abrir Modal"
      />
    </div>
  )
}
