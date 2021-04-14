import React from 'react';
import { Container, Content } from "./styles";

interface pagesProps {
    setHomeOpenning: () => void;
    setAboutOpenning: () => void;
    setContactOpenning: () => void;
}

export function Header({ setAboutOpenning, setHomeOpenning, setContactOpenning } : pagesProps) {
    return(
        <Container>
            <Content>
                <div className="logo"><p>Iago</p></div>

                <div className="menu">
                    <ul>
                        <li><button type="button" onClick={setHomeOpenning}>Menu</button></li>
                        <li><button type="button" onClick={setAboutOpenning}>About</button></li>
                        <li><button type="button" onClick={setContactOpenning} >Contato</button></li>
                    </ul>
                </div>
                

            </Content>
        </Container>
    )
}
