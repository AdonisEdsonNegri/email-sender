import * as nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config();

export class SendEmailService {
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '0'),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: { rejectUnauthorized: false },
    });

    async execute(to: string, title: string, body: string) {
        let mailOpt = {
            from: "_mainaccount@softclever.com.br",
            to: 'softclever@softclever.com.br',
            subject: title,
            text: `Mensagem do usuário: "${body}"\nEmail para contato: ${to}`,
        };

        await this.transporter.sendMail(mailOpt, (error, info) => {
            if (error) {
                throw new Error(error.message);
            } else {
                console.log("Email enviado: " + info.response);
            }
        });
    }
}
