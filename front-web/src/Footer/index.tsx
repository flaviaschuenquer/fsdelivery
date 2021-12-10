import './styles.css'
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
  return (
    <footer className="main-footer">
      Todos os direitos reservados a Flávia Schuenquer
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_new">
          <YouTubeIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/fl%C3%A1via-schuenquer-57a5b3154/"
          target="_new"
        >
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/flaviaschuenquer/">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}
export default Footer
