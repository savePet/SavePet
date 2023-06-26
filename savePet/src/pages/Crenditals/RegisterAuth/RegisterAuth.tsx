import styles from './index.module.css'

import logo from '../../../assets/logoAdotePet.svg'
import { Link } from 'react-router-dom'
import { Input } from 'antd'

export const RegisterAuth = () => {
    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema?<a href='' style={{ color: '#1F7BF4' }}><Link to="/Login"> Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <div>
                        <h1>
                            Seja um colaborador
                        </h1>
                        <p>
                            Conclua o cadastro para poder ser um<br></br> dos nossos pareceiros
                        </p>
                    </div>
                    <div>
                        <Input placeholder='Digite seu E-mail' />
                        <Input placeholder='Digite seu telefone para contato' />
                    </div>
                </div>
            </section>
        </main>
    )
}
