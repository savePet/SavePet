import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FooterAdote } from '../../components/footerAdote/FooterAdote'
import { GridHome } from '../../components/gridHome'
import { About } from '../../components/About/About'


function App() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.navBar}>
          <div >
            <img src={logo} className={styles.logo} alt="" />
          </div>
          <div >
            <ul className={styles.itemNav}>
              <li>
                <Link to="/Adotepet">
                  <button style={{ backgroundColor: "#306992" }}>
                    ADOTE
                  </button>
                </Link>
              </li>
              <li>
                <a href="">
                  <button style={{ backgroundColor: "#306992" }}>
                    CONHEÇA
                  </button>
                </a>
              </li>
              <li>
                <a href="">
                  <button style={{ backgroundColor: "#306992" }}>
                    CONTATO
                  </button>
                </a>
              </li>
              <li>
                <Link to="/Login">
                  <button style={{ backgroundColor: "#E6AD4A" }}>
                    LOGIN
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div >
        <div className={styles.content}>
          <h1>AJUDE QUEM ESTA LA <br></br> SEMPRE POR VOCÊ</h1>
          <button style={{ marginTop: "2%", backgroundColor: "#306992", padding: "7px 30px" }}>
            <a href="">CONHEÇA</a>
          </button>
        </div>
      </section >
      <GridHome />
      <About />
      <FooterAdote />
    </>
  )
}

export default App
