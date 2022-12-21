import React, { FormEvent, useState}  from 'react';
import Modal from 'react-modal';
import positImg  from '../../assets/positivo.svg';
import negatImg from '../../assets/negativo.svg';
import { Container, TransactionTypeContainer, Radiobox } from './styles';
import closeImg from '../../assets/x.svg';
import { useTransactions } from '../../Hooks/useTransactions';

interface NewTransactioModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTransactioModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0); 
    const [category, setCategory] = useState(''); 
    const [type , setType] = useState ('deposit');
    
    
    async function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault();

        await createTransaction ({
            title,
            amount,
            category,
            type
        })
        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    
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

            <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input 
            placeholder='Título'
            value={title}
            onChange={event => setTitle(event.target.value)} 
            />

            <input 
            placeholder='Valor' 
            type="number"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))} />

            <TransactionTypeContainer>

                <Radiobox 
                type="button"
                isActive = {type === 'deposit'}
                onClick={() => { setType('deposit');}}
                activeColor = "green"
                >
                    <img src={positImg} alt="Entrada" />
                    <span>Entrada</span>
                </Radiobox>

                <Radiobox 
                type="button"
                isActive = {type === 'withdraw'}
                onClick={() => { setType('withdraw');}}
                activeColor = "red"
                >
                    <img src={negatImg} alt="Saida" />
                    <span>Saida</span>
                </Radiobox>

            </TransactionTypeContainer>

            <input 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)} 
            />

            <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    );
}