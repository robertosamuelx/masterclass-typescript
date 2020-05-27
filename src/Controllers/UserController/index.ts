import {Request, Response} from 'express';
import EmailService from '../../services/EmailService';

const users = [
    { name: 'Betin', email: 'betin@betin.com.br'}
];

export default {
    async index(req:Request,res:Response){
        return res.json(users);
    },

    async create(req:Request,res:Response){
        const emailService = new EmailService();

        emailService.sendMail(
            {
                to: {
                    name: 'Betin',
                    email: 'betin@betin.com'
                },
                message: {
                    body: 'Seja bem vindo Betin',
                    subject: 'Olar'
                }
            }
        );

        return res.send('Done');
    }
};