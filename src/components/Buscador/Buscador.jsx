import { useEffect, useRef, useState } from 'react';
import palavrasChaves from '../../scripts/palavras';
import './Buscador.sass';

const Buscador = () => {
    const [key, setKey] = useState('');

    const pesquisar = () => {
        const searchInput = document.getElementById('searchInput');
        const keyword = searchInput.value.toLowerCase();

        if (palavrasChaves[keyword]) {
            const novaAba = window.open('', '_blank');
            novaAba.location.href = palavrasChaves[keyword];
        } else {
            alert('Cifra ou palavra-chave não encontrada!');
        }
    };

    const meuBotaoRef = useRef();

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.key === 'Enter' && meuBotaoRef.current) {
                meuBotaoRef.current.click();
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []); 

    return (
        <div className='buscador_principal'>
            <p>CIFRA <span className='magica'>Mágica</span></p>
            <div className='buscar'>
                <input
                    title='Pesquise cifras aqui'
                    type='search'
                    id='searchInput'
                    className='barra_pesquisa'
                    placeholder='     Pesquisar cifras...'
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <button
                    title='Ir'
                    className='btn_ir'
                    id='meuBotao'
                    ref={meuBotaoRef} 
                    onClick={pesquisar}
                >Ir</button>
            </div>
        </div>
    );
};

export default Buscador;
