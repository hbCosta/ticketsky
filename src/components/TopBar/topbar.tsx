/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import './style.css';

import Image from 'next/image';
import { ButtonCad } from '../Button/buttoncadastrar';
import { ButtonLogin } from '../Button/buttonlogin';


export const TopBar = () =>{
    return(
        <div className='topbar'>
            <div className='itens'>
                <img src="https://media.discordapp.net/attachments/1082418803859791895/1086439373962219570/PNG-03_1.png?width=606&height=606" alt="logo" />     
                <div className='butLogin'><Link href=''><ButtonLogin/></Link></div>
                <div className='butCad'><Link href=''><ButtonCad/></Link></div>
            </div>
        </div>

    )
}