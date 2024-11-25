import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configuración del transportador para SendGrid
    this.transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587, 
      secure: false, 
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY, 
      },
    });
  }

  async sendMail(to: string, subject: string, text: string, html?: string): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from: 'frentealmarrestaurante@gmail.com', // Usa un correo validado en SendGrid
        to, 
        subject, 
        text,
        html,
      });

      console.log(`Correo enviado: ${info.messageId}`);
    } catch (error) {
      console.error(`Error enviando correo: ${error}`);
      throw error;
    }
  }
}

export default EmailService;
