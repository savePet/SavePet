import './App.css'
import logoPage from '../../assets/logoPage.svg'
import { Link } from 'react-router-dom'


function App() {

  return (
    <>
      <section className='home'>
        <div className='navBar'>
          <div >
            <img src={logoPage} className='logo' alt="" />
          </div>
          <div >
            <ul className='itemNav'>
              <li>
                <Link to="/Adotepet">
                <button>
                  <a href="">Adote</a>
                </button>
                </Link>
              </li>
              <li>
                <button>
                  <a href="">Conheça</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="">Contato</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="">Login</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='content'>
          <h1>AJUDE QUEM ESTA LA <br></br> SEMPRE POR VOCÊ</h1>
          <button style={{marginTop:"2%"}}>
            <a href="">Conheça</a>
          </button>
        </div>
      </section>

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
