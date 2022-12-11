import React  from 'react';
import Modal from 'react-modal';

interface NewTransactioModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactioModalProps) {
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        >
            <h2>Cadastrar Transação</h2>
        </Modal>

    );
}