import { Scroll } from "@phosphor-icons/react"
import styles from "../listarProtetor/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

export const ListarProtetorAdm = () => {
    return (
        <section className={styles.section_container}>
            <div>
                <MenuAdm />
            </div>
            <div className={styles.pet}>
                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>STATUSCADASTRO</th>
                            <th>DISPONIBILIDADEACOLHIMENTO</th>
                            <th>CANTATO</th>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Edie</td>
                            <td className={styles.statusProtetor}>Aceito</td>
                            <td>segunda a sexta</td>
                            <td>example@gmail.com</td>
                            <td><Scroll size={32}cursor="pointer"/></td>
                        </tr>
                    </table>
                </div> 
            </div>
        </section>
    )
}