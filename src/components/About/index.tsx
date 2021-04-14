import { Container } from "./styles";


export function About() {
    return (
        <Container>
            <div>
                <p>Meu nome é Iago, tenho 25 anos, sou de Fortaleza-CE.</p>
                <p>Estudo programação há mais de 2 anos, tenho conhecimento em html, css, JavaScript, jquery, no momento usando React e styled components para alguns projetos pessoais/portifólio.</p>
                <p>Na parte mais back-end eu uso: Node, express, ejs, mongo, mongoose..</p>
                <p>Sei usar Api's, git, github.</p>
                <p>Tenho vários projetos finalizados, alguns ainda não estão na minha página no Github, você pode encontrar o link do meu Github na aba "Contato" ou clicando <a href="https://github.com/iagooteles">aqui</a>.</p>
                <p>Pretendo cursar sistemas de informação, continuar estudando python e no futuro estudar alguma linguagem mais voltada para o desenvolvimento de jogos.</p>
            </div>
        </Container>
    );
}