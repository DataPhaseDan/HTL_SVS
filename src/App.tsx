
//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>


import { Form, Button, Col, Row, Container,FloatingLabel } from 'react-bootstrap'

function App() {
	return (
		<Container >
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


					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Geburtsdatum</Form.Label>
						<Form.Select defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
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
