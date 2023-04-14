//import mysql from 'serverless-mysql';

import mysql from 'mysql2/promise';

export  async function query({query, values =[]}: any){
  const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
})
  try{
      const [results] = await db.query(query, values);
      await db.end();
      return results;
  } catch (error: any) {
      return (error);
  }
}

