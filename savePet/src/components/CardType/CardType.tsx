import { Link } from 'react-router-dom';
import * as Icon from "@phosphor-icons/react";
import styles from './index.module.css';


interface CardTypeProps {
    title: string;
    color?: string;
    iconName?: string;
    icon?: string
    link: string;
    cont?: string
}
function clicktoCard(link: string) {
    window.open("/" + link, "_self")
    console.log("/" + link)
    console.log(link)
}


const CardType: React.FC<CardTypeProps> = ({ title, link, color, iconName, cont, icon }) => {
    const cardStyles = {
        backgroundColor: color,
        h1: title,
        cont: cont
    };


    // Função para renderizar o ícone com base no nome fornecido
    // const renderIcon = (iconName: string | undefined) => {
    //     if (iconName && Icon[iconName]) {
    //         const IconComponent = Icon[iconName];
    //         return <IconComponent size={24} />
    //     }
    //     return null;
    // }
    return (
        <a href={"/" + link} style={cardStyles} className={styles.sectio}>
            {/* {renderIcon(iconName)} */}
            {/* {renderIcon(icon)} */}
            <img src={icon} alt="icone"  style={{width:'70px'}}/>
            <h1>{title}</h1>
            <h3>{cont}</h3>
            <Link to={link}></Link>
        </a>
    )
}

export default CardType;