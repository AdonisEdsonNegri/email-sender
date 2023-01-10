import { Request, Response } from "express";
import EmailData from "../dtos/emailData.DTO";
import { SendEmailService } from "../services/sendEmailService";

export class SendEmailController {
    constructor(private sendEmailService: SendEmailService) {}

    handle(request: Request, response: Response) {
        let emailData
        try {
            emailData = new EmailData(request);
        } catch (error) {
            if(error instanceof Error){
                response.json({erro: error.message}).status(400);
                return;
            }
        }

        if(emailData){
            this.sendEmailService.execute(emailData);
            response.json({result: "Email enviado com sucesso"}).status(200);
            return;
        }
    }
}
