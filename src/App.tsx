import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from "./components/Header"
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal() {
      setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
      setIsNewTrasactionModalOpen(false);
  }
 
  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>
    <Dashboard />
    <Modal isOpen={isNewTrasactionModalOpen} 
                onRequestClose= {handleCloseNewTrasactionModal}
                >
                    <h2>Cadastrar Transação</h2>
                </Modal>

    <GlobalStyle/>
    </>
  );
}