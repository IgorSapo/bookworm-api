import nodemailer from 'nodemailer';

const from = '"Bookworm" <info@bookworm.com>';

const setup = () =>
  nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

export const sendConfirmationEmail = user => {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Bookworm',
    text: `Welcome to Bookworm. Please, confirm your email. ${user.generateConfirmationUrl()}`
  };
  transport.sendMail(email);
};

export const sendResetPasswordEmail = user => {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Reset Password',
    text: `To reset password, follow this link ${user.generateResetPasswordLink()}`
  };
  transport.sendMail(email);
};