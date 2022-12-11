import React  from 'react';
import Modal from 'react-modal';
import positImg from '../../assets/positivo.svg';
import negatImg from '../../assets/negativo.svg';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/x.svg';

interface NewTransactioModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactioModalProps) {
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder='Título'/>

            <input placeholder='Valor' type="number" />

            <TransactionTypeContainer>

                <button type='button'>
                    <img src={positImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>

                <button type='button'>
                    <img src={negatImg} alt="Saida" />
                    <span>Saida</span>
                </button>

            </TransactionTypeContainer>

            <input placeholder='Categoria'/>

            <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    );
}