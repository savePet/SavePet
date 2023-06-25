import { Scroll } from "@phosphor-icons/react"
import styles from "../listarProtetor/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

import Modal from 'react-modal'
import { useState } from 'react'
import close1 from '../../assets/close1.svg'

export const ListarProtetorAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModel = () => {
        setIsOpen(true)
    }

    const handleCloseModel = () => {
        setIsOpen(false)
    }
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
                        <p className={styles.tituloModal}>Protetor</p>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>ID:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Nome:</p> 
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Endereço:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Telefone:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Email:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Disponibilidade de Acolhimento:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Status Cadastro:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}