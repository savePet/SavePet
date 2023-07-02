import { Divider } from 'antd'
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoAdotePet.svg'
import ButtonNxt from '../../components/Button/Button'
import CardPet from '../../components/CardPet/CardPet'
import styles from './index.module.css'


import gatinho from '../../assets/gatinhoCard.png'
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

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

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

    const [checked, setChecked] = useState(false);

    const handleChange = (e: any) => {
        setChecked(e.target.checked);
    }

    return (
        <main className={styles.main}>
            <div className={styles.lateral}>
                <img className={styles.logo} src={logo} alt="" />
                <div className={styles.filter}>
                    <h1>Filtro</h1>

                    <p>Gênero</p>
                    <Checkbox onChange={onChange}>Macho</Checkbox>
                    <Checkbox onChange={onChange}>Fêmea</Checkbox>
                    <Divider style={{ backgroundColor: '#fff', marginTop: '10px' }} />

                    <p>Especie</p>
                    <Checkbox checked={checked} onChange={handleChange} >Gato</Checkbox>
                    <Checkbox >Cachorro</Checkbox>
                    <Divider style={{ backgroundColor: '#fff', marginTop: '10px' }} />

                    <p>Porte</p>
                    <Checkbox onChange={onChange}>Pequeno</Checkbox>
                    <Checkbox onChange={onChange}>Médio</Checkbox>
                    <Checkbox onChange={onChange}>Grande</Checkbox>
                    <Divider style={{ backgroundColor: '#fff', marginTop: '10px' }} />
                </div>
                <div className={styles.nav}>
                    <a href="/" className={styles.a}>Voltar</a>
                    <ButtonNxt
                        title="Aplicar"
                        icon=''
                        link='ProtectorP2' />
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.login}>
                    <p>Algum problema? <a href='' style={{ color: '#2E920A' }}><Link to="/Login">Contatar</Link></a></p>
                </div>
                <div className={styles.info}>
                    <h1>Nossos pets</h1>

                    <h3>
                        Aqui se encontra a parte mais calorosa do nosso<br></br>projeto, no qual
                        temos o prazer de apresentar <br></br>
                        todos os nossos amiguinhos que <br></br>
                        estão a procura de um lar.
                    </h3>
                </div>
                <div className={styles.listPet}>
                    <CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    />
                    <CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    />
                    <CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    />
                    <CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    /><CardPet
                        icon={gatinho}
                        link=''
                        gen='macho'
                        idade='10'
                        name='tetris'
                        raca='show show'
                    />
                </div>
            </section>
        </main>
    )
}

{/* <Dropdown menu={{ items: items }}>
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
                    </Dropdown> */}