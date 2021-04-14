import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;

    margin: 8rem auto;
    text-align: left;
    background: var(--sourLemon);
    color: var(--american-river);
    padding: 3rem 4rem;
    border-radius: 2rem;

    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 1140px) {
        margin: 8rem 4rem;
    }
    @media (max-width: 540px) {
        margin: 8rem 2rem;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 0.9rem;
    }
`
