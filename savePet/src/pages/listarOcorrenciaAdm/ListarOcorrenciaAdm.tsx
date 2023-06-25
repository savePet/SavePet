import styles from "../listarOcorrenciaAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"
import { Cat, Dog } from "@phosphor-icons/react"

import Modal from 'react-modal'
import { useState } from 'react'
import close1 from '../../assets/close1.svg'

export const ListarOcorrenciaAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModel = () => {
        setIsOpen(true)
    }

    const handleCloseModel = () => {
        setIsOpen(false)
    }
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
                    <div className={styles.ocorrencia_card} >
                        <div className={styles.card_list} onClick={handleOpenModel}>
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
            <Modal isOpen={modalIsOpen}
            className={styles.cardModal_container} 
            overlayClassName={styles.modal__overlay}>
                <div className={styles.closeModal}>
                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                </div>
                <div className={styles.modal_container}>
                    <div className={styles.descricaoModal_container}>
                        <div className={styles.titulo_descricao}>
                            <h1 className={styles.titulo_ocorrencia_regiao}>Ocorrencia</h1>
                            <h1 className={styles.titulo_ocorrencia_regiao}>Regiao</h1>
                        </div>
                        <p className={styles.titulo_data}>24.2.2022  14:00</p>
                        <p className={styles.conteudo_ocorrencia}>Best regards Alejandro.
                        Thank you for joining the Travell system.
                        We wish you a pleasant use and feel free to contact us at the end of this notice in case of any problem that happens to you or if you need any help.

                        Our email address:
                        example@gmail.com

                        Phone number:
                        +1 125 352 1245

                        We wish you a pleasant use, Travell TEAM</p>
                    </div>
                </div>
                <div className={styles.button_status}>
                    <button className={styles.button_status_ocorrencias}>Status - Aceitar ocorrencia</button>
                </div>
            </Modal>
        </section>
    )
}