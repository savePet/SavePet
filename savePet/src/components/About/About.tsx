import { useState } from 'react';
import styles from './index.module.css'

interface ListItem {
    id: number;
    label: string;
    message: string;
}

export const About: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<ListItem | null>(null);

    const handleItemClick = (item: ListItem) => {
        setSelectedItem(item);
        setSelectedLabel(item);
        console.log(item.id)

    };


    const listaItens: ListItem[] = [
        { id: 0, label: 'Quem somos', message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis non fefeeefeffqefvevrjttmfbdbvvrvvsawdxxaeffedem?" },
        { id: 1, label: 'O que fazemos', message: 'NA DÚVIDA, AJUDE.NA CERTEZA, ADOTE.Nós da Animal Save somos bons em organização e arrecadação de recursos.Nosso objetivo é prestarprestar ajuda qualificada a quem já ajuda os animais.' },
        { id: 2, label: 'Como Fazemos', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis non deserunt, necessitatibus amet, ea sed voluptatem esse et voluptatum illo accusamus ratione eaque blanditiis. Porro illum est harum qui quidem?' },
        { id: 3, label: 'Porque Fazemos', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. vnvjrntnkksrrkgv,dbrkkrpokçvçrkrpkprvç,rkfsçkeksflawfak kp vvsvksvskskvsk' },
    ];

    return (
        <section className={styles.footer}>
            <div className={styles.contato}>
                <h1 className={styles.contatoh}>Conheça</h1>
            </div>
            <div className={styles.render}>
                <div className={styles.list } >
                    <ul>
                        {listaItens.map((item) => (
                            <li key={item.id} className={styles.topics} onClick={() => handleItemClick(item)} >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.info}>
                    <div className={styles.result}>
                        {selectedItem && (
                            <h2>{selectedItem.message}</h2>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}



