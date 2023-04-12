/* eslint-disable @next/next/no-img-element */
import { TopBarCadastro } from '@/components/TopBar/topbar-cadastro';
import '../global-css.css';
import './style.css';
import { useState } from 'react';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const[senha, setSenha] = useState('');


    return(
        <><TopBarCadastro />
            <div className="cadastro">
                <h1 className='h1'><img src="https://media.discordapp.net/attachments/1082418803859791895/1086439374255816714/PNG-04.png?width=606&height=606" alt="" />
                </h1>
                <div><h1>Cadastro de Cliente</h1></div>
                <br />
                <div><input type="text" placeholder='email' /></div>
                <br />
                <div><input type="password" placeholder='senha' /></div>
                <br />
                <div><input type="password" placeholder='confirme a senha' /></div>
                <br />
                <div className='divbuton'><button>cadastrar</button></div>
            </div>
        </>
    );
}

export default Cadastro;
