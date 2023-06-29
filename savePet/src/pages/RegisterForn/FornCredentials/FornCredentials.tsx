import { Input } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logoAdotePet.svg'
import ButtonNxt from '../../../components/Button/Button'
import styles from './index.module.css'
import { CheckCircle, NumberCircleThree, NumberCircleTwo } from '@phosphor-icons/react'

export const FornCredentials = () => {
    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />

                <div className={styles.roadmap}>
                    <div className={styles.item}>
                        <CheckCircle size={32} color="#1f7bf4" weight="duotone" />
                        <p>Tipo de colaboração</p>
                    </div>
                    <div className={styles.item}>
                        <NumberCircleTwo size={32} color="#1f7bf4" />
                        <p style={{ color: '#1f7bf4' }}>Informações</p>
                    </div>
                    <div className={styles.item}>
                        <NumberCircleThree size={32} color="#1f7bf4" />
                        <p>Localização e produto</p>
                    </div>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema? <a href='' style={{ color: '#2E920A' }}><Link to="/Login">Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <div className={styles.enum}>
                        <h1>
                            Informação do fornecedor
                        </h1>
                        <p>
                            Informe os detalhes
                        </p>
                    </div>
                    <div className={styles.creden}>
                        <Input className={styles.input} placeholder='Nome' />
                        <Input className={styles.input} placeholder='Cnpj' />
                        <p>A senha é usada para entrar na conta junto com o <br></br>e-mail cadastrado</p>
                        <Input.Password className={styles.input} placeholder='senha' />
                        <Input.Password className={styles.input} placeholder='Confirme a senha' />
                        <div className={styles.nav}>
                            <a href="Count" className={styles.a}>voltar</a>
                            <ButtonNxt
                                title="Próximo"
                                icon=''
                                link='FornInfo' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}