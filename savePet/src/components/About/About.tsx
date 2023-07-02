import { useState } from 'react';
import styles from './index.module.css'

interface ListItem {
    id: number;
    label: string;
    message: string;
}

export const About: React.FC = () => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const handleItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
        // setSelectedLabel(item);
        // console.log(item.id)
    };


    const listaItens: ListItem[] = [
        { id: 0, label: 'Quem somos', message: "Somos uma equipe que luta pela causa animal, dando apoio ao número máximo de animais em estado de rua ou abandono, para que os mesmos tenham uma vida digna com o mínimo para sua sobrevivência." },
        { id: 1, label: 'O que fazemos', message: 'NA DÚVIDA, AJUDE.NA CERTEZA, ADOTE.Nós da Animal Save somos bons em organização e arrecadação de recursos.Nosso objetivo é prestarprestar ajuda qualificada a quem já ajuda os animais.' },
        { id: 2, label: 'Como Fazemos', message: 'Nosso processo funciona a base da colaboração de todos, cadastrando uma ocorrência sempre que encontrar um animal desabrigado ou em situação de risco, a partir desse momento nossos colaboradores se encarregam de cuidar do pet e encontrar um lar para o mesmo.' },
        { id: 3, label: 'Porque Fazemos', message: 'Fazemos porque sentimos a necessidade de dar uma condição de vida digna a quantidade máxima de pets que esteja ao nosso alcance, sem fazer distinção, todos têm o direito de comida, lar e acima de tudo, muito carinho por parte dos seus donos.' },
    ];

    return (
        <section className={styles.footer}>
            <div className={styles.contato}>
                <h1 className={styles.contatoh}>Conheça</h1>
            </div>
            <div className={styles.render}>
                <div className={styles.list} >
                    <ul>
                        {listaItens.map((item) => (
                            <li key={item.id}
                                className={`${styles.topics} ${selectedItemId === item.id ? styles.selected : ''}`}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.info}>
                    <div className={styles.result}>
                        {selectedItemId !== null && (
                            <h2>{listaItens[selectedItemId].message}</h2>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}