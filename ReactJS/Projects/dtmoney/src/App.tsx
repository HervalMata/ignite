import React, {useState} from 'react';
import { GlobalStyle } from './styles/global';
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {NewTransactionModal} from "./components/NewTransactionModal";
// @ts-ignore
import { TransactionProvider }from './hooks/TransactionContext.tsx';

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }
  return (
      <TransactionProvider>
          <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
          <Dashboard />
          <NewTransactionModal
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal} />
          <GlobalStyle />
      </TransactionProvider>
  );
}
