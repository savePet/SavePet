import { Dropdown, Input, Space } from 'antd'
import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd';
import logo from '../../../assets/logoAdotePet.svg'
import ButtonNxt from '../../../components/Button/Button'
import styles from './index.module.css'
import { CheckCircle, NumberCircleThree } from '@phosphor-icons/react'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <p>Produto</p>
        ),
    },
    {
        key: '2',
        label: (
            <p>Mão de obra</p>
        ),
    }
];

export const FornInfor = () => {
    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.roadmap}>
                    <div className={styles.item}>
                        <CheckCircle size={32} color="#1f7bf4" weight="duotone" data-testid="checkcircleicon"/>
                        <p>Tipo de colaboração</p>
                    </div>
                    <div className={styles.item}>
                        <CheckCircle size={32} color="#1f7bf4" weight="duotone" data-testid="Checkcircleicon"/>
                        <p >Informações</p>
                    </div>
                    <div className={styles.item}>
                        <NumberCircleThree size={32} color="#1f7bf4" data-testid="numbercirclethreeicon"/>
                        <p style={{ color: '#1f7bf4' }}>Localização e Produto</p>
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
                            Localização e tipo de produto
                        </h1>
                        <p>
                            Informe os dados de Localização e o <br></br>que será fornecido.
                        </p>
                    </div>
                    <div className={styles.creden}>
                        <Input className={styles.input} placeholder='Endereço' />
                        <div className={styles.hours}>
                            <p>Irei fornecer:</p>
                            <Dropdown data-testid="dropdown" menu={{ items }}>
                                <a data-testid="click" onClick={(e) => e.preventDefault()} style={{
                                    marginTop: '20px',
                                    width: '250px',
                                    height: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    border: '0.5px solid #757575',
                                    borderRadius: '5px',
                                    color: '#7E7E7E'
                                }}>
                                    <Space data-testid="space">
                                        Selecione
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className={styles.nav}>
                            <a href="FornCreden" className={styles.a}>voltar</a>
                            <ButtonNxt
                                title="Próximo"
                                icon=''
                                link='Confirmation' data-testid="componenttest"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}