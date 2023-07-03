import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface CardPetProps {
    name?: string;
    genero?: string;
    raca?: string;
    idade?: string;
    color?: string;
    icon?: string;
    link: string;
    especie?: string
}
function clicktoCard(link: string) {
    window.open("/" + link, "_self")
    console.log("/" + link)
    console.log(link)
}

const CardPet: React.FC<CardPetProps> = ({ name, genero, raca, idade, link, color, icon,especie }) => {
    const cardStyles = {
        backgroundColor: color,
        g: genero,
        r: raca,
        i: idade,
        h1: name,
        icon: icon,
        esp:especie
    };
    return (
        <section>
            <a href={"/" + link} style={cardStyles} className={styles.sectio} >
                <img src={icon} alt="icone" />
                <div className={styles.contentC} >
                    <div>
                        <h2>{name}<p className={styles.pp}>({genero})</p></h2>
                        <p>{raca}</p>
                    </div>
                    <p>{especie}</p>
                    {/* <p>{idade} anos</p> */}
                </div>
                <Link to={link}></Link>
            </a>
        </section>
    )
}

export default CardPet;