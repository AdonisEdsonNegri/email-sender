import { Request, Response } from "express";
import { SendEmailService } from "../services/sendEmailService";

export class SendEmailController {
    constructor(private sendEmailService: SendEmailService) {}

    handle(request: Request, response: Response) {
        let to = request.body["to"];
        let title = request.body["title"];
        let body = request.body["body"];

        if (!to) {
            response.json({ erro: "Email de contato não informado" });
        }
        if (!title) {
            response.json({ erro: "Titulo do email não informado" });
        }
        if (!body) {
            response.json({ erro: "Corpo do email não informado" });
        }

        this.sendEmailService.execute(to, title, body);
        return response.json({result: "Email enviado com sucesso"}).status(200);
    }
}
