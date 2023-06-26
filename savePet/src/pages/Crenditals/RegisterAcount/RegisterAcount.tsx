import ButtonNxt from '../../../components/Button/Button'
import CardType from '../../../components/CardType/CardType'
import styles from './index.module.css'


import house from '../../../assets/house-light.svg'
import { Link } from 'react-router-dom'

export const RegisterCount = () => {
    return (
        <main className={styles.main}>
            <div className={styles.login}>
                <p>Ja tem conta? <a href='' style={{ color: '#1F7BF4' }}><Link to="/Login">Entrar</Link></a></p>
            </div>
            <div className={styles.info}>
                <h1>
                    Escolha a sua forma de ajudar
                </h1>

                <h3>
                    Selecione o tipo de colaboração para que você<br></br> fornecera para que possamos proseguir com o<br></br> processo de cadastro .
                </h3>
            </div>
            <div className={styles.type}>
                <CardType
                    icon={house}
                    title='Protetora' link={'Auth'} cont='Você ficara responsavel por abrigar temporariamente nossos amiguinhos de 4 patas que não tem lar. '
                />
                <CardType
                    title='Forncededor' link={''} cont={'Será o responsavel pelo fornecimento de, desde rações a assistencia medica e entre outros.'}
                />
                <CardType
                    title='Administrador' link={''} cont={'Será o responsavel pelo conteudo do site e aprovação de novos cadastros de fornecedores e protetores.'}
                />
            </div>
            <div className={styles.footer}>
                <p>
                    *Todas as novas requisições de<br></br> cadastros estão sujeitas a analise e<br></br> verificação do administrador
                </p>
                {/* <a href=""><Link to="/Login"> Voltar</Link></a> */}
                <div className={styles.btns}>
                    <ButtonNxt
                        title="Próximo"
                        icon=''
                        link='Auth'
                    />
                </div>
            </div>
        </main>
    )
}