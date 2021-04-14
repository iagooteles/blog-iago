import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;

    margin: 8rem auto;
    text-align: center;
    background: var(--sourLemon);
    color: var(--american-river);
    padding: 8rem 8rem;
    border-radius: 2rem;

    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 1140px) {
        margin: 8rem 4rem;
    }
    @media (max-width: 540px) {
        margin: 8rem 2rem;
    }

    hr.hr1 {
        overflow: visible;
        height: 30px;
        border-style: solid;
        border-color: black;
        border-width: 1px 0 0 0;
        border-radius: 20px;
        margin-bottom: 1rem;
    }

    hr.hr1:before {
        display: block;
        content: "";
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: black;
        border-width: 0 0 1px 0;
        border-radius: 20px;
    }
    
    
    h1{ 
        margin-bottom: 2rem;
        font-size: 2rem;
        letter-spacing: 2px;
    }
    
    ul { 
        list-style-type: none;
        display: flex;
        flex-direction: column;

        text-align: left;
        justify-content: center;
        align-content: center;

        li {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            

            .icon {
                margin-bottom: -5px;
                transition: all .25s ease-in-out;

                :hover {
                    opacity: 0.8;
                    color: var(--carrot);
                }
            }
        }
    }
`



