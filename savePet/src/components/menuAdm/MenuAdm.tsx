import styles from './index.module.css'
import menuadm from '../../assets/menuadm.svg'
import logoadm from '../../assets/logoadm.svg'
import { useState } from 'react'

import { FileX, Handshake, House, NewspaperClipping, PawPrint, Shield, SignOut, Truck, User, UserList } from "@phosphor-icons/react";

export const MenuAdm = () => {
    const [isMenuOpen, setMenuOpen] = useState(true);
    const [opcaoActive, setOpcaoActive] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const opcaoClick = (opcao: string) => {
        setOpcaoActive(opcao)
    }

    return(
        <div className={`${styles.menu_container} ${isMenuOpen ? '' : styles.closed}`}>

        <div className={styles.menu_container}>
            <div className={styles.menu_header}>
                <div>   
                    <img onClick={toggleMenu} className={styles.iconetoggle} src={menuadm} alt="iconi do menu" />
                </div>
                <div>
                    {isMenuOpen && (

                    <img className={styles.iconelogo} src={logoadm} alt="" />
                    )}
                </div>
            </div>  


            <div className={styles.perfil}>
                <li title="Perfil de Usuario" className={opcaoActive === 'Usuario' ? styles.active : ''} onClick={() => opcaoClick('Usuario')}>
                    <a href="#"> 
                        <User size={32}/>           
                        {isMenuOpen && (<span className={styles.usuario}>Usuario</span>)}                            
                    </a>
                </li>
            </div>
                <ul>
                <li title="Inicio" className={opcaoActive === 'Inicio' ? styles.active : ''} onClick={() => opcaoClick('Inicio')}> 
                    <a href="#">
                        <House size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Inicio</span>)}
                        
                    </a>
                </li>
                <li title="Serviço" className={opcaoActive === 'Servico' ? styles.active : ''} onClick={() => opcaoClick('Servico')}>
                    <a href="#">
                    <Handshake size={32}/>
                    {isMenuOpen && (<span className={styles.opcao}>Serviço</span>)}
                        
                    </a>
                </li>
                <li title="Pet" className={opcaoActive === 'Pet' ? styles.active : ''} onClick={() => opcaoClick('Pet')}>
                    <a href="#">
                    <PawPrint size={32}/>
                    {isMenuOpen && (<span className={styles.opcao}>Pet</span>)}
                        
                    </a>
                </li>
                <li title="Protetor" className={opcaoActive === 'Protetor' ? styles.active : ''} onClick={() => opcaoClick('Protetor')}>
                    <a href="#"> 
                        <Shield size={32}/>     
                        {isMenuOpen && (<span className={styles.opcao}>Protetor</span>)}
                        
                    </a>
                </li>
                <li title="Fornecedor" className={opcaoActive === 'Fornecedor' ? styles.active : ''} onClick={() => opcaoClick('Fornecedor')}>
                    <a href="#">      
                    <Truck size={32}/>
                    {isMenuOpen && (<span className={styles.opcao}>Fornecedor</span>)}
                        
                    </a>
                </li>
                <li title="Ocorrencias" className={opcaoActive === 'Ocorrencias' ? styles.active : ''} onClick={() => opcaoClick('Ocorrencias')}>
                    <a href="#">      
                        <NewspaperClipping size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Ocorrencias</span>)}
                        
                    </a>
                </li>
                <li title="Confirmar Cadastros" className={opcaoActive === 'Confirmar Cadastros' ? styles.active : ''} onClick={() => opcaoClick('Confirmar Cadastros')}>
                    <a href="#">      
                        <UserList size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Confirmar Cadastros</span>)}
                        
                    </a>
                </li>
                <li title="Desativar Cadastros" className={opcaoActive === 'Desativar Cadastros' ? styles.active : ''} onClick={() => opcaoClick('Desativar Cadastros')}>
                    <a href="#">      
                        <FileX size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Desativar Cadastros</span>)}
                        
                    </a>
                </li>
            </ul>
            <div className={styles.logout_container}>
                <li title="Logout Account" className={opcaoActive === 'Logout Account' ? styles.active : ''} onClick={() => opcaoClick('Logout Account')}>
                    <a href="#"> 
                        <SignOut size={32} color="#FA0800"/>          
                        {isMenuOpen && (<span className={styles.logout}>Logout Account</span>)}                            
                    </a>
                </li>
            </div>

        </div>
    </div>
    )
}










