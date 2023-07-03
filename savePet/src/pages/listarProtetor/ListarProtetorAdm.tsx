import { Scroll } from "@phosphor-icons/react"
import styles from "../listarProtetor/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import close1 from '../../assets/close1.svg'
import { Protetor } from "../../model/Protetor"
import { api } from "../../configs/api"

export const ListarProtetorAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [getProtetorlist, setProtetorlist] = useState([]);
    const [getSelectProtetor, setSelectProtetor] = useState<Protetor | null>(null);

    useEffect(() => {
        api.get('/api/protetoras/protetorasPendentes')
        .then(res => setProtetorlist(res.data))
        .catch(err => console.log(err));
     }, []);

    const handleOpenModel = (protetor: Protetor) => {
        setSelectProtetor(protetor)
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
            <div className={styles.protetoradm}>
                <div className={styles.tabela}>   
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>STATUSCADASTRO</th>
                            <th>DISPONIBILIDADE_HORÁRIO</th>
                            <th>CANTATO</th>
                        </tr>
                        {getProtetorlist.map((item: Protetor) =>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.statusCadastro}</td>
                                <td>{item.disponibilidadeAcolhimento.horarioDisponivel}</td>
                                <td>{item.telefone} / {item.email}</td>
                                <td><Scroll size={32} onClick={() => handleOpenModel(item)} 
                                cursor="pointer" data-testid="icon-scroll"/></td>
                            </tr>
                        ))}
                    </table>
                </div> 
            </div>
            <Modal isOpen={modalIsOpen}
            className={styles.cardModal_container} 
            overlayClassName={styles.modal__overlay} data-testid="modal-content-protetor">
                <div className={styles.closeModal}>
                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                </div>
                <div className={styles.modal_container}>
                    <div className={styles.descricaoModal}>
                        <p className={styles.tituloModal}>Informações de Protetor</p>
                        {getSelectProtetor && (
                            <>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>ID:</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.id}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Nome:</p> 
                                <p className={styles.descricao_info}>{getSelectProtetor.nome}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Endereço:</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.endereco}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Telefone:</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.telefone}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Email:</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.email}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Disponibilidade de horário</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.disponibilidadeAcolhimento.horarioDisponivel}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Status Cadastro:</p>
                                <p className={styles.descricao_info}>{getSelectProtetor.statusCadastro}</p>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </section>
    )
}