import Header from "../../components/layout/Header/Header"
import Nav from "../../components/layout/Nav/Nav"
import Carousels from "../../components/Carousels/Carousels"
import Footer from "../../components/layout/Footer/Footer"

const Home = () => {
  return (
    <div>
        <Nav />
        <Carousels />
        <Header />
        <Footer />
    </div>
  )
}

export default Home