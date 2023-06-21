import styles from './index.module.css'
import logo from '../../assets/Logo.svg'
import { Eye } from "@phosphor-icons/react";
import { DownloadOutlined } from '@ant-design/icons';
import ButtonNxt from '../../components/Button/Button';
import React from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';


export const Login = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <main className={styles.view}>
            <div>
                <img src={logo} className={styles.logo} alt="" />
            </div>
            <section className={styles.content}>
                <div className={styles.credentials}>
                    <h1>Entrar</h1>
                    <label htmlFor="">E-mail de cadastro</label>
                    <Input placeholder='Digite seu E-mail' />

                    <label htmlFor="">Senha</label>
                    {/* <input type="text" placeholder="Digite sua senha" style={{ width: '90%' }} /> */}
                    <Input.Password placeholder="Digite sua senha" />

                    <p className={styles.p}><a href="">Esqueci minha senha </a></p>
                    <ButtonNxt
                        title="Entrar"
                        icon=''
                        link=''
                    />
                    <p className={styles.pssw}>Não tem uma conta? <a href="" style={{ color: '#1F7BF4' }}>Cadastre-se</a></p>
                </div>
                <div className={styles.info}>
                    <h1>Animal Save</h1>
                    <h3>
                        Nós da Animal Save somos bons em organização e
                        arrecadação de recursos. <br /> Nosso objetivo é prestar ajuda qualificada a quem já ajuda os animais.
                    </h3>
                    <p className={styles.pssw}><a href="" style={{ color: '#1F7BF4', fontWeight: 'bold' }}> Saiba mais </a></p>
                </div>
            </section>
        </main >
    )
}