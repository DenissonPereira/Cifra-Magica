import { useState } from "react"
import "./DoloresResponsivo.sass";


const Doloresmusics = () => {
    const [acordes, setAcordes] = useState(['Dm', 'C', 'Bb', 'Gm', 'A', 'A7']);

    const trocarTom = () => {
        const novosAcordes = ['D#m', 'C#', 'B', 'G#m', 'A#', 'A#7'];

        setAcordes(novosAcordes);

    };

    const originalTom = () => {
        const acordes = ['Dm', 'C', 'Bb', 'Gm', 'A', 'A7'];
        setAcordes(acordes);
    };

    const baixarTom = () => {
        const acordes = ['C#m', 'B', 'A', 'F#m', 'G#', 'G#7'];
        setAcordes(acordes);
    };

  return (
    <div className="cancaoDolores">
        <div className="botoes">
            <button onClick={baixarTom}>-1/2 Tom</button>
            <button onClick={originalTom}>Original</button>
            <button onClick={trocarTom}>1/2 Tom</button>
        </div>
        <hr />
        <p className="acordes"><span className="tom">TOM:</span> {acordes[0]} </p>
        <br />
        <p>INTRODUÇÃO: <span className="intro">{acordes[0]} {acordes[1]} {acordes[2]} {acordes[4]}</span> </p>
        <br />
        <p>[Primeira Parte]</p>
        <br />
        <p className="acordes">{acordes[0]}</p>
        <p>Dolores flor morena de Madri</p>
        <p className="acordes">{acordes[1]}</p>
        <p>Poema de meu cântico espanhol</p>
        <p className="acordes">{acordes[2]}</p>
        <p>Foi noiva de um toureiro que tombou</p>
        <p className="acordes">{acordes[3]}</p>
        <p className="acordes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acordes[4]}</p>
        <p>Em uma tarde de sol</p>
        <br />
        <p className="acordes">{acordes[0]}</p>
        <p>Tu bailas na minha alma como louca</p>
        <p className="acordes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acordes[5]}</p>
        <p>De castanholas e mantilha</p>
        <p className="acordes">{acordes[3]}</p>
        <p>O um beijo teu na minha boca</p>
        <p className="acordes">{acordes[5]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {acordes[0]}</p>
        <p>Sob um luar de Sevilha</p>
        <p className="acordes">{acordes[3]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {acordes[4]}</p>
        <p>Ai do teu amor quero a centelha</p>
        <p className="acordes">{acordes[0]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {acordes[4]}</p>
        <p>Ai do teu olhar que tanto brilha</p>
        <br />
        <p className="acordes">{acordes[5]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {acordes[0]}</p>
        <p>Dou-te uma rosa vermelha</p>
        <p className="acordes">{acordes[1]} &nbsp;&nbsp;{acordes[2]} &nbsp;&nbsp;{acordes[4]} &nbsp;&nbsp;</p>
        <p>Oh, oh, oh</p>
        <p className="acordes">{acordes[0]} &nbsp;&nbsp;{acordes[1]} &nbsp;&nbsp;{acordes[2]} &nbsp;&nbsp;{acordes[4]}</p>
        <p>Oh, oh, oh</p>
        <hr />
        <br />
        <div className="composicao">
            <p>Composição: Anísio Silva</p>
            <p>Colaboração e revisão da cifra: Denisson Pereira</p>
        </div>
        <br />

    </div>
  )
}

export default Doloresmusics