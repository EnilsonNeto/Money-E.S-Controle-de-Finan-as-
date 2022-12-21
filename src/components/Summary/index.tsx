import React from "react";
import { Container } from "./style";
import positivo  from '../../assets/positivo.svg';
import negativo from '../../assets/negativo.svg';
import cifrao from '../../assets/cifrao.svg';
import { useTransactions } from "../../Hooks/useTransactions";
export function Summary () {
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={positivo} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}
                
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={negativo} alt="Saidas" />
                </header>
                <strong> - 
                 {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="background-green">
                <header>
                    <p className="total">Total</p>
                    <img src={cifrao} alt="total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}