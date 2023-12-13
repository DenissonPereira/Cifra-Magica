import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Listas from '../pages/Listas/Listas';
import About from '../pages/About/About';

function RoutesApp() {
    return ( 
        <Routes >
            <Route path='/Cifra-Magica' element={<Home />} />
            <Route path='/Cifra-Magica/listas' element={<Listas />} />
            <Route path='/Cifra-Magica/about' element={<About />} />
        </Routes>
     );
}

export default RoutesApp;