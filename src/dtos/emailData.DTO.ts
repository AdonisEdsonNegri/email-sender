import { Request } from "express";

export default class EmailData {
    nome: string;
    empresa: string;
    telefone: string;
    email: string;
    mensagem: string;

    constructor(request: Request) {        
        this.nome = request.body["nome"];
        this.empresa = request.body["empresa"];
        this.telefone = request.body["telefone"];
        this.email = request.body["email"];
        this.mensagem = request.body["mensagem"];

        for (const key in this) {
            if(this[key] == undefined){
                throw new Error(`O campo '${key}' é obrigatório`);
            }
        }
    }

}