import Violao from '../../../assets/images/back.jpg'
import Buscador from '../../Buscador/Buscador'

import './Header.sass'
import './HeaderResponsivo.sass'

const Header = () => {
  return (
    <div className="header">
        <img src={Violao} alt="" />
        <div className="buscador">
            <Buscador />
        </div>
    </div>
  )
}

export default Header