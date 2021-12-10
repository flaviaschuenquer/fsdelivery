import './styles.css'
import { ReactComponent as MainImage } from './main1.svg'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br /> que entregamos <br /> para você!
            </h1>
            <h3 className="home-subtitle">
              Faça sua comprar ou solicite o serviço, <br /> que em pouco tempo
              atenderemos você.
            </h3>
            <Link to="/orders" className="home-btn-order">
              FAZER PEDIDO
            </Link>
          </div>
          <div>
            <div className="home-image">
              <MainImage />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home
