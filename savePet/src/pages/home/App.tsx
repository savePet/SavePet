import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FooterAdote } from '../../components/footerAdote/FooterAdote'
import { GridHome } from '../../components/gridHome'


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
                <button style={{backgroundColor:"#306992"}}>
                  <a href="">ADOTE</a>
                </button>
                </Link>
              </li>
              <li>
                <button style={{ backgroundColor: "#306992" }}>
                  <a href="">CONHEÇA</a>
                </button>
              </li>
              <li>
                <button style={{ backgroundColor: "#63A7dc" }}>
                  <a href="">CONTATO</a>
                </button>
              </li>
              <li>
                <button style={{ backgroundColor: "#E6AD4A" }}>
                  <a href="">LOGIN</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content}>
          <h1>AJUDE QUEM ESTA LA <br></br> SEMPRE POR VOCÊ</h1>
          <button style={{ marginTop: "2%", backgroundColor:"#306992", padding: "7px 30px"}}>
            <a href="">CONHEÇA</a>
          </button>
        </div>
      </section>
      <GridHome />
      {/* <FooterAdote /> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    </>
  )
}

export default App
