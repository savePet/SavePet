import styles from './index.module.css'
import logo from '../../assets/logoAdotePet.svg'
export const Error = () => {
    return (
        <section className={styles.section}>
            <img className={styles.logo} src={logo} alt="" />
            <h1 className={styles.title}>
                Ops!! Acho que temos um erro
            </h1>
            <div className={styles.cont}>
                <h3 >
                    Com certeza não era isso que você esperava,<br></br> acho que um dos nossos amiguinhos de 4<br></br> patas comeu a pagina!<br></br>Que tal voltar para a pagina inicial ?
                </h3>
            </div>
            <h1 className={styles.number}>
                404
            </h1>
            {/* <button type='button'>teste</button> */}
        </section>
    )
}