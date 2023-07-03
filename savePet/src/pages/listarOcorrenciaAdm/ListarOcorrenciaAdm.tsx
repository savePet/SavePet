import styles from "../listarOcorrenciaAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"
import { Cat, Dog } from "@phosphor-icons/react"

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import close1 from '../../assets/close1.svg'
import { Ocorrencias } from "../../model/Ocorrencia"
import { api } from "../../configs/api"

export const ListarOcorrenciaAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [getOcorrencialist, setOcorrencialist] = useState([]);
    const [getSelectOcorrencia, setSelectOcorrencia] = useState<Ocorrencias | null>(null);

    useEffect(() => {
        api.get('/api/ocorrencias')
        .then(res => setOcorrencialist(res.data))
        .catch(err => console.log(err));
     }, []);

    const handleOpenModel = (ocorrencia: Ocorrencias) => {
        setSelectOcorrencia(ocorrencia)
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
                    <span data-testid="test-ocorrencia-container" className={styles.ocorrencia_span}>
                        Ocorrências                 
                    </span>
                    {getOcorrencialist.map((item: Ocorrencias) => (
                        <>
                        <div className={styles.ocorrencia_card} >
                            <div className={styles.card_list} onClick={() => handleOpenModel(item)} data-testid="modal-test">
                                <div className={styles.card_container}>
                                    <span className={styles.ocorrencia_icone}>
                                        <Dog size={32} data-testid="icon-dog"/>
                                        <Cat size={32} data-testid="icon-cat"/>
                                    </span>                               
                                    <div className={styles.descricao_container}>
                                        <span data-testid="test-ocorrencia-card" className={styles.ocorrencia_card_descricao}>Ocorrência
                                        <span data-testid="test-regiao-card" className={styles.relatorio_regiao}>{item.regiao}</span>
                                        </span>                      
                                        <p data-testid="test-descricao-card" className={styles.descricao_ocorrencia}>{item.descricao}</p>
                                    </div>
                                    <div className={styles.descricao_data_container}>                               
                                        <p data-testid="test-statusOcorrencia-card" className={styles.descricao_data}>{item.statusOcorrencia}</p>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
            className={styles.cardModal_container} 
            overlayClassName={styles.modal__overlay} data-testid="modal-content">
                <div className={styles.closeModal}>
                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                </div>
                <div className={styles.modal_container}>
                {getSelectOcorrencia && (
                    <>
                    <div className={styles.descricaoModal_container}>
                        <div className={styles.titulo_descricao}>
                            <h1 data-testid="test-correncia-modal" className={styles.titulo_ocorrencia_regiao}>Ocorrência</h1>
                            <h1 data-testid="test-regiao-modal" className={styles.titulo_ocorrencia_regiao}>{getSelectOcorrencia.regiao}</h1>
                        </div>
                        <p data-testid="test-statusOcorrencia-modal" className={styles.titulo_data}>{getSelectOcorrencia.statusOcorrencia}</p>
                        <p data-testid="test-descricao-modal" className={styles.conteudo_ocorrencia}>
                        {getSelectOcorrencia.descricao}
                        </p>
                    </div>
                    </>
                )}
                </div>
                <div className={styles.button_status}>
                    <button className={styles.button_status_ocorrencias}>Status - Aceitar ocorrencia</button>
                </div>
            </Modal>
        </section>
    )
}