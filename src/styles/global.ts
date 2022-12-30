import { createGlobalStyle } from 'styled-components';

export const GlobalStyle  = createGlobalStyle `
    :root {
        --background1: #F5FAFA;
        --red: #E52E4d;
        --purple: #7110CC;
        --purple-dark: #390353;
        --purple-light: #7307A7;

        --text-title: #353F5F;
        --text-body: #969CB3;

        --background2: F0F2F5;
        --shape: #E3E2F7;    
    
        --green: #007327;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 180px) {
            font-size: 93.75%; //15px
        }
       
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
      background :var (--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
    }

    h1 , h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;

    }


    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay {
        background : rgba(0, 0 , 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background1);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        opacity: 0.5;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.2);
        }
    }
`;