import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from './index.module.css'
import Modal from 'react-modal'
import { useState } from 'react'
import close1 from '../../assets/close1.svg'

export const ListarServico = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModel = () => {
        setIsOpen(true)
    }

    const handleCloseModel = () => {
        setIsOpen(false)
    }
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
                        <p className={styles.tituloModal}>Serviço do Fornecedor</p>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>ID:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Nome:</p> 
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Preço:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Quantidade:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Email:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                        <div className={styles.descricao}>
                            <p className={styles.infoModal}>Telefone:</p>
                            <p className={styles.descricao_info}>Not entered</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
