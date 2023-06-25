import { Scroll } from "@phosphor-icons/react"
import styles from "../listarFornecedorAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

export const ListarFornecedorAdm = () => {
    return (
        <section className={styles.section_container}>
            <div>
                <MenuAdm />
            </div>
            <div className={styles.fornecedoradm}>
                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CNPJ</th>
                            <th>ENDEREÇO</th>
                            <th>CONTATO</th>
                            <th>STATUSCADASTRO</th>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Leopold</td>
                            <td>XX. XXX. XXX/0001-XX</td>
                            <td>rua A</td>
                            <td>example@gmail.com</td>
                            <td className={styles.statusFornecedor}>Aceito</td>
                            <td><Scroll size={32} cursor="pointer"/></td>
                        </tr>
                    </table>
                </div> 
            </div>
        </section>
    )
}