import React, {useState} from 'react';
import Modal from "./components/Modal";
import { Button } from "./components/Button";
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Modal
        show={showModal}
      >
        <h1>Prueba del modal</h1>
        <Button
          onClick={()=>setShowModal(false)}
          label="Cierre portal"
        />
      </Modal>
      <Button
        label="Abrir Modal"
        onClick={()=>{
          setShowModal(!showModal)
        }}
      />
    </>
  );
}

export default App;
