import { useState } from "react"


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

  return (
    <div>
        <hr />
        <p>INTRODUÇÃO: {acordes[0]} {acordes[1]} {acordes[2]} {acordes[4]} </p>
        <br />
        <p>{acordes[0]}</p>
        <p>Dolores flor morena de Madri</p>
        <p>{acordes[1]}</p>
        <p>Poema de meu cântico espanhol</p>
        <p>{acordes[2]}</p>
        <p>Foi noiva de um toureiro que tombou</p>
        <p>{acordes[3]}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acordes[4]}</p>
        <p>Em uma tarde de sol</p>
        <br />
        <p>{acordes[0]}</p>
        <p>Tu bailas na minha alma como louca</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{acordes[5]}</p>
        <p>De castanholas e mantilha</p>
        <p>{acordes[3]}</p>
        <p>O um beijo teu na minha boca</p>
        <p>{acordes[5]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {acordes[0]}</p>
        <p>Sob um luar de Sevilha</p>
        <hr />
        <button onClick={trocarTom}>1/2 Tom</button>
        <button onClick={originalTom}>Original</button>
    </div>
  )
}

export default Doloresmusics