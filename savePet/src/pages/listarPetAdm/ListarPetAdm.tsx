import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from '../listarPetAdm/index.module.css'

import Modal from 'react-modal'
import { useState } from 'react'
import close1 from '../../assets/close1.svg'

export const ListarPetAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModel = () => {
        setIsOpen(true)
    }

    const handleCloseModel = () => {
        setIsOpen(false)
    }
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
                            <td><Scroll size={32} onClick={handleOpenModel} cursor="pointer"/></td>
                        </tr>
                    </table>
                </div> 
            </div>
            <Modal isOpen={modalIsOpen}
            className={styles.cardModal_container} 
            overlayClassName={styles.modal__overlay}>
                <div className={styles.closeModal}>
                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                </div>
                <div className={styles.modal_container}>
                    <div className={styles.descricaoModal}>
                        <p className={styles.tituloModal}>Animal</p>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>ID:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Raça:</p> 
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>StatusSaude:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Especie:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>PorteFisico:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Genero:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Cor:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}