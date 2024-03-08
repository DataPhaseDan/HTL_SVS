import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import nodemailer from 'nodemailer';

const EmailForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.office365.com',
  //   port: 587,
  //   auth: {
  //     user: 'Test.1abbt@htl-salzburg.ac.at',
  //     pass: 'daniel#RENNER90'
  //   }
  // });

  const handleSubmitEmail = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    // and handle the email sending server-side using Nodemailer.
    console.log({ recipient, subject, message });


    // try {
    //   // if (recipient === "") {
    //   //   throw new Error("No email address provided");
    //   // }
    //   console.log("Success");
    //   // await transporter.sendMail({
    //   // 	from: transporter.options.from?.toString(),
    //   // 	to: recipient,
    //   // 	subject: subject,
    //   // 	text: message,
    //   // });
    //   // If the email is sent successfully, you can send a success response to the client
    //   // res.status(200).json({ message: "Email sent successfully" });
    // } catch (error) {
    //   // If an error occurs while sending the email, log the error and send an error response
    //   console.error(error);
    //   // Determine the appropriate status code and message based on the error
    //   let statusCode = 500;
    //   let message = "An error occurred while sending the email.";
    //   if ((error as Error).message === "No email address provided") {
    //     statusCode = 400; // Bad Request
    //     message = "Sie haben keine Kontaktmailadresse angegeben!";
    //   } else if ((error as Error).message === "Keine Session gefunden!") {
    //     statusCode = 410; // Gone
    //     message = "Keine Session gefunden!";
    //   }
    //   // res.status(statusCode).json({ message: message });
    // }
  }


  return (
    <Form onSubmit={handleSubmitEmail}>
      <Form.Group controlId="formRecipient">
        <Form.Label>Empfänger</Form.Label>
        <Form.Control disabled type="email" placeholder="Enter email" value={recipient} onChange={e => setRecipient(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formSubject">
        <Form.Label>Betreff</Form.Label>
        <Form.Control type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-1' controlId="formMessage">
        <Form.Label>Nachricht</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
      </Form.Group>

      <Button className="mt-1" variant="success" type="submit">
        Nachricht senden
      </Button>
    </Form>
  )
};


export default EmailForm;