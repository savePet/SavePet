import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface CardPetProps {
    name?: string;
    gen?: string;
    raca?: string;
    idade?: string;
    color?: string;
    icon?: string;
    link: string;
}
function clicktoCard(link: string) {
    window.open("/" + link, "_self")
    console.log("/" + link)
    console.log(link)
}

const CardPet: React.FC<CardPetProps> = ({ name, gen, raca, idade, link, color, icon }) => {
    const cardStyles = {
        backgroundColor: color,
        g: gen,
        r: raca,
        i: idade,
        h1: name,
        icon: icon,
    };
    return (
        <section>
            <a href={"/" + link} style={cardStyles} className={styles.sectio} >
                <img src={icon} alt="icone" />
                <div className={styles.contentC} >
                    <div>
                        <h2>{name}({gen})</h2>
                        <p>{raca}</p>
                    </div>
                    <p>{idade} anos</p>
                </div>
                <Link to={link}></Link>
            </a>
        </section>
    )
}

export default CardPet;