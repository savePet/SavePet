import { Scroll } from "@phosphor-icons/react"
import styles from "../listarFornecedorAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

import Modal from 'react-modal'
import { useState } from 'react'
import close1 from '../../assets/close1.svg'

export const ListarFornecedorAdm = () => {
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
            <div className={styles.fornecedoradm}>
                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CNPJ</th>
                            <th>ENDEREÇO</th>
                            <th>CONTATO</th>
                            <th>TIPOFORNECEDOR</th>
                            <th>STATUSCADASTRO</th>
                        </tr>
                        <tr>
                            <td >1</td>
                            <td>Leopold</td>
                            <td>XX. XXX. XXX/0001-XX</td>
                            <td>rua A</td>
                            <td>example@gmail.com</td>
                            <td>Produto</td>
                            <td className={styles.statusFornecedor}>Aceito</td>
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
                        <p className={styles.tituloModal}>Fornecedor</p>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>ID:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Nome:</p> 
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Cnpj:</p>
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
                            <p className={styles.infoModal}>StatusCadastro:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>TipoFornecedor:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}