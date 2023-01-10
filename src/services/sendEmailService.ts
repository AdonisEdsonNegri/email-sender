import * as nodemailer from "nodemailer";
import dotenv from "dotenv";
import EmailData from "../dtos/emailData.DTO";
dotenv.config();

export class SendEmailService {
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "0"),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: { rejectUnauthorized: false },
    });

    execute(emailData: EmailData) {
        let mailOpt = {
            from: "_mainaccount@softclever.com.br",
            to: "cesargustavo53@gmail.com",
            subject: "[Site] Mensagem para Contato",
            text: `Nome: ${emailData.nome}\nEmpresa: ${emailData.empresa}\nTelefone: ${emailData.telefone}\nEmail: ${emailData.email}\n\nMensagem do usuário:\n${emailData.mensagem}`,
        };

        this.transporter.sendMail(mailOpt, (error, info) => {
            if (error) {
                throw new Error(error.message);
            } else {
                console.log("Email enviado: " + info.response);
            }
        });
    }
}
