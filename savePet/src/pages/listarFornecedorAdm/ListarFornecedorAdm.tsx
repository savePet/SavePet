import { Scroll } from "@phosphor-icons/react"
import styles from "../listarFornecedorAdm/index.module.css"
import { MenuAdm } from "../../components/menuAdm/MenuAdm"

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import close1 from '../../assets/close1.svg'
import { Forncedores } from "../../model/Servico"
import { api } from "../../configs/api"

export const ListarFornecedorAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [getFornecedorlist, setFornecedorlist] = useState([]);
    const [getSelectFornecedor, setSelectFornecedor] = useState<Forncedores | null>(null);

    useEffect(() => {
        api.get('/api/fornecedores')
        .then(res => setFornecedorlist(res.data))
        .catch(err => console.log(err));
     }, []);

    const handleOpenModel = (fornecedor: Forncedores) => {
        setSelectFornecedor(fornecedor);
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
                        {getFornecedorlist.map((item: Forncedores) => (
                            <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.cnpj}</td>
                                <td>{item.endereco}</td>
                                <td>{item.telefone}</td>
                                <td>{item.tipoFornecedor}</td>
                                <td>{item.statusCadastro}</td>
                                <td><Scroll size={32} onClick={() => handleOpenModel(item)} 
                                cursor="pointer" data-testid="icon-scroll"/></td>
                            </tr>
                            </>
                        ))}
                    </table>
                </div> 
            </div>
            <Modal isOpen={modalIsOpen}
            className={styles.cardModal_container} 
            overlayClassName={styles.modal__overlay} data-testid="modal-content">
                <div className={styles.closeModal}>
                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                </div>
                <div className={styles.modal_container}>
                    <div className={styles.descricaoModal}>
                        <p className={styles.tituloModal}>Informações de Fornecedor</p>
                        {getSelectFornecedor && (
                            <>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>ID:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.id}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Nome:</p> 
                                <p className={styles.descricao_info}>{getSelectFornecedor.nome}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Cnpj:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.cnpj}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Endereço:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.endereco}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Telefone:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.telefone}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Email:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.email}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>StatusCadastro:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.statusCadastro}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>TipoFornecedor:</p>
                                <p className={styles.descricao_info}>{getSelectFornecedor.tipoFornecedor}</p>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </section>
    )
}