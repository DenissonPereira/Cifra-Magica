import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes/routes'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
   <BrowserRouter>
    <RoutesApp />
   </BrowserRouter>
  )
}

export default App