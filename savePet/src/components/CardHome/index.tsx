import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface CardHomeProps {
    title: string;
    color: string;
    icon: string;
    link: string;
}
function clicktoCard(link: string) {
    window.open("/" + link, "_self")
    console.log("/" + link)
    console.log(link)
}


const CardHome: React.FC<CardHomeProps> = ({ title, link, color, icon }) => {
    const cardStyles = {
        backgroundColor: color,
        h1: title,
        icon: icon,
    };
    return (
        <a href={"/" + link}>
            <section style={cardStyles} className={styles.sectio}>
                <img src={icon} alt="icone" />
                <h2>{title}</h2>
                <Link to={link}></Link>
            </section>
        </a>
    )
}

export default CardHome;