import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/home';
import Listas from '../pages/Listas/listas';
import About from '../pages/about/about';

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