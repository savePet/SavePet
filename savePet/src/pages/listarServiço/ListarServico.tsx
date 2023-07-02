import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from './index.module.css'
import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import close1 from '../../assets/close1.svg'
import { Fornecedores, Servico } from '../../model/Servico'
import { api } from '../../configs/api'

export const ListarServico = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [getServicolist, setServicolist] = useState([]);
    const [getSelectServico, setSelectServico] = useState<Servico | null>(null);
    const [getSelectFornecedor, setSelectFornecedor] = useState<Fornecedores | null>(null);

    useEffect(() => { 
        api.get('/api/fornecedores')
        .then(res => setServicolist(res.data))
        .catch(err => console.log(err));
     }, []);

    const handleOpenModel = (fornecedor: Fornecedores, servico: Servico) => {
        setSelectFornecedor(fornecedor);
        setSelectServico(servico);
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
                        {getServicolist.map((item: Fornecedores) => (
                            <>
                                {item.servicos.map(servico => (
                                    <tr>
                                        <td>{servico.id}</td>
                                        <td className={styles.nome}>{servico.nome}</td>
                                        <td className={styles.tipocadastro}>{servico.preco}</td>
                                        <td className={styles.status}>{servico.quantidade}</td>
                                        <td>{item.telefone} / {item.email}</td>
                                        <td><Scroll size={32} onClick={() => handleOpenModel(item, servico)} 
                                        cursor="pointer" data-testid="icon-scroll"/></td>
                                    </tr>
                                ))}
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
                        <p className={styles.tituloModal}>Serviço do Fornecedor</p>
                        {getSelectServico && (
                            <>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>ID:</p>
                                    <p className={styles.descricao_info}>{getSelectServico.id}</p>
                                </div>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>Nome:</p> 
                                    <p className={styles.descricao_info}>{getSelectServico.nome}</p>
                                </div>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>Preço:</p>
                                    <p className={styles.descricao_info}>{getSelectServico.preco}</p>
                                </div>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>Quantidade:</p>
                                    <p className={styles.descricao_info}>{getSelectServico.quantidade}</p>
                                </div>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>Email:</p>
                                    <p className={styles.descricao_info}>{getSelectFornecedor?.email}</p>
                                </div>
                                <div className={styles.descricao}>
                                    <p className={styles.infoModal}>Telefone:</p>
                                    <p className={styles.descricao_info}>{getSelectFornecedor?.telefone}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </section>
    )
}
