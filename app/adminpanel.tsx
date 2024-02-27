

import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';




import {
	Accordion,
	Badge,
	//Accordion,
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	// ProgressBar,
	Row,
	Tab,
	Tabs,
} from "react-bootstrap";





import Ausbildung from "./ausbildung";
import Erziehungsberechtigte from "./erziehungsberechtigte";
import Noten from "./noten";
import Persdaten from "./persdaten";
import RichTextEditor from "./kontakt";



const Adminpanel: React.FC = () => {
	const [validated, setValidated] = useState(true);
// Initialize with an empty array
	// const [currentDate] = useState(getYear());


	

	const inputRefVorname = useRef<HTMLInputElement>(null);
	const inputRefNachname = useRef<HTMLInputElement>(null);
	const inputRefGeburtsort = useRef<HTMLInputElement>(null);

	const [isSubmitted, setIsSubmitted] = useState(false);


	// const [radioStateGeschlecht, setRadioStateGeschlecht] = useState("");
	const [radioStateErstwunschSchule, setRadioStateErstwunschSchule] =
		useState("");

	const currentDateForOption = new Date();
	const specificDateCutoff = new Date(currentDateForOption.getFullYear(), 1, 1);

	// const handleRadioChangeGeschlecht = (
	// 	event: React.ChangeEvent<HTMLInputElement>,
	// ) => {
	// 	setRadioStateGeschlecht(event.target.value);
	// };
	const handleRadioErstwunschSchule = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setRadioStateErstwunschSchule(event.target.value);
	};




	const validateBirthdate = (birthdate: string) => {
		const birthdateParts = birthdate.split(".");
		const birthdateDate = new Date(
			`${birthdateParts[2]}-${birthdateParts[1]}-${birthdateParts[0]}`,
		);
		const currentDate = new Date();
		const ageDiffMs = currentDate.getTime() - birthdateDate.getTime();
		const ageDate = new Date(ageDiffMs);
		const age = Math.abs(ageDate.getUTCFullYear() - 1970);
		return age >= 17;
	};




	const validateEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	// function getYear() {
	// 	const date = new Date();
	// 	const year = date.getFullYear();
	// 	const nextYear = year + 1;
	// 	return `${year}/${nextYear}`;
	// }

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	const handleBlurVorname = () => {
		if (inputRefVorname.current) {
			const capitalized = capitalizeFirstLetter(inputRefVorname.current.value);
			inputRefVorname.current.value = capitalized;
		}
	};

	const handleBlurGeburtsort = () => {
		if (inputRefGeburtsort.current) {
			const capitalized = capitalizeFirstLetter(
				inputRefGeburtsort.current.value,
			);
			inputRefGeburtsort.current.value = capitalized;
		}
	};

	const handleBlurNachname = () => {
		if (inputRefNachname.current) {
			const capitalized = capitalizeFirstLetter(inputRefNachname.current.value);
			inputRefNachname.current.value = capitalized;
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		console.log("submitted diiiiiga, one step closer to Daniel Düsentrieb!");
		const form = event.currentTarget as HTMLFormElement;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();

			//event.persist();
		}
		// setShowModal(true);
		setIsSubmitted(true);
		setValidated(true);
		//event.preventDefault();
		//event.stopPropagation();
	};

	useEffect(() => {
		if (isSubmitted) {
		}
	}, [isSubmitted]);

	return (
		<Container className="p-3 border" style={{ backgroundColor: "SeaShell" }}>
			<Form validated={validated} onSubmit={handleSubmit}>
				<Tabs
					defaultActiveKey="Bewerber"
					id="justify-tab-example"
					className="mb-5 "
					variant="pills"
					justify
				>
					<Tab eventKey="Bewerber" title="Bewerber">
						<Col className="justify-content-center align-items-center">
							<Row className="pb-5 pt-5">
								<Form.Group controlId="validationBewerberGeloescht" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Gelöscht"
									/>
								</Form.Group>
								<Form.Group controlId="validationBewerberDsgvo" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="DSGVO"
									/>
								</Form.Group>
								<Form.Group controlId="validationBewerberSchulpflicht" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Schulpflicht"
									/>
								</Form.Group>
								<Form.Group controlId="validationBewerberWiederholt" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Wiederholt"
									/>
								</Form.Group>
								<Form.Group controlId="validationBewerberExistiert" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Existiert"
									/>
								</Form.Group>
								<Form.Group controlId="validationBewerberAsylwerber" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Asylwerber"
									/>
								</Form.Group>
							</Row>

							<Form.Label>
								<Badge bg="primary">Ausbildung</Badge>
							</Form.Label>
							<Ausbildung />
							<Form.Label>
								<Badge bg="primary">Noten</Badge>
							</Form.Label>
							<Noten />
							<Row className="mb-5 " />
							<Form.Label>
								<Badge bg="primary">Persönliche Daten</Badge>
							</Form.Label>
							<Persdaten />
							<Form.Label>
								<Badge bg="primary">Bewerberprotokoll</Badge>
							</Form.Label>
							<Row>
								<Form.Group
									controlId="validationBewerberprotokollStatus"
									as={Col}
								>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Aktiv"
										className="pt-1 mt-1 ps-4"
									/>

									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
								</Form.Group>
							</Row>
							<Row>
								<Form.Group
									as={Col}
									controlId="validationBewerberprotokollZeitpunkt"
								>
									<FloatingLabel
										// controlId="formVorname"
										label="Zeitpunkt"
										className="pt-1"
									>
										<Form.Control
											required
											type="datetime-local"
											placeholder=""

										// ref={inputRefVorname}
										// onBlur={handleBlurVorname}
										// className="pt-4"
										// pattern="[A-Z][a-z]*"
										/>
										{/* <Form.Control.Feedback type="invalid" className="mx-2 mb-1">
                      Bitte geben Sie den Vornamen des Bewerbers an.
                    </Form.Control.Feedback> */}
									</FloatingLabel>
								</Form.Group>
								<Form.Group
									controlId="validationBewerberprotokollBewerber"
									as={Col}
								>
									<FloatingLabel
										// controlId="formNachname"
										label="Bewerber"
										className="pt-1 "
									>
										<Form.Control
											required
											type="number"
											placeholder=""

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
										{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
									</FloatingLabel>
								</Form.Group>
							</Row>
							<Row>
								<Form.Group controlId="validationBewerberprotokollAktion">
									<FloatingLabel
										// controlId="formNachname"
										label="Aktion"
										className="pt-1 mt-2 pb-4"
									>
										<Form.Control
											required
											as="textarea"
											rows={3}

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
										{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
									</FloatingLabel>
								</Form.Group>
							</Row>
							<Row>
								<Form.Label>
									<Badge bg="primary">Fachrichtungen</Badge>
								</Form.Label>
								<Form.Group
									as={Col}
									controlId="validationFachrichtung"
									aria-required
								>
									<FloatingLabel
										controlId="formSelectFachrichtung"
										label="Fachrichtung"
										// className="mt-5"
										className="pt-1"
									>
										<Form.Select required>
											<option />
											<option>Bautechnik (Hochbau)</option>
											<option>Bautechnik (Tiefbau)</option>
											<option>Biomedizin- und Gesundheitstechnik</option>
											<option>
												Elektronik & technische Informatik (Smart Devices /
												Coding)
											</option>
											<option>Elektrotechnik (Autonome Robotik)</option>
											<option>Elektrotechnik (E-Mobilität)</option>
											<option>
												Informationstechnologie (Künstliche Intelligenz & Data
												Science / Virtual Engineering)
											</option>
											<option>
												Maschinenbau (Anlagentechnik mit Kunststofftechnik und
												Produktdesign)
											</option>
											<option>
												Maschinenbau (Umwelt- und Verfahrenstechnik)
											</option>
											<option>
												Maschinenbau (Robotik und Smart Engineering)
											</option>
											{currentDateForOption < specificDateCutoff && (
												<option>Grafik- und Kommunikationsdesign</option>
											)}
											{currentDateForOption < specificDateCutoff && (
												<option>Medien (Multimedia-Interaktionsdesign)</option>
											)}
										</Form.Select>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Ihre 1. Wahl:
										</Form.Control.Feedback>
									</FloatingLabel>
								</Form.Group>

								<Form.Group
									as={Col}
									controlId="validationFachrichtung"
									aria-required
								>
									<FloatingLabel
										controlId="formSelectFachrichtung"
										label="Fachrichtung"
										// className="mt-5"
										className="pt-1"
									>
										<Form.Select required>
											<option />
											<option>Bautechnik (Hochbau)</option>
											<option>Bautechnik (Tiefbau)</option>
											<option>Biomedizin- und Gesundheitstechnik</option>
											<option>
												Elektronik & technische Informatik (Smart Devices /
												Coding)
											</option>
											<option>Elektrotechnik (Autonome Robotik)</option>
											<option>Elektrotechnik (E-Mobilität)</option>
											<option>
												Informationstechnologie (Künstliche Intelligenz & Data
												Science / Virtual Engineering)
											</option>
											<option>
												Maschinenbau (Anlagentechnik mit Kunststofftechnik und
												Produktdesign)
											</option>
											<option>
												Maschinenbau (Umwelt- und Verfahrenstechnik)
											</option>
											<option>
												Maschinenbau (Robotik und Smart Engineering)
											</option>
											{currentDateForOption < specificDateCutoff && (
												<option>Grafik- und Kommunikationsdesign</option>
											)}
											{currentDateForOption < specificDateCutoff && (
												<option>Medien (Multimedia-Interaktionsdesign)</option>
											)}
										</Form.Select>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Ihre 2. Wahl:
										</Form.Control.Feedback>
									</FloatingLabel>
								</Form.Group>
								<Form.Group
									as={Col}
									controlId="validationFachrichtung"
									aria-required
								>
									<FloatingLabel
										controlId="formSelectFachrichtung"
										label="Fachrichtung"
										// className="mt-5"
										className="pt-1"
									>
										<Form.Select required>
											<option />
											<option>Bautechnik (Hochbau)</option>
											<option>Bautechnik (Tiefbau)</option>
											<option>Biomedizin- und Gesundheitstechnik</option>
											<option>
												Elektronik & technische Informatik (Smart Devices /
												Coding)
											</option>
											<option>Elektrotechnik (Autonome Robotik)</option>
											<option>Elektrotechnik (E-Mobilität)</option>
											<option>
												Informationstechnologie (Künstliche Intelligenz & Data
												Science / Virtual Engineering)
											</option>
											<option>
												Maschinenbau (Anlagentechnik mit Kunststofftechnik und
												Produktdesign)
											</option>
											<option>
												Maschinenbau (Umwelt- und Verfahrenstechnik)
											</option>
											<option>
												Maschinenbau (Robotik und Smart Engineering)
											</option>
											{currentDateForOption < specificDateCutoff && (
												<option>Grafik- und Kommunikationsdesign</option>
											)}
											{currentDateForOption < specificDateCutoff && (
												<option>Medien (Multimedia-Interaktionsdesign)</option>
											)}
										</Form.Select>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Ihre 3. Wahl:
										</Form.Control.Feedback>
									</FloatingLabel>
								</Form.Group>
							</Row>

							<Row className="mb-4">
								{/* <Row className="mb-4 mt-4 ">
                <Form.Group controlId="validationSalutation">
                <FloatingLabel
                  controlId="formSalutation"
                  label="Anrede"
                  className="pt-1"
                >
                  <Form.Select required>
                    <option></option>
                    <option value="1">Frau</option>
                    <option value="2">Herr</option>
                    <option value="3">Divers</option>

                  </Form.Select>
                </FloatingLabel>
                 </Form.Group>
                </Row> */}
								{/* <Row className="mb-4 mt-4 ">
                <Form.Group controlId="validationTitelVor">
                <FloatingLabel
                  controlId="formTitelVor"
                  label="Titel vor "
                  className="pt-1"
                >
                  <Form.Control

                    type="text"
                    placeholder=""
                  // ref={inputRefVorname}
                  // onBlur={handleBlurVorname}
                  // className="pt-4"
                  // pattern="[A-Z][a-z]*"
                  />
                  <Form.Control.Feedback type="invalid" className="mx-2 mb-1">

                  </Form.Control.Feedback>
                </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationTitelNach">
                <FloatingLabel
                  controlId="formTitelNach"
                  label="Titel nach "
                  className="pt-1"
                >
                  <Form.Control

                    type="text"
                    placeholder=""
                  // ref={inputRefVorname}
                  // onBlur={handleBlurVorname}
                  // className="pt-4"
                  // pattern="[A-Z][a-z]*"
                  />
                  <Form.Control.Feedback type="invalid" className="mx-2 mb-1">

                  </Form.Control.Feedback>
                </FloatingLabel>
                  </Form.Group>

                  </Row> */}
								<Form.Group as={Col} controlId="validationErstwunschSchule">
									<FloatingLabel
										controlId="formErstwunschSchule"
										label="Erstwunschschule"
										className="mb-4 pt-5 ps-3"
									>
										<Form.Check
											label="Ja"
											name="groupErstwunschSchule"
											type="radio"
											id={"inline-radio-3"}
											value="Ja"
											checked={radioStateErstwunschSchule === "Ja"}
											onChange={handleRadioErstwunschSchule}
											inline
										/>
										<Form.Check
											inline
											label="Nein"
											name="groupErstwunschSchule"
											type="radio"
											id={"inline-radio-4"}
											value="Nein"
											checked={radioStateErstwunschSchule === "Nein"}
											onChange={handleRadioErstwunschSchule}
										/>
									</FloatingLabel>
								</Form.Group>
								<Form.Group
									as={Col}
									className="pt-4"
									controlId="validationErstwunschschule"
								>
									<FloatingLabel
										controlId="formErstwunschschule"
										label="Erstwunschschule"
									>
										<Form.Control
											required={radioStateErstwunschSchule === "Nein"}
											type="text"
											placeholder=""

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
									</FloatingLabel>
								</Form.Group>
								<Form.Group
									as={Col}
									className="pt-4"
									controlId="validationErstwunschschulkennzahl"
								>
									<FloatingLabel
										controlId="formErstwunschschulkennzahl"
										label="Erstwunschschulkennzahl"
									>
										<Form.Control
											required={radioStateErstwunschSchule === "Nein"}
											type="text"
											placeholder=""

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
									</FloatingLabel>
								</Form.Group>
							</Row>
							<Row className="pb-4">
								<Form.Group as={Col} controlId="validationZweitwunschSchule">
									<FloatingLabel
										controlId="formZweitwunschSchule"
										label="Zweitwunschschule"
									>
										<Form.Control
											required={radioStateErstwunschSchule === "Nein"}
											type="text"
											placeholder=""

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Haben Sie sich auch an einer zweiten Schule beworben?
										</Form.Control.Feedback>
									</FloatingLabel>
								</Form.Group>
								<Form.Group
									as={Col}
									controlId="validationZweitwunschSchulkennzahl"
								>
									<FloatingLabel
										controlId="formZweitwunschSchulkennzahl"
										label="Zweitwunschschulkennzahl"
									>
										<Form.Control
											required={radioStateErstwunschSchule === "Nein"}
											type="text"
											placeholder=""

										// ref={inputRefNachname}
										// onBlur={handleBlurNachname}
										//pattern="[A-Z][a-z]*"
										/>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Haben Sie sich auch an einer zweiten Schule beworben?
										</Form.Control.Feedback>
									</FloatingLabel>
								</Form.Group>
							</Row>

							<Form.Label>
								<Badge bg="primary">Erziehungsberechtigte</Badge>
							</Form.Label>

							<Erziehungsberechtigte />
							{/* <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
            						<Modal.Header closeButton>
         					   <	Modal.Title>Abschlusszeugnisse</Modal.Title>
           						 </Modal.Header>
            				   <Modal.Body>Wir haben ihnen an die E-Mailadresse <strong>{email}</strong> soeben eine Nachricht mit ihren Daten gesendet. Ihre Anmeldung ist erst vollständig abgeschlossen, wenn Sie entweder
              			  <p></p>
              				  <ul><li> auf diese E-Mail antworten und uns digitale Kopien der <strong>Abschlusszeugnisse ihrer bisherigen Ausbildungen</strong> zusenden</li></ul>
              					 <ul><li>oder uns die <strong>Abschlusszeugnisse ihrer bisherigen Ausbildungen</strong> in der Direktion der HTBLuVA Salzburg vorbeibringen.</li></ul>
             				  </Modal.Body>
          
             				  <Modal.Footer>
              				  <Button variant="success" onClick={() => setShowModal(false)}>
               				 OK
             				   </Button>
               			   </Modal.Footer>
                 				  </Modal> */}
						</Col>

						<Button variant="success" type="submit" onClick={handleSubmit}>
							Bestätigen
						</Button>
					</Tab>

					<Tab eventKey="Kontakt" title="Kontakt">
						<RichTextEditor />
					</Tab>

					<Tab eventKey="Organisation" title="Organisation">
						<Form.Label className="pt-3 h5">
							<Badge bg="primary">Altersgrenzen</Badge>
						</Form.Label>
						<Row>
							<Form.Group
								as={Col}
								controlId="validationAltersgrenzenTagesschule"
							>
								<FloatingLabel
									// controlId="formVorname"
									label="Tagesschule"
									className="pt-1"
								>
									<Form.Control
										required
										type="number"
										placeholder=""

									// ref={inputRefVorname}
									// onBlur={handleBlurVorname}
									// className="pt-4"
									// pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2 mb-1">
                      Bitte geben Sie den Vornamen des Bewerbers an.
                    </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
							<Form.Group
								controlId="validationAltersgrenzenAbendschule"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Abendschule"
									className="pt-1"
								>
									<Form.Control
										required
										type="number"
										placeholder=""

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>

						<Form.Label className="pt-4 h5">
							<Badge bg="primary">Anmeldefristen Grafik & Medien</Badge>
						</Form.Label>
						<Row>
							<Row>
								<Form.Group controlId="validationBenutzerKlassen" as={Col}>
									<Form.Check
										type="checkbox"
										// controlId="formNachname"
										label="Aktiv"
										className="pt-1 mt-1 ps-4"
									/>

									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
								</Form.Group>
							</Row>
							<Form.Group as={Col}>
								<FloatingLabel
									// controlId="formVorname"
									label="Startdatum"
									className="pt-1"
								>
									<Form.Control
										required
										type="date"
										placeholder=""

									// ref={inputRefVorname}
									// onBlur={handleBlurVorname}
									// className="pt-4"
									// pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2 mb-1">
                      Bitte geben Sie den Vornamen des Bewerbers an.
                    </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
							<Form.Group as={Col}>
								<FloatingLabel
									// controlId="formNachname"
									label="Enddatum"
									className="pt-1 "
								>
									<Form.Control
										required
										type="date"
										placeholder=""

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>

						<Form.Label className="pt-3 h5">
							<Badge bg="primary">Religionsbekenntnisse</Badge>
						</Form.Label>
						<Row>
							<Form.Group
								controlId="validationReligionsbekenntnisseAbmeldbar"
								as={Col}
							>
								<Form.Check
									type="checkbox"
									// controlId="formNachname"
									label="Abmeldbar"
									className="pt-1 mt-1 ps-4"
								/>

								{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
							</Form.Group>
						</Row>
						<Row className="">
							<Form.Group
								as={Col}
								controlId="validationReligionsbekenntnisseUnterrichtsnummer"
							>
								<FloatingLabel
									// controlId="formVorname"
									label="Unterrichtsnummer"
									className="pt-1"
								>
									<Form.Control
										// required
										type="number"
										placeholder=""
										min={0}

									// ref={inputRefVorname}
									// onBlur={handleBlurVorname}
									// className="pt-4"
									// pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2 mb-1">
          Bitte geben Sie den Vornamen des Bewerbers an.
        </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
							<Form.Group
								controlId="validationReligionsbekenntnisseKuerzel"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Kürzel"
									className="pt-1"
								>
									<Form.Control
										required
										type="text"
										placeholder=""

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
							<Form.Group
								controlId="validationReligionsbekenntnisseZaehlenAls"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Zählen als"
									className="pt-1"
								>
									<Form.Control
										required
										type="text"
										placeholder=""

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group
								controlId="validationReligionsbekenntnisseUnterrichtsnummer"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Unterrichtsnummer"
									className="pt-1 mt-1"
								>
									<Form.Control
										// required
										type="number"
										placeholder=""
									// min={0}
									// max={99}

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>

							<Form.Group
								controlId="validationReligionsbekenntnisseUnterrichtsbezeichnung"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Unterrichtsbezeichnung"
									className="pt-1 mt-1"
								>
									<Form.Control
										// required
										type="text"
										placeholder=""
									// min={0}
									// max={99}

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
								</FloatingLabel>
							</Form.Group>

							<Form.Group
								controlId="validationReligionsbekenntnisseAliasEinschreiber"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Alias Einschreiber"
									className="pt-1 mt-1"
								>
									<Form.Control
										// required
										type="text"
										placeholder=""
									// min={0}
									// max={99}

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
								</FloatingLabel>
							</Form.Group>
							<Form.Group
								controlId="validationReligionsbekenntnisseAliasSK"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Alias SK"
									className="pt-1 mt-1"
								>
									<Form.Control
										// required
										type="text"
										placeholder=""
									// min={0}
									// max={99}

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group
								controlId="validationReligionsbekenntnisseAliasHtl"
								as={Col}
							>
								<FloatingLabel
									// controlId="formNachname"
									label="Alias Htl"
									className="pt-1 mt-1 pb-5"
								>
									<Form.Control
										// required
										type="text"
										placeholder=""
									// min={0}
									// max={99}

									// ref={inputRefNachname}
									// onBlur={handleBlurNachname}
									//pattern="[A-Z][a-z]*"
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                  Bitte geben Sie den Nachnamen des Bewerbers an.

                  </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>
					</Tab>
				</Tabs>
			</Form>
		</Container>
	);
}

export default Adminpanel;

