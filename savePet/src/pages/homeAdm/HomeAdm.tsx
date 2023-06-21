import { Cat, Dog } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from './index.module.css'

export const HomeAdm = () => {
    return(        
        <section className={styles.section_container}>
            <div className={styles.Menu}>
                <MenuAdm />
            </div>
            <div className={styles.home}>
                <div className={styles.relatorio_tabela}>
                    <div className={styles.relatorio}>
                        <span className={styles.relatorio_span}>Ocorrencias aceitas</span>
                        <span className={styles.relatorio_span}>Ocorrencias pendentes</span>
                        <span className={styles.relatorio_span}>Pet recolhidos</span>
                    </div>                     
                    <div className={styles.tabela}>   
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>TIPO CADASTRO</th>
                                <th>STATUS</th>
                                <th>CONTATO</th>
                            </tr>
                            <tr>
                                <td >1</td>
                                <td className={styles.nome}>Eduardo</td>
                                <td className={styles.tipocadastro}>Administrador</td>
                                <td className={styles.status}>Aceito</td>
                                <td>45 9999-9999</td>
                            </tr>
                        </table>
                    </div> 
                </div>
                <div className={styles.relatorio_ocorrencia}>
                    <span className={styles.relatorio_ocorrencia_span}>Ocorrencias</span>
                        <div className={styles.card}>
                            <div className={styles.card_container}>
                                <span className={styles.ocorrencia_icone}>
                                    <Dog size={32}/>
                                    <Cat size={32}/>
                                </span>
                                <div className={styles.descricao_container}>
                                    <span className={styles.ocorrencia_card}>Ocorrencia
                                    <span className={styles.relatorio_regiao}>Regiao</span>
                                    </span>                      
                                    <p className={styles.descricao}>Report on sales datagfhdg</p>
                                </div>
                                <p className={styles.descricao_data}>1.5.2022 12:45</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}










