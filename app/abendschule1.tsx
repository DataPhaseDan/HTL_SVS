import { PhoneNumberUtil, PhoneNumberType } from "google-libphonenumber";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { sha3_512 } from 'js-sha3';
import {
	Accordion,
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Modal,
	ProgressBar,
	Row,
} from "react-bootstrap";

const Abendschule1: React.FC = () => {
	const [selectedFachrichtung, setSelectedFachrichtung] = useState("");
	const [validated, setValidated] = useState(true);
	const [currentDate] = useState(getYear());
	const [email, setEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isValid, setIsValid] = useState<boolean>(false);
	const [birthdate, setBirthdate] = useState("");
	const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	const inputRefVorname = useRef<HTMLInputElement>(null);
	const inputRefNachname = useRef<HTMLInputElement>(null);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	// const currentDateForOption = new Date();
	// const specificDateCutoff = new Date(currentDateForOption.getFullYear(), 1, 1);
	const [hash, setHash] = useState('');


	const handleBirthdateChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		//const birthdateValue = event.target.value;
		setIsBirthdateValid(validateBirthdate(event.target.value, 17)); // 14 is the age limit
		setBirthdate(event.target.value);
	};
	const generateHash = () => {
		const combinedInput = email + phoneNumber + inputRefNachname + inputRefVorname;
		const hash = sha3_512(combinedInput).substring(0, 20); // Adjust length as needed
		setHash(hash);
	};

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value.trim());


	};


	const handlePhoneBlur = () => {
		const phoneUtil = PhoneNumberUtil.getInstance();
		let isE164 = false;
		let isValid = false;

		try {
			const inputNumber = phoneUtil.parse(phoneNumber);
			isE164 = phoneUtil.getNumberType(inputNumber) === PhoneNumberType.MOBILE;
			isValid = phoneUtil.isValidNumber(inputNumber);
		} catch (err) {
			console.error(err);
		}

		setIsValid(isE164 ? isValid : false);
	};

	const validateBirthdate = (birthdate: string, ageLimit: number) => {
		const birthdateParts = birthdate.split(".");
		const birthYear = parseInt(birthdateParts[0], 10);
		const birthMonth = parseInt(birthdateParts[1], 10);
		const birthDay = parseInt(birthdateParts[2], 10);

		const currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based
		const currentDay = currentDate.getDate();

		let age = currentYear - birthYear;

		if (
			currentMonth < birthMonth ||
			(currentMonth === birthMonth && currentDay < birthDay)
		) {
			age--; // Subtract 1 from the age if the current date is before the birthdate in the current year
		}

		return age >= ageLimit;
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsEmailValid(validateEmail(event.target.value));
		setEmail(event.target.value.trim());
	};
	const handleSelectedFachrichtung = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedFachrichtung(event.target.value);
	};

	const validateEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	function getYear() {
		const date = new Date();
		const year = date.getFullYear();
		const nextYear = year + 1;
		return `${year}/${nextYear}`;
	}

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	const handleBlurVorname = () => {
		if (inputRefVorname.current) {
			const capitalized = capitalizeFirstLetter(inputRefVorname.current.value.trim());
			inputRefVorname.current.value = capitalized;
		}
	};

	const handleBlurNachname = () => {
		if (inputRefNachname.current) {
			const capitalized = capitalizeFirstLetter(inputRefNachname.current.value.trim());
			inputRefNachname.current.value = capitalized;
		}
	};

	useEffect(() => {
		if (isSubmitted) {
			setShowModal(true);
		}
	}, [isSubmitted]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formIsValid =
			form.checkValidity() && isEmailValid && isValid && isBirthdateValid;

		setValidated(true);


		// formData.append("email", email);
		// formData.append("phoneNumber", phoneNumber);
		// //formData.append("birthdate", birthdate);
		// formData.append("hash", hash);
		// formData.append("vorname", inputRefVorname.current?.value || "Error");
		// formData.append("nachname", inputRefNachname.current?.value || "Error");
		// formData.append("fachrichtung", selectedFachrichtung);

		// formData.append("laendervorwahl", phoneNumber.substring(0, 3));
		// formData.append("vorwahl", phoneNumber.substring(3, 6));
		// formData.append("nummer", phoneNumber.substring(6));
		// formData.append("dsgvo", "1");
		// formData.append("finalisiert", "0");
		// formData.append("Geburtsdatum", birthdate);

		try {
			// Construct the full URL for the POST request
			const serverUrl = 'https://localhost';
			const endpoint = '/registration/abendschule';
			const fullUrl = `${serverUrl}${endpoint}`;

			const dataForm = {
				// key1: 'value1',
				// key2: 'value2',
				// ... other data fields
			};

			// Make the POST request
			const response = await fetch(fullUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(dataForm),
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			console.log('Success:', data);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	// 		.then(response => {
	// 			// Handle the response here
	// 			console.log(response.json());
	// 			if (formIsValid && !isSubmitted && response.ok) {
	// 				setIsSubmitted(true);
	// 				setShowModal(true);
	// 			}
	// 		})
	// 		.catch(error => {
	// 			// Handle errors here
	// 			console.error(error);
	// 		});


	// } catch (error) {
	// 	console.error(error);
	// }
	return (
		<Container className="p-5 border" style={{ backgroundColor: "whitesmoke" }}>
			<Row className="justify-content-center">
				<Col xs={8}>
					<h2>Anmeldefortschritt</h2>
					<ProgressBar animated now={50} label={"50%"} />
	
					<h2 className="mt-5 mb-5">Anmeldung an der HTL für Berufstätige</h2>
					<h3 className="mb-5">Schuljahr {currentDate}</h3>
					<p>
						<strong>Sie können sich nur einmal anmelden!</strong>
					</p>
	
					<p className="h6">
						Für die Anmeldung sind die Abschlusszeugnisse ihrer bisherigen
						Ausbildungen notwendig.
					</p>
					<Form validated={validated} onSubmit={handleSubmit} method="post">
						<Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationVorname">
								<FloatingLabel
									controlId="formVorname"
									label="Vorname"
									className="pt-1"
								>
									<Form.Control
										required
										type="text"
										placeholder="Vorname"
										ref={inputRefVorname}
										onBlur={handleBlurVorname}
									// className="pt-4"
									// pattern="[A-Z][a-z]*"
									/>
									<Form.Control.Feedback type="invalid" className="mx-2 mb-3">
										Bitte geben Sie den Vornamen des Bewerbers an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-5 mt-4 ">
							<Form.Group controlId="validationNachname">
								<FloatingLabel
									controlId="formNachname"
									label="Nachname"
									className="pt-1"
								>
									<Form.Control
										required
										type="text"
										placeholder="Nachname"
										ref={inputRefNachname}
										onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie den Nachnamen des Bewerbers an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
	
						<Form.Group
							as={Col}
							className="mt-5 mb-3"
							controlId="validationEmail"
						>
							<FloatingLabel
								label="E-mail"
								controlId="formEmail"
								className="pt-1"
							>
								<Form.Control
									required
									type="email"
									value={email}
									onChange={handleEmailChange}
									isInvalid={!isEmailValid}
									className={isEmailValid ? "valid-input" : ""}
								//placeholder="ihre@email.hier"
								/>
								<Form.Control.Feedback
									type={isEmailValid ? "valid" : "invalid"}
									className="mx-2"
								>
									{isEmailValid ? (
										""
									) : (
										<strong>
											Bitte geben Sie die E-mail des Bewerbers an.
										</strong>
									)}
								</Form.Control.Feedback>
								<Container className="mt-2">
									<Form.Text id="emailHelpBlock" muted>
										Über diese E-Mail Adresse müssen Sie im Verlauf des
										Aufnahmeprozesses erreichbar sein. An diese E-Mail Adresse
										werden Bestätigungen und Terminverständigungen geschickt.
										Eine Änderung ist unbedingt bekannt zu geben.
										{/* Die E-Mail
											Adresse muss von einem Erziehungsberechtigten abgerufen
											werden. */}
									</Form.Text>
								</Container>
							</FloatingLabel>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mt-5 mb-3"
							controlId="validationPhone"
						>
							<FloatingLabel
								label="Tel. Nr."
								controlId="formPhone"
								className="pt-1"
							>
								<Form.Control
									required
									type="tel"
									// placeholder="+43 123 456 7890"
									value={phoneNumber}
									onChange={handlePhoneChange}
									onBlur={handlePhoneBlur}
									isInvalid={!isValid}
								/>
								<Form.Control.Feedback
									type={isValid ? "valid" : "invalid"}
									className="mx-2"
								>
									{isValid ? (
										""
									) : (
										<strong>
											Bitte geben Sie die Tel. Nr. des Bewerbers im Format +43
											664 12345678 ein.
										</strong>
									)}
								</Form.Control.Feedback>
								<Container className="mt-2">
									<Form.Text id="telHelpBlock" muted>
										Über diese Tel. Nr. müssen Sie im Verlauf des
										Aufnahmeprozesses erreichbar sein.
										{/* Die E-Mail
											Adresse muss von einem Erziehungsberechtigten abgerufen
											werden. */}
									</Form.Text>
								</Container>
							</FloatingLabel>
						</Form.Group>
	
						<Form.Group
							className="mb-3 mt-5"
							controlId="validationFachrichtung"
						>
							<FloatingLabel
								controlId="formSelectFachrichtung"
								label="Fachrichtung"
								// className="mt-5"
								className="pt-1"
							>
								<Form.Select required onChange={handleSelectedFachrichtung}>
									<option />
									<option>Abend-HTL für Berufstätige (Bautechnik)</option>
									<option>Abend-HTL für Berufstätige (Elektrotechnik)</option>
									<option>Abend-HTL für Berufstätige (Informatik)</option>
									<option>Abend-HTL für Berufstätige (Maschinenbau)</option>
								</Form.Select>
								<Form.Control.Feedback type="invalid" className="mx-2">
									Ihre 1. Wahl:
								</Form.Control.Feedback>
							</FloatingLabel>
						</Form.Group>
	
						<Row className="mb-5">
							<Form.Group controlId="validationGeburtsdatum">
								<FloatingLabel
									controlId="formGridState"
									label="Geburtsdatum"
									className="pt-1 mt-3"
								>
									{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
									<Form.Control
										type="date"
										id="inputBirthDate"
										required
										//pattern="\d{2}\.\d{2}\.\d{4}"
										title="Bitte geben Sie ihr Geburtsdatum ein."
										value={birthdate}
										onChange={handleBirthdateChange}
										isInvalid={!isBirthdateValid}
										className={isBirthdateValid ? "valid-input" : ""}
									/>
									<Form.Control.Feedback
										type={isBirthdateValid ? "valid" : "invalid"}
										className="mx-2"
									>
										{isBirthdateValid
											? ""
											: "Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein ."}
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
	
						<Form.Group className="mb-3" id="formGridCheckbox">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header className="text-break">
										Datenschutzgrundverordnung
									</Accordion.Header>
									<Accordion.Body className="text-wrap">
										<Container
											className="mt-2 mb-2 p-3 border 5px solid black"
											style={{
												wordWrap: "break-word",
												whiteSpace: "pre-wrap",
												overflowWrap: "break-word",
											}}
										>
											<Form.Text id="DsgvoState" muted>
												<p className="h5">Datenschutzgrundverordnung</p>
												<p className="h6 mb-4">Einwilligung Art. 7 DSGVO</p>
												<p>
													<em>
														Ich bin damit einverstanden, dass die angeführten
														personenbezogenen Daten ausschließlich für
														schulische und organisatorische Zwecke teilweise
														oder vollständig verarbeitet werden.
													</em>
												</p>
												<p className="h6">Speicherdauer:</p>
												{/* <br className='my-1' /> */}
												<p>
													<em>
														Die personenbezogenen Daten werden von der HTBLuVA
														Salzburg nur so lange gespeichert, wie es unter
														Einhaltung der einschlägigen gesetzlichen
														Bestimmungen zur Erfüllung des jeweils genannten
														Zwecks notwendig ist, oder solange gespeichert, als
														gesetzliche Aufbewahrungsfristen bestehen oder
														Verjährungsfristen betreffen potentieller
														Rechtsansprüche noch offen sind.
													</em>
												</p>
	
												<p className="h6">
													Als personenbezogene Daten werden verarbeitet:
												</p>
												{/* <br /> */}
												<p>
													<em>
														Vor- und Zuname der/des Studierenden, Wohnadresse,
														Geburtsdatum, IP-Adressen und Kontaktdaten des
														Internetproviders, Versicherungsnummer,
														Religionsbekenntnis, Muttersprache,
														Staatsbürgerschaft, Telefonnummern.
													</em>
												</p>
	
												<p className="h6">
													Verwendungszwecke für die personenbezogene
													Datenverarbeitung sind:
													{/* <br /> */}
												</p>
												<p>
													<em>
														WebUntis inkl. Fotos (elektronisches Tagebuch),
														Klassenlisten, Schulbuchlisten, AUVA Meldungen,
														Netz- und E-Mail-Account, elektronische
														Zutrittssysteme, Schulgeldverwaltung (edu.PAY),
														Schulfotografie, Bezirksverwaltungsbehörden,
														Magistrat, Polizei.
													</em>
												</p>
												<p>
													<em>
														Zudem gebe ich die Einwilligung, dass Fotos bzw.
														Videos veröffentlicht werden dürfen (z.B. Homepage
														der Schule, Jahresbericht der Schule, lokale Medien
														und Berichte in Tageszeitungen, Rundfunk und
														Fernsehen).
													</em>
												</p>
												<p>
													<em>
														Dem Unterfertigten steht grundsätzlich das Recht auf
														Auskunft, Berechtigung, Löschung, Einschränkung,
														Datenübertragbarkeit, Widerruf und Widerspruch zu.
														Diese Rechte können gegenüber der HTBLuVA Salzburg
														geltend gemacht werden, wenn die Verarbeitung der
														personenbezogenen Daten gegen geltendes
														Datenschutzrecht verstößt oder datenschutzrechtliche
														Ansprüche sonst in einer Weise verletzt worden sind.
														Dann ist eine Beschwerde an die Österreichische
														Datenschutzbehörde als zuständige Aufsichtsbehörde
														gemäß Art. 77 DSGVO zu erheben. Durch den Widerruf
														der Einwilligung wird die Rechtmäßigkeit der
														aufgrund der Einwilligung bis zum Widerruf erfolgten
														Verarbeitung nicht berührt.
													</em>
												</p>
											</Form.Text>
										</Container>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Form.Group>
						<Form.Check
							required
							type="checkbox"
							label="Ich stimme der Datenschutzgrundverordnung der HTBLuVA Salzburg zu."
							className="mb-3"
						/>
						{/* <p>{hash}</p> */}
						<Button onClick={generateHash} variant="success" type="submit">
							Bestätigen
						</Button>
					</Form>
				</Col>
				<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>E-Mail zur Verifizierung</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Um die angegebene E-Mailadresse <strong>{email}</strong> zu
						verifizieren, wurde eine Nachricht and diese Adresse versendet. Sie
						können erst mit der Anmeldung fortfahren, wenn Sie den Erhalt dieser
						Nachricht bestätigt haben. Sollten Sie keine E-Mail erhalten haben,
						prüfen Sie neben dem Posteingangsordner bitte auch ihren
						Spam-Ordner.
					</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={() => setShowModal(false)}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
		</Container>
	);	
};






export default Abendschule1;
