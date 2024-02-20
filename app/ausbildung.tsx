import React from 'react';
import { useState, useRef, useEffect, ReactDOM } from "react";
import {
	Col,
	FloatingLabel,
	Form,
	Row
} from "react-bootstrap";



const Ausbildung: React.FC = () => {
	const [birthdate, setBirthdate] = useState("");
	const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	return (
		<Form>

			<Row className="pb-4">
				<Form.Group as={Col} controlId="validationBewerberSchuljahr">
					<FloatingLabel
						controlId="formBewerberSchuljahr"
						label="Schuljahr"
						className="pt-1"
					>
						<Form.Control
							type="number"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group
					as={Col}
					controlId="validationBewerberAnmeldungstyp"
				>
					<FloatingLabel
						controlId="formBewerberAnmeldungstyp"
						label="Anmeldungstyp"
						className="pt-1"
					>
						<Form.Control
							type="text"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationBewerberCode">
					<FloatingLabel
						controlId="formBewerberSchuljahr"
						label="Code"
						className="pt-1"
					>
						<Form.Control
							type="text"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationBewerberPhase">
					<FloatingLabel
						controlId="formBewerberSchuljahr"
						label="Phase"
						className="pt-1"
					>
						<Form.Control
							type="number"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group
					as={Col}
					controlId="validationBewerberSchuelerkennzahl"
				>
					<FloatingLabel
						controlId="formBewerberSchuljahr"
						label="Schülerkennzahl"
						className="pt-1"
					>
						<Form.Control
							type="number"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group
					as={Col}
					controlId="validationBewerberAnmeldenummer"
				>
					<FloatingLabel
						controlId="formBewerberSchuljahr"
						label="Anmeldenummer"
						className="pt-1"
					>
						<Form.Control
							type="number"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationBewerberAnmelderunde">
					<FloatingLabel
						controlId="formBewerberAnmelderunde"
						label="Anmelderunde"
						className="pt-1"
					>
						<Form.Control
							type="number"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationBewerberBildoknummer">
					<FloatingLabel
						controlId="formBewerberBildoknummer"
						label="BILDOKNummer"
						className="pt-1"
					>
						<Form.Control
							type="text"
							placeholder=""

						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="pt-2">
				<Form.Group controlId="validationZuteilung" as={Col}>
					<FloatingLabel
						controlId="formZuteilung"
						label="Zuteilung"
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
				<Form.Group controlId="validationZuteilungsstatus" as={Col}>
					<FloatingLabel
						controlId="formZuteilungsstatus"
						label="Zuteilungsstatus"
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
			<Row className="pt-3">
				<Form.Group as={Col} controlId="validationEignungstestdatum">
					<FloatingLabel
						controlId="formGridState"
						label="Eignungstestdatum"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationregistriert">
					<FloatingLabel
						controlId="formGridState"
						label="Registriert"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						{/* <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                      Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationAngemeldet">
					<FloatingLabel
						controlId="formGridState"
						label="Angemeldet"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						<Form.Control.Feedback
							type={isBirthdateValid ? "valid" : "invalid"}
							className="mx-2"
						>
							Bitte wählen Sie das Geburtsdatum des Bewerbers, sie
							müssen mindestens 17 Jahre alt sein .
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationAbgemeldet">
					<FloatingLabel
						controlId="formGridState"
						label="Abgemeldet"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
					</FloatingLabel>
				</Form.Group>

				<Form.Group as={Col} controlId="validationEintrittsdatum">
					<FloatingLabel
						controlId="formEintrittsdatum"
						label="Eintrittsdatum"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						{/* <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                      Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationAustrittsdatum">
					<FloatingLabel
						controlId="formAustrittsdatum"
						label="Austrittsdatum"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						{/* <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                      Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4 mt-4 ">
				<Form.Group as={Col} controlId="validationKlasse">
					<FloatingLabel
						controlId="formSchuelerKlasse"
						label="Klasse"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="number"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						{/* <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                      Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationSchulstufe">
					<FloatingLabel
						controlId="formSchuelerSchulstufe"
						label="Schulstufe"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="text"
							id="inputBirthDate"
						// required
						// pattern="\d{2}\.\d{2}\.\d{4}"
						// title="Bitte geben Sie ihr Geburtsdatum ein."
						// value={birthdate}
						// onChange={handleBirthdateChange}
						// isInvalid={!isBirthdateValid}
						// className={isBirthdateValid ? 'valid-input' : ''}
						/>
						{/* <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                      Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4 mt-4 ">
				<Form.Group controlId="validationEignungstest" as={Col}>
					<FloatingLabel
						controlId="formEignungstest"
						label="Eignungstest"
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
				<Form.Group controlId="validationEignungstestnote" as={Col}>
					<FloatingLabel
						controlId="formEignungstestnote"
						label="Eignungstestnote"
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
			<Row className="mb-4 mt-4 ">
				<Form.Group controlId="validationLetzteSchulform" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchulform"
						label="Letzte Schulform"
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
				<Form.Group controlId="validationLetzteSchuleZeugnis" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchuleZeugnis"
						label="Letzte Schule Zeugnis"
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
				<Form.Group controlId="validationLetzteSchuleNation" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchuleNation"
						label="Letzte Schule Nation"
						className="pt-1 "
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
				<Form.Group controlId="validationLetzteSchuleTyp" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchuleTyp"
						label="Letzte Schule Typ"
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
			<Row className="mb-4 mt-4 ">
				<Form.Group controlId="validationLetzteSchule" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchule"
						label="Letzte Schule"
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
				<Form.Group controlId="validationLetzteSchulekennzahl" as={Col}>
					<FloatingLabel
						controlId="formLetzteSchulekennzahl"
						label="Letzte Schule Kennzahl"
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
			<Row className="mb-4 ">
				<Form.Group controlId="validationreihen" as={Col}>
					<FloatingLabel
						controlId="formreihen"
						label="Reihen"
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
				<Form.Group controlId="validationPunkte" as={Col}>
					<FloatingLabel
						controlId="formPunkte"
						label="Punkte"
						className="pt-1"
					>
						<Form.Control
							required
							type="number"
							placeholder=""
							step="0.01"
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
			<Row className="mb-4 ">
				<Form.Group controlId="validationAnmerkungen" as={Col}>
					<FloatingLabel
						controlId="formAnmerkungen"
						label="Anmerkungen"
						className="pt-1"
					>
						<Form.Control
							required
							as="textarea"
							rows={3}
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
		</Form>


	);
};

export default Ausbildung;

