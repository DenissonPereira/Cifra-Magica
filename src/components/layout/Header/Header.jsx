import Buscador from '../../Buscador/Buscador'

import './Header.sass'
import './HeaderResponsivo.sass'

const Header = () => {
  return (
    <div className="header">
        <div className="buscador">
            <Buscador />
        </div>
    </div>
  )
}

export default Header