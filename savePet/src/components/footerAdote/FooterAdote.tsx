import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import styles from './index.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Divider } from 'antd'


const handleClick = () => {
    alert("Obrigado por se inscrever!")
}

export const FooterAdote = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contato}>
                <h1 className={styles.contatoh}>Contato</h1>
            </div>
            <div className={styles.register}>
                <h2>Registre para receber<br></br> notificações e nóticias</h2>
                <div className={styles.subscribe}>
                    <input type="text" placeholder="Digite seu email" className={styles.email} />
                    <button className={styles.button} onClick={handleClick}>Inscrever</button>
                </div>
            </div>
            <div className={styles.navigations}>
                <div className={styles.links} >
                    <ul className={styles.itemNav}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Adotepet">Adote</Link></li>
                        <li><Link to="/">Serviços</Link></li>
                        <li><Link to="/">Sobre</Link></li>
                    </ul>
                </div>
                <div className={styles.icons}>
                    <FacebookLogo size={32} color="#dcdcdc" weight="fill" />
                    <TwitterLogo size={32} color="#dcdcdc" weight="fill" />
                    <InstagramLogo size={32} color="#dcdcdc" weight="bold" />
                    <YoutubeLogo size={32} color="#dcdcdc" weight="bold" />
                </div>
            </div>
            <div className={styles.infos}>
                <p>© 2021 SavePet. Todos os direitos reservados.</p>
                <img className={styles.logo} src={logo} alt="" />
                <div className={styles.terms}>
                    <p>Termos de uso</p>
                    <p>Politica de privacidade</p>
                </div>
            </div>
        </footer>
    )
}