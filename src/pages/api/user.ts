import  query  from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";



type Data ={
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const email = req.body.email
  const senha = req.body.senha


  if(req.method == "GET"){
    const users =  query({
      query: "SELECT * FROM usuario WHERE usuario.email = ? AND usuario.senha = ?",
      values: [req.query.email, req.query.senha],
    })
  } else if(req.method == "POST"){
    await query({ 
    query: "INSERT INTO `cadastrousuario`.`usuario` (`email`, `senha`) VALUES(?, ?)",
    values:[email, senha]
    })
  }

}


