import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey(process.env.NEXT_PUBLICK_SENDGRID_API_KEY);
  const { name, email, phone, message } = req.body;

  const content = {
    to: 'sales@rbbcrealty.com',
    from: 'sales@rbbcrealty.com',
    subject: `New Message From - ${name} | ${email} | ${phone}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    res.status(400).json({ message: 'Please try again' });
  }
};
