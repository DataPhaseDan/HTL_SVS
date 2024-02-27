import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmailForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event:React.FormEvent ) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    // and handle the email sending server-side using Nodemailer.
    console.log({ recipient, subject, message });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formRecipient">
        <Form.Label>Recipient</Form.Label>
        <Form.Control disabled type="email" placeholder="Enter email" value={recipient} onChange={e => setRecipient(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={e => setMessage(e.target.value)} />
      </Form.Group>

      <Button className="pt2" variant="success" type="submit">
        Nachricht senden
      </Button>
    </Form>
  );
};

export default EmailForm;