import { Link } from 'react-router-dom';
import styles from './index.module.css'
import { ArrowRight } from '@phosphor-icons/react';

interface BtnProps {
    title: string;
    icon: string;
    link: string;
    // color: string;
}

const ButtonNxt: React.FC<BtnProps> = ({ title, link }) => {
    const cardStyles = {
        title: title,
        backgroundImage: `url({icon})`,
    };

    return (
        <section style={cardStyles} className={styles.sectio2} >
            <a href={"/" + link} >
                <h2>{title}</h2>
                {/* <img src={icon} alt="" /> */}
                <Link to={link}></Link>
                {/* <ArrowRight size={10} color="#fff" weight="light" /> */}
            </a >
        </section>
    )
}
export default ButtonNxt;