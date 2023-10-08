
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
					<Container className='mt-2 mb-2' style={{ whiteSpace: 'pre-wrap' }}>
						<Form.Text id="DsgvoState" muted  >
							<p>
								Datenschutzgrundverordnung
							</p>
							<p>

								Einwilligung
								Art. 7 DSGVO
							</p>
							<p>Ich bin damit einverstanden, dass die angeführten personenbezogenen Daten ausschließlich für schulische und organisatorische Zwecke teilweise oder vollständig verarbeitet werden.</p>
							<p>

								Speicherdauer:
								<br />
								Die personenbezogenen Daten werden von der HTBLuVA Salzburg nur so lange gespeichert, wie es unter Einhaltung der einschlägigen gesetzlichen Bestimmungen zur Erfüllung des jeweils genannten Zwecks notwendig ist, oder solange gespeichert, als gesetzliche Aufbewahrungsfristen bestehen oder Verjährungsfristen betreffen potentieller Rechtsansprüche noch offen sind.
							</p>
							<p>
								Als personenbezogene Daten werden verarbeitet:
								<br />
								Vor- und Zuname der/des Studierenden, Wohnadresse, Geburtsdatum, IP-Adressen und Kontaktdaten des Internetproviders, Versicherungsnummer, Religionsbekenntnis, Muttersprache, Staatsbürgerschaft, Telefonnummern.
							</p>
							<p>
								Verwendungszwecke für die personenbezogene Datenverarbeitung sind:
								<br />
								<p>
									WebUntis inkl. Fotos (elektronisches Tagebuch), Klassenlisten, Schulbuchlisten, AUVA Meldungen, Netz- und E-Mail-Account, elektronische Zutrittssysteme, Schulgeldverwaltung (edu.PAY), Schulfotografie, Bezirksverwaltungsbehörden, Magistrat, Polizei.
								</p>
								<p>
									Zudem gebe ich die Einwilligung, dass Fotos bzw. Videos veröffentlicht werden dürfen (z.B. Homepage der Schule, Jahresbericht der Schule, lokale Medien und Berichte in Tageszeitungen, Rundfunk und Fernsehen).
								</p>

								Dem Unterfertigten steht grundsätzlich das Recht auf Auskunft, Berechtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Diese Rechte können gegenüber der HTBLuVA Salzburg geltend gemacht werden, wenn die Verarbeitung der personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt oder datenschutzrechtliche Ansprüche sonst in einer Weise verletzt worden sind. Dann ist eine Beschwerde an die Österreichische Datenschutzbehörde als zuständige Aufsichtsbehörde gemäß Art. 77 DSGVO zu erheben. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
							</p>
						</Form.Text>

					</Container>

					<Form.Check type="checkbox" label="Ich stimme der Datenschutzgrundverordnung der HTBLuVA Salzburg zu." />

				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
