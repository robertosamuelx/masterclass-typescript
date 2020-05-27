interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: Array<string>;
}

interface IMail {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(mail: IMail): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMail) {
        console.log(`email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;