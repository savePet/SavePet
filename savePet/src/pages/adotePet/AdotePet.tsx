import { Divider } from 'antd'
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoAdotePet.svg'
import ButtonNxt from '../../components/Button/Button'
import CardPet from '../../components/CardPet/CardPet'
import styles from './index.module.css'

import gatinho from '../../assets/gatinhoCard.png'

import { AnimalClient } from '../../client/Animal.client'
import { Animal } from '../../model/Animal'
import { Genero } from '../../model/enum/Genero'
import { Especie } from '../../model/enum/Especie'
import axios from 'axios'




interface AnimalData {
    id: number;
    genero: Genero
    especie: Especie
}

axios.get('http://localhost:8080/api/animais')
    .then((response) => {
        const animalData: AnimalData[] = response.data
    })
    .catch((Error) => {
        console.log(Error)
    });

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};
export const AdotePet: React.FC = () => {

    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/animais')
            .then((response) => {
                const animalData = response.data;
                setAnimals(animalData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


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
                        link='AdotePet' />
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
                    {animals.map((animal) => (
                        <CardPet
                            icon={gatinho}
                            name='tetris'
                            especie={animal.especie}
                            // key={animal.id}
                            // icon={animal.icon}
                            link=''
                            genero={animal.genero}
                            // idade={animal.idade}
                            // name={animal.name}
                            raca={animal.raca}
                        />
                    ))}

                    {/* <div>
                        {animals.map((animal) => (
                            <CardPet
                                especie={animal.especie}
                                key={animal.id}
                                icon={animal.icon}
                                link={animal.link}
                                gen={animal.gen}
                                idade={animal.idade}
                                name={animal.name}
                                raca={animal.raca}
                            />
                        ))}
                    </div> */}


                </div>
            </section>
        </main>
    )
}