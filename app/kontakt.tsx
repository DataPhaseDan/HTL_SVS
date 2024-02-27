

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ContactForm: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		// Here you can handle the form submission, e.g., send an email
		console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
	};



	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formName">
				<Form.Label>Name</Form.Label>
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				<Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e: { target: { value: any; }; }) => setName(e.target.value)} />
			</Form.Group>

			<Form.Group controlId="formEmail">
				<Form.Label>Email address</Form.Label>
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)} />
			</Form.Group>

			<Form.Group controlId="formMessage">
				{/* <Form.Label>Message</Form.Label> */}
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				<ReactQuill theme="snow" value={message} onChange={(value: any) => setMessage(value)} />

			</Form.Group>

			<Button classname="pt-2" variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default ContactForm;