import { Link } from 'react-router-dom'
import styles from './index.module.css'

import React, { useState } from 'react'

import logo from '../../assets/logoAdotePet.svg'
import ButtonNxt from '../../components/Button/Button'

import { Space, type MenuProps } from 'antd';
import Dropdown from 'antd/es/dropdown/dropdown'


// const items: MenuProps['items'] = [
//     {
//         key: '1',
//         label: (
//             <p>Gato</p>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <p>Cachorro</p>
//         ),
//     }
// ];

// const genero: MenuProps['items'] = [
//     {
//         key: '1',
//         label: (
//             <p>Gato</p>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <p>Cachorro</p>
//         ),
//     }
// ];


const items = [
    {
        key: '1',
        label: <p>Gato</p>,
    },
    {
        key: '2',
        label: <p>Cachorro</p>,
    },
];

const genero = [
    {
        key: '1',
        label: <p>Femea</p>,
    },
    {
        key: '2',
        label: <p>Macho</p>,
    },
];



/*const enum Raca {
    Viralata = 'Viralata',
    Pitbul = 'Pitbul',
    Labrador = 'Labrador',
    Pastoralemao = 'Pastoralemao',
    Chihuahuas = 'Chihuahuas',
    Boxers = 'Boxers',
    Sharpeis = 'Sharpeis',
    Rottweilers = 'Rottweilers',
    Bulldogs = 'Bulldogs',
    Golden = 'Golden',
    Siames = 'Siames',
    Persa = 'Persa',
    Mainecoon = 'Mainecoon',
    Sphynx = 'Sphynx',
    Bengal = 'Bengal',
    Ragdoll = 'Ragdoll',
    Scottish = 'Scottish',
    Americanshorthair = 'Americanshorthair',
    Devonrex = 'Devonrex'
}*/
export const AdotePet: React.FC = () => {



    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />
                <div className={styles.filter}>
                    <h1>Filtro</h1>

                    <Dropdown menu={{ items: items }}>
                        <a onClick={(e) => e.preventDefault()} style={{
                            backgroundColor: '#fff',
                            marginTop: '20px',
                            width: '250px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '0.5px solid #757575',
                            borderRadius: '5px',
                            color: '#7E7E7E'
                        }}>
                            <Space>
                                <p>Selecione a espécie</p>
                            </Space>
                        </a>
                    </Dropdown>
                    <Dropdown menu={{ items: genero }}>
                        <a onClick={(e) => e.preventDefault()} style={{
                            marginTop: '20px',
                            backgroundColor: '#fff',
                            width: '250px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '0.5px solid #757575',
                            borderRadius: '5px',
                            color: '#7E7E7E'
                        }}>
                            <Space>
                                <p>Selecione o gênero</p>
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div className={styles.nav}>
                    <a href="/" className={styles.a}>voltar</a>
                    <ButtonNxt
                        title="Próximo"
                        icon=''
                        link='ProtectorP2' />
                </div>
            </div>
            <section>
                <div className={styles.login}>
                    <p>Algum problema? <a href='' style={{ color: '#2E920A' }}><Link to="/Login">Contatar</Link></a></p>
                </div>
                <div>
                    <h1>Nossos pets</h1>

                    <h3>
                        Aqui se encontra a parte mais calorosa do nosso<br></br>projeto, no qual
                        temos o prazer de apresentar <br></br>
                        todos os nossos amiguinhos que <br></br>
                        estão a procura de um lar.
                    </h3>
                </div>
            </section>
        </main>
    )
}  
