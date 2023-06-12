import CardHome from '../CardHome'
import styles from './index.module.css'
import Protetora from '../../assets/protetora.svg'
import { Link } from 'react-router-dom'

export const GridHome = () => {

    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <div className={styles.services}>
                    <h1 className={styles.c}>Serviços</h1>
                </div>
            </div>
            <div className={styles.grid}>
                <div style={{ width: '50%' }}>

                    <CardHome color='#DEB162'
                        icon={Protetora}
                        title='Protetoras'
                        link="/Adotepet"
                        
                    />
                    <CardHome color='blue'
                        icon='teste'
                        title='teste de card 24'
                        link='"http://google.com"'
                    />
                </div>
                <div style={{ width: '50%' }}>
                    {/* <CardHome/> */}
                    {/* <div>
                        card animais
                    </div>
                    <div>
                        card fornecedores 
                    </div>
                    <div>
                        card voluntariado
                    </div>
                    <div>
                        card ventos
                    </div>
                    <div>
                        card clinicas parceiras
                    </div> */}

                </div>
            </div>
        </section>
    )
}