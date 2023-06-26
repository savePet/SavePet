import { CardAdotePet } from '../../components/cardAdotePet/CardAdotePet'
import styles from './index.module.css'


/*const enum Raca {
    Viralata = 'Viralata',
    Pitbul = 'Pitbul',
    Labrador = 'Labrador',
    Pastoralemao = 'Pastoralemao',
    Chihuahuas = 'Chihuahuas',
    Boxers = 'Boxers',
    Sharpeis = 'Sharpeis',
    Rottweilers = 'Rottweilers',
    Bulldogs = 'Bulldogs',
    Golden = 'Golden',
    Siames = 'Siames',
    Persa = 'Persa',
    Mainecoon = 'Mainecoon',
    Sphynx = 'Sphynx',
    Bengal = 'Bengal',
    Ragdoll = 'Ragdoll',
    Scottish = 'Scottish',
    Americanshorthair = 'Americanshorthair',
    Devonrex = 'Devonrex'
}*/
export const AdotePet = () => {

    return(
        <section className={styles.section_container}>
            <div className={styles.select_container}>
                <h1 className={styles.text}><span className={styles.textSpan}>Encontre</span> seu <span className={styles.textSpan}>Pet</span> <br/></h1>
                <div>
                    <select className={styles.select} name="raca" placeholder='Raça'>
                        <option></option>
                    </select>
                    <select name="Cor" placeholder='Cor'></select>
                    <select name="Genero" placeholder='Genero'></select>
                </div>
            </div>
            <section className={styles.section_card}>
                <CardAdotePet />
                <CardAdotePet />
            </section>
            
        </section>
    )
}  