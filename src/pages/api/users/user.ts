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
      values:[email, senha],
    })
  }
}
