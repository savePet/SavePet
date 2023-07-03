import { Scroll } from '@phosphor-icons/react'
import { MenuAdm } from '../../components/menuAdm/MenuAdm'
import styles from '../listarPetAdm/index.module.css'

import Modal from 'react-modal'
import { useEffect, useState } from 'react'
import close1 from '../../assets/close1.svg'
import { Animal } from '../../model/Animal'
import { api } from '../../configs/api'


export const ListarPetAdm = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [getPetlist, setPetlist] = useState([]);
    const [getSelectAnimal, setSelectAnimal] = useState<Animal | null>(null);

    useEffect(() => {
        api.get('/api/animais')
        .then(res => setPetlist(res.data))
        .catch(err => console.log(err));
     }, []);


    const handleOpenModel = (animais: Animal) => {
        setSelectAnimal(animais)
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
                            <th>RAÇA</th>
                            <th>STATUSSAUDE</th>
                            <th>ESPECIE</th>
                            <th>PORTEFISICO</th>
                            <th>GENERO</th>
                        </tr>
                        {getPetlist.map((item: Animal) => (
                            <tr>
                                <td >{item.id}</td>
                                <td>{item.raca}</td>
                                <td>{item.statusSaude}</td>
                                <td>{item.especie}</td>
                                <td>{item.porteFisico}</td>
                                <td>{item.genero}</td>
                                <td><Scroll size={32} onClick={() => handleOpenModel(item)} 
                                cursor="pointer" data-testid="icon-scroll"/></td>
                            </tr>
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
                        <p className={styles.tituloModal}>Animal</p>
                        {getSelectAnimal && (
                            <>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>ID:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.id}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Raça:</p> 
                                <p className={styles.descricao_info}>{getSelectAnimal.raca}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>StatusSaude:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.statusSaude}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Especie:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.especie}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>PorteFisico:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.porteFisico}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Genero:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.genero}</p>
                            </div>
                            <div className={styles.descricao}>
                                <p className={styles.infoModal}>Cor:</p>
                                <p className={styles.descricao_info}>{getSelectAnimal.cor}</p>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </Modal>
        </section>
    )
}