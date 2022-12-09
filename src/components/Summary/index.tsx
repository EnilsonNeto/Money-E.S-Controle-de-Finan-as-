import React from "react";
import { Container } from "./style";
import positivo  from '../../assets/positivo.svg';
import negativo from '../../assets/negativo.svg';
import cifrao from '../../assets/cifrao.svg';
export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={positivo} alt="Entradas" />
                </header>
                <strong>R$1200,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={negativo} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="background-green">
                <header>
                    <p>Total</p>
                    <img src={cifrao} alt="total" />
                </header>
                <strong>R$700,00</strong>
            </div>
        </Container>
    )
}