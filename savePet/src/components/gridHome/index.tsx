import CardHome from '../CardHome'
import styles from './index.module.css'


// imagens usadas nos cards como icones//
import Animais from '../../assets/animais.svg'
import Clinica from '../../assets/clinicas.svg'
import Evento from '../../assets/evento.svg'
import Fornecedor from '../../assets/fornecedor.svg'
import Gestao from '../../assets/gestao.svg'
import Protetora from '../../assets/protetora.svg'
import Voluntario from '../../assets/voluntario.svg'
//--------------------------//

export const GridHome = () => {
    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <div className={styles.services}>
                    <h1 className={styles.c}>Serviços</h1>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.prot}>
                    <div style={{ width: "30%" }}>
                        <CardHome color='#DEB162'
                            icon={Protetora}
                            title='Protetoras'
                            link=""
                        />
                        <CardHome color='#00E2CE'
                            icon={Gestao}
                            title='Gestão Fincanceira'
                            link="Evento"
                        />
                    </div>
                    <div className={styles.doguinho}>
                    </div>
                </div>
                <div className={styles.grid}  >
                    <CardHome color='#FDA769'
                        icon={Animais}
                        title='Animais'
                        link="Adotepet"
                    />
                    <CardHome color='#473C33'
                        icon={Fornecedor}
                        title='Fornecedores'
                        link=""
                    />
                    <CardHome color='#00E2CE'
                        icon={Voluntario}
                        title='Seja Voluntario'
                        link=""
                    />
                    <CardHome color='#BF2750'
                        icon={Evento}
                        title='Eventos'
                        link=""
                    />
                    <CardHome color='#63A7DC'
                        icon={Clinica}
                        title='Clinicas Parceiras'
                        link=""
                    />
                    <div className={styles.doguinho}>
                    </div>
                </div>
            </div>
        </section>
    )
}