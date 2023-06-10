import Modal from 'react-modal'
import styles from './index.module.css'
import { useState } from 'react'
import adicionar from '../../assets/adicionar.svg'
import close1 from '../../assets/close1.svg'

export const CardAdotePet = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleOpenModel = () => {
        setIsOpen(true)
    }

    const handleCloseModel = () => {
        setIsOpen(false)
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.imagem}>
                img
            </div>
            <div className={styles.atributo}>
                <p className={styles.p}>Raça:</p>
                <p className={styles.p}>Cor:</p>
                <p className={styles.p}>Gênero:</p>
                <div className={styles.img_button}>
                    <button className={styles.buttonAdotar}>
                        Adotar
                    </button>
                    <img className={styles.adicionar} src={adicionar} alt="modal para ver as informaçoes" onClick={handleOpenModel}/>         
                </div> 
            </div>
            <Modal isOpen={modalIsOpen}
            
            className={styles.cardModal_container} overlayClassName={styles.modal__overlay}>
                    <div className={styles.closeModal}>

                    <img src={close1} alt="iconi para fechar o modal" onClick={handleCloseModel} />
                    </div>
                <div className={styles.modal_container}>
                    <div className={styles.imagemModal}>
                        img
                    </div>
                    <div className={styles.atributoModal}>
                        <p className={styles.pModal}>Especie:</p>
                        <p className={styles.pModal}>Raça:</p>
                        <p className={styles.pModal}>Gênero:</p>
                        <p className={styles.pModal}>Porte Físico:</p>
                        <p className={styles.pModal}>Cor:</p>
                        <p className={styles.pModal}>Status Sáude:</p>
                        <p className={styles.pModal}>Descrição:</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}





