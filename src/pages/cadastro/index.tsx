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
                <div><input name='email'                     onChange={(e)=> setEmail(e.target.value)} 
 type="text" placeholder='email' value={email} /></div>
                <br />
                <div><input name='senha' type="password" placeholder='senha' value={senha} onChange={(e)=> setSenha(e.target.value)} /></div>
                <br />
                <div><input name='confirmarsenha' type="password" placeholder='confirme a senha' /></div>
                <br />
                <div className='divbuton'><button type='submit'>cadastrar</button></div>
            </div>
        </>
    );
}

export default Cadastro;
