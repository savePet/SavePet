import { Link } from 'react-router-dom';
import styles from './index.module.css'
import { ArrowRight } from '@phosphor-icons/react';

interface BtnProps {
    title: string;
    icon: string;
    link: string;
    // color: string;
}

const ButtonNxt: React.FC<BtnProps> = ({ title, link,icon }) => {
    const cardStyles = {
        title: title,
        backgroundImage: `url({icon})`,
    };

    return (
            <a href={"/" + link} style={cardStyles} className={styles.sectio} >
                <h2>{title}</h2>
                <img src={icon} alt="" />
                <Link to={link}></Link>
                <ArrowRight size={30} color="#fff" weight="light" />
            </a >
    )
}
export default ButtonNxt;