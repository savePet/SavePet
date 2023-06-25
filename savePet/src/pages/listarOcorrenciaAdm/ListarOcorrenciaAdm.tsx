
import styles from "../listarOcorrenciaAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"
import { Cat, Dog } from "@phosphor-icons/react"

export const ListarOcorrenciaAdm = () => {
    return(
        <section className={styles.section_container}>
            <div>
                <MenuAdm />
            </div>
            <div className={styles.ocorrencia}>
                <div className={styles.relatorio_ocorrencia_container}>
                    <span className={styles.ocorrencia_span}>
                        Ocorrencias                 
                    </span>
                    <div className={styles.ocorrencia_card}>
                        <div className={styles.card_list}>
                            <div className={styles.card_container}>
                                <span className={styles.ocorrencia_icone}>
                                    <Dog size={32}/>
                                    <Cat size={32}/>
                                </span>                               
                                <div className={styles.descricao_container}>
                                    <span className={styles.ocorrencia_card_descricao}>Ocorrencia
                                    <span className={styles.relatorio_regiao}>Regiao</span>
                                    </span>                      
                                    <p className={styles.descricao_ocorrencia}>Report on sales datagfhdg</p>
                                </div>
                                <div className={styles.descricao_data_container}>                               
                                    <p className={styles.descricao_data}>1.5.2022 12:45</p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}