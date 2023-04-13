/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

import Link from 'next/link'
import './style.css'

export const Login =()=>{
    const [email, setEmail] = useState('');
    const[senha, setSenha] = useState('');



    return(
        <div className="login">
            <h1 className='h1'><img src="https://media.discordapp.net/attachments/1082418803859791895/1086439374255816714/PNG-04.png?width=606&height=606" alt="logo" /></h1>
            <form >
                <input
                    autoFocus
                    onChange={(e)=> setEmail(e.target.value)} 
                    name='email' 
                    type="text" 
                    placeholder="Email"  
                    value={email}
                />
                <br /><br/>
                <input 
                    onChange={(e)=> setSenha(e.target.value)}
                    name='senha' 
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                />
                <br/> <br />
                <button type='submit'>Login</button>
                <br />
                <div>
                    <p>Não possui cadastro? 
                        <Link href="/cadastro">cadastre-se</Link>
                        </p>
                </div>
            </form>
        </div>
    )

}