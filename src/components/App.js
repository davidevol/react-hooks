import { Card } from 'primereact/card';
import Accordion from './Accordion'

const itens = [
    {
    titulo: "Java",
    conteudo: "Linguagem compilada e interpretada."
    },
    {
    titulo: "Python",
    conteudo: "Linguagem interpretada e dinamicamente tipada."
    },
    {
    titulo: "Javascript",
    conteudo: "Interpretada. Executa do lado do cliente e do lado do servidor também."
    }
    ]
const App = () => {
    return (
        <Accordion itens={itens}/>
    )
}

export default App