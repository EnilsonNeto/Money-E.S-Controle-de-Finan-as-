import styled from "styled-components";


export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    
    p {
        font-weight: 600;
        color: var(--purple-dark);
        text-transform: uppercase;
    }
    
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.background-green {
            background: var(--green);
            color: white;
        }

   
    header{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 600;
        line-height: 3rem;
    }
}
`;