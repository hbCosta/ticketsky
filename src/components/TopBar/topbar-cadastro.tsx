/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import './styletopBarCadastro.css';




export const TopBarCadastro = () =>{
    return(
        <div className='topbarCadastro'>
            <div className='itens'>
                <Link href='/'><img src="https://media.discordapp.net/attachments/1082418803859791895/1086439373962219570/PNG-03_1.png?width=606&height=606" alt="logo" />     
</Link>
            </div>
        </div>

    )
}