import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from './index.module.css'

export const ListarServico = () => {
    return(
        <section className={styles.section_container} id="ServiçoAdm">
            <div>
                <MenuAdm />
            </div>
        <div className={styles.servico}>

                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>QUANTIDADE</th>
                            <th>CONTATO FORNECEDOR</th>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td className={styles.nome}>Raçao</td>
                            <td className={styles.tipocadastro}>0</td>
                            <td className={styles.status}>20</td>
                            <td>45 9999-9999/exemplo@gmail.com</td>
                            <td><Scroll size={32}/></td>
                        </tr>
                    </table>
                </div> 
        </div>
    </section>
    )
}
