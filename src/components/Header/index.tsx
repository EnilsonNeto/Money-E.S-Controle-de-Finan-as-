import React, { useState } from "react"
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'
export function Header() {
    const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

    function handleOpenNewTrasactionModal() {
        setIsNewTrasactionModalOpen(true);
    }

    function handleCloseNewTrasactionModal() {
        setIsNewTrasactionModalOpen(false);
    }

    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Money ES" />
                <button type="button">
                    Nova Transação
                </button>

                <Modal isOpen={isNewTrasactionModalOpen}>
                    <h2>Cadastrar Transação</h2>
                </Modal>
           </Content>
        </Container>
    )
}