import { Link } from 'react-router-dom'
import logo from '../../assets/logoAdotePet.svg'
import ButtonNxt from '../../components/Button/Button'
import styles from './index.module.css'

export const Confirmation = () => {
    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema? <a href='' style={{ color: '#1F7BF4' }}><Link to="/Login">Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <div className={styles.enum}>
                        <h1>
                            Parabéns, sua conta foi <br></br>criada com sucesso!
                        </h1>
                        <p>
                            Nós da Animal Save ficamos muito felizes por ter a sua<br></br> colaboração e a sua vontade de nos ajudar na causa.
                        </p>
                        <p>
                            Sua conta será analisada por um de nossos<br></br> administradores, não se preocupe, assim que<br></br> concluirmos estaremos entrando em contato.
                        </p>
                    </div>
                    <div className={styles.creden}>
                        <ButtonNxt
                            title="Voltar ao inicio"
                            icon=''
                            link='' />
                    </div>
                </div>
            </section>
        </main>
    )
}