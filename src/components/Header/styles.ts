import styled from "styled-components";

export const Container = styled.header`
    background: var(--sourLemon);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
    max-width: 1820px;
    margin: 0 auto;

    padding: 1rem 1rem 1rem;
    display: flex;

    align-items: space-around;
    justify-content: space-between;

    .logo { 
        font-size: 2rem;
        font-family: 'EB Garamond', serif;
        letter-spacing: 2px;
    }

    p {         
        text-decoration: none;
        color: var(--american-river);

        transition: all .25s ease-in-out;
        :hover {
            opacity: 0.8;
            cursor: default;
            color: var(--carrot);
        }
    }

    ul { 
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style-type: none;

        li{
            margin: 0 0.5rem;
        }

        button {
            font-size: 2rem;
            font-family: 'EB Garamond', serif;
            letter-spacing: 1.5px;
            border: none;
            color: var(--american-river);

            background-color: var(--sourLemon);

            transition: all .35s ease-in-out;

            :hover {
                cursor: pointer;
                color: var(--carrot);
                opacity: 0.8;
            }
        }
    }
`;

