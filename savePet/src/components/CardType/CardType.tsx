import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface CardTypeProps {
    title: string;
    color: string;
    icon: string;
    link: string;
    cont: string
}
function clicktoCard(link: string) {
    window.open("/" + link, "_self")
    console.log("/" + link)
    console.log(link)
}


const CardType: React.FC<CardTypeProps> = ({ title, link, color, icon, cont }) => {
    const cardStyles = {
        backgroundColor: color,
        h1: title,
        icon: icon,
        cont: cont
    };
    return (
        <a href={"/" + link}>
            <section style={cardStyles} className={styles.sectio}>
                <img src={icon} alt="icone" />
                <h1>{title}</h1>
                <h3>{cont}</h3>
                <Link to={link}></Link>
            </section>
        </a>
    )
}

export default CardType;