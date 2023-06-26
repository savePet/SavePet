import { Input } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logoAdotePet.svg'
import ButtonNxt from '../../../../components/Button/Button'
import styles from './index.module.css'
import { CheckCircle, Info, NumberCircleThree } from '@phosphor-icons/react'

export const ProtectorP2 = () => {
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
                        <CheckCircle size={32} color="#1f7bf4" weight="duotone" />
                        <p >Informações da protetora</p>
                    </div>
                    <div className={styles.item}>
                        <NumberCircleThree size={32} color="#1f7bf4" />
                        <p style={{ color: '#1f7bf4' }}>Localização e disponibilidade</p>
                    </div>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema? <a href='' style={{ color: '#1F7BF4' }}><Link to="/Login">Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <div className={styles.enum}>
                        <h1>
                            Localização e Disponibilidade
                        </h1>
                        <p>
                            Informe os dados de Localização e a <br></br> disponibilidade de acolhimento.
                        </p>
                    </div>
                    <div className={styles.creden}>
                        <Input className={styles.input} placeholder='Endereço' />
                        <div className={styles.hours}>
                            <div style={{ marginRight: '40px' }}>
                                <label htmlFor="Input" >Capacidade de acolhimento</label>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                                    <Input type='number' min={0} className={styles.inputCount} />
                                    <Info size={32} color="#737373" weight="light" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Input" >Horario Disponivel</label>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                    <Input type='number' min={0} max={23} className={styles.inputh} />
                                    <label htmlFor="">à</label>
                                    <Input type='number' min={0} max={23} className={styles.inputh} />
                                    <Info size={32} color="#737373" weight="light" />
                                </div>

                            </div>
                        </div>
                        <div className={styles.nav}>
                            <a href="ProtectorP1" className={styles.a}>voltar</a>
                            <ButtonNxt
                                title="Próximo"
                                icon=''
                                link='Confirmation' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}