import { Link } from 'react-router-dom'
import adm from '../../../assets/adm.svg'
import fornecedor from '../../../assets/fornecedor1.svg'
import house from '../../../assets/house-light.svg'
import ButtonNxt from '../../../components/Button/Button'
import CardType from '../../../components/CardType/CardType'
import styles from './index.module.css'

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
                    title='Protetora' link={'ProtectorP1'} iconName="house" cont='Você será encarregado de manter os nossos amigos de quatro patas em abrigo temporário. '
                />
                <CardType
                    icon={fornecedor}
                    title='Forncededor' link={'FornCreden'} cont={'A empresa será responsável pelo fornecimento de produtos, desde alimentos até assistência médica.'}
                />
                <CardType
                    icon={adm}
                    title='Administrador' link={'AdmInfo'} cont={'Será o responsável pelo conteúdo do site e pelo registro de novos fornecedores e protetores.'}
                />
            </div>
            <div className={styles.footer}>
                <p>
                    *Todas as novas requisições de<br></br> cadastros estão sujeitas a análise e<br></br> verificação do administrador
                </p>
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