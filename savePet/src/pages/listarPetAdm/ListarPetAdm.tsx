import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from '../listarPetAdm/index.module.css'

export const ListarPetAdm = () => {
    return (
        <section className={styles.section_container} id="ServiçoAdm">
            <div>
                <MenuAdm />
            </div>
            <div className={styles.pet}>
                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>RAÇA</th>
                            <th>STATUSSAUDE</th>
                            <th>ESPECIE</th>
                            <th>PORTEFISICO</th>
                            <th>GENERO</th>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Pitbull</td>
                            <td>Saudavel</td>
                            <td>Cachorro</td>
                            <td>Grande</td>
                            <td>Masculino</td>
                            <td><Scroll size={32} cursor="pointer"/></td>
                        </tr>
                    </table>
                </div> 
            </div>
        </section>
    )
}