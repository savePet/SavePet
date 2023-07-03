import styles from './index.module.css'

import logo from '../../../assets/logoAdotePet.svg'
import dog from '../../../assets/dogRegister.png'
import { Link } from 'react-router-dom'
import { Input } from 'antd'
import ButtonGroup from 'antd/es/button/button-group'
import ButtonNxt from '../../../components/Button/Button'

export const RegisterAuth = () => {
    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema?<a href='' style={{ color: '#2E920A' }}><Link to="/Login"> Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <div className={styles.enum}>
                        <h1>
                            Seja um colaborador
                        </h1>
                        <p>
                            Conclua o cadastro para poder ser um<br></br> dos nossos parceiros
                        </p>
                    </div>
                    <div className={styles.creden}>
                        <Input className={styles.input} placeholder='Digite seu E-mail' />
                        <Input className={styles.input} placeholder='Digite seu telefone para contato' />
                        <ButtonNxt
                            title="Próximo"
                            icon=''
                            link='Count'
                        ></ButtonNxt>
                    </div>
                </div>
            </section>
        </main>
    )
}
