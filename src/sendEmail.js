import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'uzelemehmet@gmail.com',
            pass: 'qurxzorlroqjfazs'
        }
    });

    const mailOptions = {
        from: 'uzelemehmet@gmail.com',
        to: to || 'uzelemehmet@gmail.com',
        subject: subject || 'Yeni Müşteri Mesajı',
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'E-posta başarıyla gönderildi.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'E-posta gönderilemedi.' });
    }
});

app.listen(3001, () => console.log('Email sunucusu port 3001\'de çalışıyor...'));