import { Link } from 'react-router-dom';
import styles from './index.module.css'
import { ArrowRight } from '@phosphor-icons/react';

interface BtnProps {
    title: string;
    icon: string;
    link: string;
    // color: string;
}

const ButtonNxt: React.FC<BtnProps> = ({ title, link, icon }) => {
    const cardStyles = {
        title: title,
        backgroundImage: `url({icon})`,
    };

    return(
    <a href = { "/" + link } >
            <section style={cardStyles} className={styles.sectio}>
                <h2>{title}</h2>
                <img src={icon} alt="" />
                <ArrowRight size={30} color="#fff" weight="light" />
                <Link to={link}></Link>
            </section>
    </a >  
    )
}
export default ButtonNxt;