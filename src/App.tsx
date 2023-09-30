
//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>


import { useState } from 'react';
import { Form, Button, Col, Row, Container, FloatingLabel } from 'react-bootstrap'

function getYear() {
	const date = new Date();
	const year = date.getFullYear();
	const nextYear = year + 1;
	return `${year}/${nextYear}`;
}


function App() {
	const [currentDate] = useState(getYear());
	return (
		<Container >
			<h2 className='mt-5 mb-5'>Anmeldung an der HTL für Berufstätige</h2>
			<h3 className='mt-5 mb-5'>Schuljahr {currentDate} </h3>
			<Form >
				<Row className="mb-3 mt-5">
					<Form.Group as={Col} >
						<FloatingLabel
							controlId="formVorname"
							label="Vorname">
							<Form.Control type="text" placeholder="Vorname" />
						</FloatingLabel>
					</Form.Group >

					<Form.Group as={Col} >
						<FloatingLabel
							controlId="formNachname"
							label="Nachname">
							<Form.Control type="text" placeholder="Nachname" />
						</FloatingLabel>
					</Form.Group>
				</Row>


				<Form.Group as={Col} className='mt-5 mb-3' >
					<FloatingLabel
						label="E-mail"
						controlId="formEmail">
						<Form.Control type="email" placeholder="ihre@email.hier" />
						<Container className='mt-2'>
							<Form.Text id="emailHelpBlock" muted >
								Über diese E-Mail Adresse müssen Sie im Verlauf des Aufnahmeprozesses erreichbar sein.
								An diese E-Mail Adresse werden Bestätigungen und Terminverständigungen geschickt.
								Eine Änderung ist unbedingt bekannt zu geben.
								Die E-Mail Adresse muss von einem Erziehungsberechtigten abgerufen werden.
							</Form.Text>
						</Container>
					</FloatingLabel>
				</Form.Group>


				<Form.Group as={Col} className="mb-3 mt-5" >
					<FloatingLabel
						controlId='formSelectFachrichtung'
						label="Bitte wählen Sie die gewünschte Fachrichtung"
						className='pt-1 mt-3'>
						<Form.Select >
							<option></option>
							<option>Abend-HTL für Berufstätige (Bautechnik) </option>
							<option>Abend-HTL für Berufstätige (Elektrotechnik)</option>
							<option>Abend-HTL für Berufstätige (Informatik)</option>
							<option>Abend-HTL für Berufstätige (Maschinenbau)</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>

				<Row className="mb-3">
					<Form.Group as={Col} >
						<FloatingLabel
							controlId="formGridState"
							label="Geburtsdatum"
							className='pt-1 mt-3'
						>
							{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
							<Form.Control
								type="date"
								id="inputBirthDate"
								title="Bitte geben Sie ihr Geburtsdatum ein."

							/>
						</FloatingLabel>
					</Form.Group>
				</Row>
				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
