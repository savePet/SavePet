import { Link } from 'react-router-dom';
import styles from './index.module.css'

interface CardHomeProps{
    title: string;
    color: string;
    icon: string;
    link:string
}
function clicktoCard() {
    console.log("clicou na bagaça")
}


const CardHome:React.FC<CardHomeProps> =({title, link,color, icon}) => {
const cardStyles = {
    backgroundColor: color,
    h1:title,
    icon:icon,
};
    return (
        <section onClick={clicktoCard} style={cardStyles} className={styles.sectio}>
            <img src={icon} alt="icone" />
            <h2>{title}</h2>
            <Link to={link}></Link>
        </section>
    )
}

export default CardHome;