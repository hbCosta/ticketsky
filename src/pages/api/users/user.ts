import { query } from "@/lib/db";


import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  const body = req.body
  if(req.method == "GET"){
    const users = await query({
      query: "SELECT * from usuario WHERE usuario.email = ? AND usuario.senha = ?",
      values:[req.query.email, req.query.senha],
    })
    console.log(users)
  }else if(req.method == "POST"){
    const email = body.email
    const senha = body.senha
    await query({
      query: "INSERT INTO usuario(email, senha) VALUES(?, ?)",
    })
  }
}





/*
type Data ={
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const body = req.body


  if(req.method == "GET"){
    const users =  query({
      query: "SELECT * FROM usuario WHERE usuario.email = ? AND usuario.senha = ?",
      values: [req.query.email, req.query.senha],
    })
    console.log(users)

    if(users != null){

      res.redirect(307, '/?v=logado') 

    }else{

      res.redirect(307, '/?v=na')

    }
  } else if(req.method == "POST"){
    const email =  body.email
    const senha = body.senha
    await query({ 
    query: "INSERT INTO usuario (email, senha) VALUES(?, ?)",
    values:[email, senha]
    })
    //res.redirect(307, '/v=cadastro')
  }

}

*/