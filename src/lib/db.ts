//import mysql from 'serverless-mysql';

import mysql from 'mysql2/promise';

export default async function executeQuery({query, values}: any){
    const db = await mysql.createConnection({
            host: 'localhost',
            database: 'cadastrousuario',
            user: 'root',
            password: 'refrigerantegelado123'        
        }
    )

    const [email, senha] = await db.execute('SELECT * FROM cadastrousuario.usuario')
    console.log(email);
    console.log(senha);

        try{
            const results = await db.query(query, values);
            await db.end();
            return results;
        } catch (error) {
            return (error);
        }
}