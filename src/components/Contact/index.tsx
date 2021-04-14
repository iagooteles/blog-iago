import { Container } from "./styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export function Contact() {
    return (
        <Container>
            <h1>Redes e contatos</h1>
            <hr className="hr1" />
            <ul>
                <li><InstagramIcon className="icon" /> Instagram: iagooteles</li>
                <li><EmailIcon className="icon" /> Email: iagooteles@gmail.com</li>
                <li><GitHubIcon className="icon" /> Github: <a href="https://github.com/iagooteles">https://github.com/iagooteles</a> </li>
                <li><FacebookIcon className="icon" /> Facebook: <a href="https://www.facebook.com/IagoTeles/">https://www.facebook.com/IagoTeles/</a> </li>
            </ul>
        </Container>
    );
}