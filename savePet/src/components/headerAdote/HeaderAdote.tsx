import styles from './index.module.css'
import logoAdotePet from '../../assets/logoAdotePet.svg'
import seta from '../../assets/seta.svg'
import { Link } from 'react-router-dom'

export const HeaderAdote = () => {
    return(
        <header className={styles.header}>       
            <div className={styles.img_container}>
                <Link to="/">
                <img className={styles.seta} src={seta} alt="seta para voltar a pagina" />
                </Link>
                <img className={styles.imgAdotePet} src={logoAdotePet} alt="logo do animal save" />
            </div>         
        <button className={styles.button}>Login</button>
        </header>
    )
}
