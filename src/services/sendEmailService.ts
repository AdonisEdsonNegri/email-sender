import * as nodemailer from "nodemailer";

export class SendEmailService {
    transporter = nodemailer.createTransport({
        host: "mail.softclever.com.br",
        port: 465,
        secure: true,
        auth: {
            user: "esfnetbr",
            pass: "soft@1973824650",
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
