import styles from './index.module.css'
import menuadm from '../../assets/menuadm.svg'
import logoadm from '../../assets/logoadm.svg'
import { useContext } from 'react'

import { FileX, Handshake, House, NewspaperClipping, PawPrint, Shield, SignOut, Truck, User, UserList } from "@phosphor-icons/react";
import { Link, useLocation } from 'react-router-dom';
import { MenuContext } from '../../contexts/menuAdm';

export const MenuAdm = () => {
   
    const location = useLocation();
    const { isMenuOpen, toggleMenu } = useContext(MenuContext);
   
    console.log(location.pathname)
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
                <li title="Perfil de Usuario" className={location.pathname === 'Usuario' ? styles.active : ''}>
                    <a href="#"> 
                        <User size={32}/>           
                        {isMenuOpen && (<span className={styles.usuario}>Usuario</span>)}                            
                    </a>
                </li>
            </div>
                <ul>
                    <Link to="/HomeAdm">
                <li title="Inicio" className={location.pathname === '/HomeAdm' ? styles.active : ''}> 
                    
                    <a href="#">
                        <House size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Inicio</span>)} 
                    
                    </a>

                </li>
                    </Link>

                <li title="Serviço" className={decodeURIComponent(location.pathname) === '/ServiçoAdm' ? styles.active : ''}>
                <Link to="/ServiçoAdm">
                
                    <Handshake size={32}/>
                    {isMenuOpen && (<span className={styles.opcao}>Serviço</span>)}
                        
                
                </Link> 
                </li>
                <li title="Pet" className={location.pathname === '/ListarPetAdm' ? styles.active : ''}>
                    <Link to="/ListarPetAdm">
                        <PawPrint size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Pet</span>)}
                    </Link>
                </li>
                <li title="Protetor" className={location.pathname === '/ListarProtetorAdm' ? styles.active : ''}>
                    <Link to="/ListarProtetorAdm">
                        <Shield size={32}/>     
                        {isMenuOpen && (<span className={styles.opcao}>Protetor</span>)}
                    </Link>
                </li>
                <li title="Fornecedor" className={location.pathname === 'Fornecedor' ? styles.active : ''}>
                    <a href="#">      
                    <Truck size={32}/>
                    {isMenuOpen && (<span className={styles.opcao}>Fornecedor</span>)}
                        
                    </a>
                </li>
                <li title="Ocorrencias" className={location.pathname === 'Ocorrencias' ? styles.active : ''}>
                    <a href="#">      
                        <NewspaperClipping size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Ocorrencias</span>)}
                        
                    </a>
                </li>
                <li title="Confirmar Cadastros" className={location.pathname === 'Confirmar Cadastros' ? styles.active : ''}>
                    <a href="#">      
                        <UserList size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Confirmar Cadastros</span>)}
                        
                    </a>
                </li>
                <li title="Desativar Cadastros" className={location.pathname === 'Desativar Cadastros' ? styles.active : ''}>
                    <a href="#">      
                        <FileX size={32}/>
                        {isMenuOpen && (<span className={styles.opcao}>Desativar Cadastros</span>)}
                        
                    </a>
                </li>
            </ul>
            <div className={styles.logout_container}>
                <li title="Logout Account" className={location.pathname === 'Logout Account' ? styles.active : ''}>
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


