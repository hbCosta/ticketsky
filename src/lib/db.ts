//import mysql from 'serverless-mysql';

import mysql from 'mysql2/promise';

export  async function query({query, values =[]}: any){
  const db = await mysql.createConnection({
    host: 'localhost',
    database: 'cadastrousuario',
    user: 'root',
    password: 'refrigerantegelado123',
})
  try{
      const [results] = await db.query(query, values);
      await db.end();
      return results;
  } catch (error: any) {
      return (error);
  }
}

