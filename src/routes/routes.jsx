import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Listas from '../pages/Listas/Listas';
import About from '../pages/About/About';
import Bandaraiosolar from '../components/sounds/pages/BandaRaioSolar/page/Bandaraiosolar';
import Dolores from '../components/sounds/pages/BandaRaioSolar/sounds/Dolores/Dolores';

function RoutesApp() {
    return ( 
        <Routes >
            <Route path='/Cifra-Magica' element={<Home />} />
            <Route path='/Cifra-Magica/listas' element={<Listas />} />
            <Route path='/Cifra-Magica/about' element={<About />} />
            <Route path='/Cifra-Magica/listas/bandaraiosolar' element={<Bandaraiosolar />} />
            <Route path='/Cifra-Magica/listas/bandaraiosolar/dolores' element={<Dolores />} />
        </Routes>
     );
}

export default RoutesApp;