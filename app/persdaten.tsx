import { PhoneNumberFormat as PNF, PhoneNumber, PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';
import React from 'react';
import { useState, useRef, useEffect, ReactDOM } from "react";

import {
	Col,
	FloatingLabel,
	Form,
	Row,
	Container
} from "react-bootstrap";


const Persdaten: React.FC = () => {
	const [email, setEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [phoneNumberTwo, setPhoneNumberTwo] = useState("");
	const [isValid, setIsValid] = useState<boolean>(false);
	const [isValidTwo, setIsValidTwo] = useState<boolean>(false);
	const [birthdate, setBirthdate] = useState("");
	const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	const [geschwisterHtl, setGeschwisterHtl] = useState(false);
	const [radioState, setRadioState] = useState(false);
	const [svNumber, setSvNumber] = useState("");
	const [adress, setAdress] = useState("");



	const handleGeschwisterHtl = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setGeschwisterHtl(event.target.value > "0");
	};
	const parsePlzOrt = () => {
		const parts = plzOrt.split(", ");
		const plz = parts[0];
		const ort = parts[1];
		console.log(`PLZ: ${plz}, Ort: ${ort}`);
	};
	const handleBlurPlzOrt = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlzOrt(event.target.value);
	};
	const [plzOrt, setPlzOrt] = useState("");

	const handleBlurAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAdress(event.target.value);
	};

	const parseAddress = () => {
		// const parts = adress.split(/(\d+)/);
		// const streetName = parts[0].trim();
		// const streetNumber = parts[1];
		//console.log(`Street Name: ${streetName}, Street Number: ${streetNumber}`);
	};
	const handleSvNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value.replace(/\s/g, ""); // remove all spaces
		if (value.length > 4) {
			value = `${value.slice(0, 4)} ${value.slice(4)}`; // add a space after the 4th character
		}
		setSvNumber(value);
	};


	const inputRefVorname = useRef<HTMLInputElement>(null);

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	const handleBlurVorname = () => {
		if (inputRefVorname.current) {
			const capitalized = capitalizeFirstLetter(inputRefVorname.current.value);
			inputRefVorname.current.value = capitalized;
		}
	};
	const inputRefGeburtsort = useRef<HTMLInputElement>(null);
	const handleBlurGeburtsort = () => {
		if (inputRefGeburtsort.current) {
			const capitalized = capitalizeFirstLetter(
				inputRefGeburtsort.current.value,
			);
			inputRefGeburtsort.current.value = capitalized;
		}
	};
	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioState(event.target.value === "true");
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


	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
	};
	const handlePhoneChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumberTwo(event.target.value);
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
	const handlePhoneBlurTwo = () => {
		const phoneUtil2 = PhoneNumberUtil.getInstance();
		let isE164Two = false;
		let isValidTwo = false;

		try {
			const inputNumber2 = phoneUtil2.parse(phoneNumberTwo);
			isE164Two = phoneUtil2.getNumberType(inputNumber2) === PhoneNumberType.MOBILE;
			isValidTwo = phoneUtil2.isValidNumber(inputNumber2);
		} catch (err) {
			console.error(err);
		}

		setIsValidTwo(isE164Two ? isValidTwo : false);
	};




	const handleBirthdateChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const birthdateValue = event.target.value;
		setBirthdate(birthdateValue);
		setIsBirthdateValid(validateBirthdate(birthdateValue));
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsEmailValid(validateEmail(event.target.value));
		setEmail(event.target.value);
	};
	const validateEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<Form>
			<Row className="mb-4 mt-4 ">
				<Form.Group as={Col} controlId="validationSalutation">
					<FloatingLabel
						controlId="formSalutation"
						label="Anrede"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="1">Frau</option>
							<option value="2">Herr</option>
							<option value="3">Divers</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
				<Form.Group as={Col} controlId="validationGeschlecht">
					<FloatingLabel
						controlId="formGeschlecht"
						label="Biologisches Geschlecht"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="1">Männlich</option>
							<option value="2">Weiblich</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group as={Col} controlId="validationVorname">
					<FloatingLabel
						controlId="formVorname"
						label="Vorname"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"
							placeholder="Vorname"
						// ref={inputRefVorname}
						// onBlur={handleBlurVorname}
						// className="pt-4"
						// pattern="[A-Z][a-z]*"
						/>
						<Form.Control.Feedback type="invalid" className="mx-2 mb-1">
							Bitte geben Sie den Vornamen des Bewerbers an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>

				<Form.Group controlId="validationNachname" as={Col}>
					<FloatingLabel
						controlId="formNachname"
						label="Nachname"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"
							placeholder="Nachname"
						// ref={inputRefNachname}
						// onBlur={handleBlurNachname}
						//pattern="[A-Z][a-z]*"
						/>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie den Nachnamen des Bewerbers an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>

			<Row className="mb-2 mt-4 ">
				<Form.Group as={Col} controlId="validationWeitereVornamen">
					<FloatingLabel
						controlId="formWeitereVornamen"
						label="Weitere Vornamen"
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
				<Form.Group as={Col} controlId="validationKurzname">
					<FloatingLabel
						controlId="formKurzname"
						label="Kurzname"
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
			<Row className="mb-4 mt-4 ">
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
						<Form.Control.Feedback
							type="invalid"
							className="mx-2 mb-1"
						/>
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
						<Form.Control.Feedback
							type="invalid"
							className="mx-2 mb-1"
						/>
					</FloatingLabel>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group
					as={Col}
					className=" mb-3"
					controlId="validationPhone"
				>
					<FloatingLabel
						label="Tel. Nr. 1"

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
									Bitte geben Sie die Tel. Nr. des Bewerbers im Format
									+43 664 12345678 ein.
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
					as={Col}
					className=" mb-3"
					controlId="validationPhone2"
				>
					<FloatingLabel
						label="Tel. Nr. 2"
				
						className="pt-1"
					>
						<Form.Control
							required
							type="tel"
							// placeholder="+43 123 456 7890"
							value={phoneNumberTwo}
							onChange={handlePhoneChangeTwo}
							isInvalid={!isValidTwo}
							onBlur={handlePhoneBlurTwo}
							
						
						/>
						<Form.Control.Feedback
							type={isValidTwo ? "valid" : "invalid"}
							className="mx-2"
						>
							{isValidTwo ? (
								""
							) : (
								<strong>
									Bitte geben Sie die Tel. Nr. des Bewerbers im Format
									+43 664 12345678 ein.
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

				<Form.Group as={Col} controlId="validationGeburtsdatum">
					<FloatingLabel
						controlId="formGridState"
						label="Geburtsdatum"
						className="pt-1"
					>
						{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
						<Form.Control
							type="date"
							id="inputBirthDate"
							// required
							pattern="\d{2}\.\d{2}\.\d{4}"
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
							Bitte wählen Sie das Geburtsdatum des Bewerbers, sie
							müssen mindestens 17 Jahre alt sein .
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row>
				<Form.Group
					as={Col}
					className="mt-3 mb-3"
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
								Aufnahmeprozesses erreichbar sein. An diese E-Mail
								Adresse werden Bestätigungen und Terminverständigungen
								geschickt. Eine Änderung ist unbedingt bekannt zu geben.
								{/* Die E-Mail
                      Adresse muss von einem Erziehungsberechtigten abgerufen
                      werden. */}
							</Form.Text>
						</Container>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-2">
				<Form.Group controlId="validationSVT">
					<FloatingLabel
						controlId="formSVT"
						// style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
						label="Österreichische Sozialversicherungsnummer"
						className="mt-1"
					>
						<Col className="mx-3 pt-5">
							<Form.Check
								inline
								label="ja"
								name="group1"
								type="radio"
								id={"inline-radio-1"}
								value="true"
								checked={radioState === true}
								onChange={handleRadioChange}
							/>
							<Form.Check
								inline
								label="nein"
								name="group1"
								type="radio"
								id={"inline-radio-1"}
								value="false"
								checked={radioState === false}
								onChange={handleRadioChange}
							/>
						</Col>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row>
				{radioState && (
					<Form.Group className="" controlId="validationSVV" as={Col}>
						{
							<FloatingLabel
								controlId="formSelectSVV"
								label="Sozialversicherungsträger"
								// className="mt-5"
								className="pt-1 "
							>
								<Form.Select required={radioState}>
									<option value="4">
										Allgemeine Unfallsversicherungsanstalt (AUVA)
									</option>
									<option value="6">
										Krankenfürsorgeanstalten für öffentlich Bedienstete
									</option>
									<option value="1">
										Österreichische Gesundheitskasse (ÖGK)
									</option>
									<option value="5">
										Pensionsversicherungsanstalt (PVA)
									</option>
									<option value="2">
										Sozialversicherungsanstalt der Selbständigen (SVS)
									</option>
									<option value="3">
										Versicherungsanstalt öffentlich Bediensteter,
										Eisenbahnen und Bergbau (BVAEB)
									</option>
								</Form.Select>
								<Form.Control.Feedback type="invalid" className="mx-2">
									Bitte geben Sie den Sozialversicherungsträger an.
								</Form.Control.Feedback>
								<br />
								<FloatingLabel
									controlId="formSVNumber"
									label="SV-Nummer"
									className="pt-1"
								>
									<Form.Control
										required={radioState}
										type="text"
										pattern="^\d{4}(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}$"
										value={svNumber}
										onChange={handleSvNumberChange}
									/>
									<Form.Control.Feedback
										type="invalid"
										className="mx-2"
									>
										Bitte geben Sie Ihre SV-Nummer in der Form 1234
										TTMMJJ.
									</Form.Control.Feedback>
								</FloatingLabel>
							</FloatingLabel>
						}
					</Form.Group>
				)}
			</Row>

			<Row className="mb-3  ">
				<Form.Group controlId="validationGeburtsort">
					<FloatingLabel
						controlId="formGeburtsort"
						label="Geburtsort"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"
							//readOnly
							ref={inputRefGeburtsort}
							onBlur={handleBlurGeburtsort}
							pattern="^.{2,}$"
						/>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie ihren Geburtsort an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationGeburtsland">
					<FloatingLabel
						controlId="formGeburtsland"
						label="Geburtsland"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">
								Antigua and Barbuda
							</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belgium">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegovina">
								Bosnia and Herzegovina
							</option>
							<option value="Botswana">Botswana</option>
							<option value="Brazil">Brazil</option>
							<option value="Brunei">Brunei</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Côte d'Ivoire">Côte d'Ivoire</option>
							<option value="Cabo Verde">Cabo Verde</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Central African Republic">
								Central African Republic
							</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Colombia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo (Congo-Brazzaville)">
								Congo (Congo-Brazzaville)
							</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Croatia">Croatia</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czechia (Czech Republic)">
								Czechia (Czech Republic)
							</option>
							<option value="Democratic Republic of the Congo">
								Democratic Republic of the Congo
							</option>
							<option value="Denmark">Denmark</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">
								Dominican Republic
							</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">
								Equatorial Guinea
							</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Eswatini">Eswatini</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Greece">Greece</option>
							<option value="Grenada">Grenada</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Holy See">Holy See</option>
							<option value="Honduras">Honduras</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Laos">Laos</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Liechtenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia">Micronesia</option>
							<option value="Moldova">Moldova</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montenegro">Montenegro</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar (formerly Burma)">
								Myanmar (formerly Burma)
							</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="North Korea">North Korea</option>
							<option value="North Macedonia (formerly Macedonia)">
								North Macedonia (formerly Macedonia)
							</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Palestine State">Palestine State</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Qatar">Qatar</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russia</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Kitts and Nevis">
								Saint Kitts and Nevis
							</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">
								Saint Vincent and the Grenadines
							</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">
								Sao Tome and Principe
							</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Serbia">Serbia</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Korea">South Korea</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syria">Syria</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania">Tanzania</option>
							<option value="Thailand">Thailand</option>
							<option value="Timor-Leste">Timor-Leste</option>
							<option value="Togo">Togo</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">
								Trinidad and Tobago
							</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">
								United Arab Emirates
							</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States of America">
								United States of America
							</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Vietnam">Vietnam</option>
							<option value="Yemen">Yemen</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationStaatsbuergerschaft">
					<FloatingLabel
						controlId="formStaatsbuergerschaft"
						label="Staatsbürgerschaft"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">
								Antigua and Barbuda
							</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belgium">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegovina">
								Bosnia and Herzegovina
							</option>
							<option value="Botswana">Botswana</option>
							<option value="Brazil">Brazil</option>
							<option value="Brunei">Brunei</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Côte d'Ivoire">Côte d'Ivoire</option>
							<option value="Cabo Verde">Cabo Verde</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Central African Republic">
								Central African Republic
							</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Colombia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo (Congo-Brazzaville)">
								Congo (Congo-Brazzaville)
							</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Croatia">Croatia</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czechia (Czech Republic)">
								Czechia (Czech Republic)
							</option>
							<option value="Democratic Republic of the Congo">
								Democratic Republic of the Congo
							</option>
							<option value="Denmark">Denmark</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">
								Dominican Republic
							</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">
								Equatorial Guinea
							</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Eswatini">Eswatini</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Greece">Greece</option>
							<option value="Grenada">Grenada</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Holy See">Holy See</option>
							<option value="Honduras">Honduras</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Laos">Laos</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Liechtenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia">Micronesia</option>
							<option value="Moldova">Moldova</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montenegro">Montenegro</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar (formerly Burma)">
								Myanmar (formerly Burma)
							</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="North Korea">North Korea</option>
							<option value="North Macedonia (formerly Macedonia)">
								North Macedonia (formerly Macedonia)
							</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Palestine State">Palestine State</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Qatar">Qatar</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russia</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Kitts and Nevis">
								Saint Kitts and Nevis
							</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">
								Saint Vincent and the Grenadines
							</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">
								Sao Tome and Principe
							</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Serbia">Serbia</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Korea">South Korea</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syria">Syria</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania">Tanzania</option>
							<option value="Thailand">Thailand</option>
							<option value="Timor-Leste">Timor-Leste</option>
							<option value="Togo">Togo</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">
								Trinidad and Tobago
							</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">
								United Arab Emirates
							</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States of America">
								United States of America
							</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Vietnam">Vietnam</option>
							<option value="Yemen">Yemen</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationMuttersprache">
					<FloatingLabel
						controlId="formMuttersprache"
						label="Muttersprache"
						className="pt-1"
					>
						<Form.Select required>
							<option value="47">Afrikaans</option>
							<option value="1">Albanisch</option>
							<option value="55">Amerikanische Sprachen</option>
							<option value="52">Amharisch</option>
							<option value="2">Arabisch</option>
							<option value="3">Aramäisch</option>
							<option value="4">Armenisch</option>
							<option value="5">Bengalisch</option>
							<option value="6">
								BKS (Bosnisch/Kroatisch/Serbisch)
							</option>
							<option value="7">Bosnisch</option>
							<option value="8">Bulgarisch</option>
							<option value="9">
								Chinesisch (ohne nähere Differenzierung)
							</option>
							<option value="10">Dari</option>
							<option value="11">Deutsch</option>
							<option value="12">Englisch</option>
							<option value="13">Estnisch</option>
							<option value="14">Finnisch</option>
							<option value="15">Französisch</option>
							<option value="49">Georgisch</option>
							<option value="54">Griechisch</option>
							<option value="16">Hindi</option>
							<option value="17">Indonesisch</option>
							<option value="18">Italienisch</option>
							<option value="19">Koreanisch</option>
							<option value="20">Kroatisch</option>
							<option value="21">Kurdisch</option>
							<option value="56">Litauisch</option>
							<option value="22">Makedonisch</option>
							<option value="51">Mongolisch</option>
							<option value="23">Niederländisch/Flämisch</option>
							<option value="24">
								Österreichische Gebärdensprache
							</option>
							<option value="25">Pashto</option>
							<option value="26">Persisch (Farsi)</option>
							<option value="27">Polnisch</option>
							<option value="48">Portugisisch</option>
							<option value="28">Punjabi</option>
							<option value="29">Rumänisch</option>
							<option value="30">Russisch</option>
							<option value="50">Schwedisch</option>
							<option value="31">Serbisch</option>
							<option value="32">Serbokroatisch</option>
							<option value="33">Slowakisch</option>
							<option value="34">Slowenisch</option>
							<option value="35">Sonstige afrikanische Sprachen</option>
							<option value="36">Sonstige Sprache(n)</option>
							<option value="37">Spanisch</option>
							<option value="38">Tagalog</option>
							<option value="53">Thailändisch</option>
							<option value="39">Tschechisch</option>
							<option value="40">Tschetschenisch</option>
							<option value="41">Türkisch</option>
							<option value="42">Ukrainisch</option>
							<option value="43">Ungarisch</option>
							<option value="44">Urdu</option>
							<option value="45">Vietnamesisch</option>
							<option value="46">Yoruba</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationAlltagssprache">
					<FloatingLabel
						controlId="formAlltagssprache"
						label="Alltagssprache"
						className="pt-1"
					>
						<Form.Select required>
							<option value="47">Afrikaans</option>
							<option value="1">Albanisch</option>
							<option value="55">Amerikanische Sprachen</option>
							<option value="52">Amharisch</option>
							<option value="2">Arabisch</option>
							<option value="3">Aramäisch</option>
							<option value="4">Armenisch</option>
							<option value="5">Bengalisch</option>
							<option value="6">
								BKS (Bosnisch/Kroatisch/Serbisch)
							</option>
							<option value="7">Bosnisch</option>
							<option value="8">Bulgarisch</option>
							<option value="9">
								Chinesisch (ohne nähere Differenzierung)
							</option>
							<option value="10">Dari</option>
							<option value="11">Deutsch</option>
							<option value="12">Englisch</option>
							<option value="13">Estnisch</option>
							<option value="14">Finnisch</option>
							<option value="15">Französisch</option>
							<option value="49">Georgisch</option>
							<option value="54">Griechisch</option>
							<option value="16">Hindi</option>
							<option value="17">Indonesisch</option>
							<option value="18">Italienisch</option>
							<option value="19">Koreanisch</option>
							<option value="20">Kroatisch</option>
							<option value="21">Kurdisch</option>
							<option value="56">Litauisch</option>
							<option value="22">Makedonisch</option>
							<option value="51">Mongolisch</option>
							<option value="23">Niederländisch/Flämisch</option>
							<option value="24">
								Österreichische Gebärdensprache
							</option>
							<option value="25">Pashto</option>
							<option value="26">Persisch (Farsi)</option>
							<option value="27">Polnisch</option>
							<option value="48">Portugisisch</option>
							<option value="28">Punjabi</option>
							<option value="29">Rumänisch</option>
							<option value="30">Russisch</option>
							<option value="50">Schwedisch</option>
							<option value="31">Serbisch</option>
							<option value="32">Serbokroatisch</option>
							<option value="33">Slowakisch</option>
							<option value="34">Slowenisch</option>
							<option value="35">Sonstige afrikanische Sprachen</option>
							<option value="36">Sonstige Sprache(n)</option>
							<option value="37">Spanisch</option>
							<option value="38">Tagalog</option>
							<option value="53">Thailändisch</option>
							<option value="39">Tschechisch</option>
							<option value="40">Tschetschenisch</option>
							<option value="41">Türkisch</option>
							<option value="42">Ukrainisch</option>
							<option value="43">Ungarisch</option>
							<option value="44">Urdu</option>
							<option value="45">Vietnamesisch</option>
							<option value="46">Yoruba</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationReligion">
					<FloatingLabel
						controlId="formReligion"
						label="Religion"
						className="pt-1"
					>
						{" "}
						<Form.Select required>
							<option value="47">
								Alt-Alevitische Glaubensgemeinschaft in Österreich
							</option>
							<option value="1">altkatholisch</option>
							<option value="2">armenisch-apostolisch</option>
							<option value="3">armenisch-katholisch</option>
							<option value="4">äthiopisch-katholisch</option>
							<option value="48">
								Bahai-Religionsgemeinschaft Österreich
							</option>
							<option value="5">buddhistisch</option>
							<option value="6">bulgarisch-katholisch</option>
							<option value="7">bulgarisch-orthodox</option>
							<option value="8">
								Bund der Baptistengemeinden in Österreich
							</option>
							<option value="9">
								Bund evangelikaler Gemeinden in Österreich
							</option>
							<option value="10">byzantinisch-katholisch</option>
							<option value="11">chaldäisch-katholisch</option>
							<option value="49">
								Die Christengemeinschaft in Österreich
							</option>
							<option value="12">Elaia Christengemeinschaft</option>
							<option value="13">evangelisch A.B.</option>
							<option value="14">evangelisch H.B.</option>
							<option value="15">evangelisch-methodistisch</option>
							<option value="16">
								Freie Christengemeinde/Pfingstgemeinde Österreich
							</option>
							<option value="57">Freikirchen in Österreich</option>
							<option value="17">freikirchlich</option>
							<option value="18">griechisch-katholisch</option>
							<option value="19">griechisch-orthodox</option>
							<option value="50">
								Hinduistische Religionsgesellschaft in Österreich
							</option>
							<option value="20">islamisch</option>
							<option value="21">
								Islamische Alevitische Glaubensgemeinschaft in
								Österreich
							</option>
							<option value="51">
								Islamische-Schiitische Glaubensgemeinschaft in
								Österreich
							</option>
							<option value="22">israelitisch</option>
							<option value="23">italo-albanisch</option>
							<option value="24">Jehovas Zeugen</option>
							<option value="52">
								Kirche der Siebenten-Tags-Adventisten
							</option>
							<option value="25">
								Kirche Jesu Christi der Heiligen der Letzten Tage
							</option>
							<option value="26">koptisch-katholisch</option>
							<option value="27">koptisch-orthodox</option>
							<option value="28">maronitisch-katholisch</option>
							<option value="29">melkitisch-katholisch</option>
							<option value="30">
								Mennonitische Freikirche Österreich
							</option>
							<option value="31">neuapostolisch</option>
							<option value="45">ohne Bekenntnis</option>
							<option value="56">orthodox</option>
							<option value="58">
								Österreichische Sikh Glaubensgemeinschaft
							</option>
							<option value="53">
								Pfingstkirche Gemeinde Gottes in Österreich
							</option>
							<option value="32">römisch-katholisch</option>
							<option value="33">rumänisch-katholisch</option>
							<option value="34">rumänisch-orthodox</option>
							<option value="35">russisch-orthodox</option>
							<option value="36">ruthenisch-katholisch</option>
							<option value="37">serbisch-orthodox</option>
							<option value="38">slowakisch-katholisch</option>
							<option value="55">Sonstige</option>
							<option value="39">syrisch-katholisch</option>
							<option value="40">syrisch-orthodox</option>
							<option value="41">syro-malabar-katholisch</option>
							<option value="42">syro-malankar-katholisch</option>
							<option value="43">ukrainisch-katholisch</option>
							<option value="44">ungarisch-katholisch</option>
							<option value="54">
								Vereinigungskirche in Österreich
							</option>
						</Form.Select>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-3 mt-3 ">
				<Form.Group controlId="validationAdresse">
					<FloatingLabel
						controlId="formAdresse"
						label="Strasse, Hausnummer"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"
							pattern="^[^\d]+\s+\d+.*$"
							value={adress}
							onChange={handleBlurAdress}
							onBlur={parseAddress}
						//pattern="[A-Z][a-z]*"
						/>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie Ihre Adresse in der Form Strasse,
							Hausnummer Top Stiege etc. ein.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-2  ">
				<Form.Group controlId="validationPlzOrt">
					<FloatingLabel
						controlId="formPlzOrt"
						label="PLZ, Ort"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"
							pattern="^[1-9]\d{3}, [^\d]{2,}$"
							value={plzOrt}
							onChange={handleBlurPlzOrt}
							onBlur={parsePlzOrt}
						/>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie Ihre PLZ und Ort in der Form PLZ, Ortsname
							ein.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationWohnland">
					<FloatingLabel
						controlId="formWohnland"
						label="Wohnland"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="Afghanistan">Afghanistan</option>
							<option value="Albania">Albania</option>
							<option value="Algeria">Algeria</option>
							<option value="Andorra">Andorra</option>
							<option value="Angola">Angola</option>
							<option value="Antigua and Barbuda">
								Antigua and Barbuda
							</option>
							<option value="Argentina">Argentina</option>
							<option value="Armenia">Armenia</option>
							<option value="Australia">Australia</option>
							<option value="Austria">Austria</option>
							<option value="Azerbaijan">Azerbaijan</option>
							<option value="Bahamas">Bahamas</option>
							<option value="Bahrain">Bahrain</option>
							<option value="Bangladesh">Bangladesh</option>
							<option value="Barbados">Barbados</option>
							<option value="Belarus">Belarus</option>
							<option value="Belgium">Belgium</option>
							<option value="Belize">Belize</option>
							<option value="Benin">Benin</option>
							<option value="Bhutan">Bhutan</option>
							<option value="Bolivia">Bolivia</option>
							<option value="Bosnia and Herzegovina">
								Bosnia and Herzegovina
							</option>
							<option value="Botswana">Botswana</option>
							<option value="Brazil">Brazil</option>
							<option value="Brunei">Brunei</option>
							<option value="Bulgaria">Bulgaria</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Côte d'Ivoire">Côte d'Ivoire</option>
							<option value="Cabo Verde">Cabo Verde</option>
							<option value="Cambodia">Cambodia</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Canada">Canada</option>
							<option value="Central African Republic">
								Central African Republic
							</option>
							<option value="Chad">Chad</option>
							<option value="Chile">Chile</option>
							<option value="China">China</option>
							<option value="Colombia">Colombia</option>
							<option value="Comoros">Comoros</option>
							<option value="Congo (Congo-Brazzaville)">
								Congo (Congo-Brazzaville)
							</option>
							<option value="Costa Rica">Costa Rica</option>
							<option value="Croatia">Croatia</option>
							<option value="Cuba">Cuba</option>
							<option value="Cyprus">Cyprus</option>
							<option value="Czechia (Czech Republic)">
								Czechia (Czech Republic)
							</option>
							<option value="Democratic Republic of the Congo">
								Democratic Republic of the Congo
							</option>
							<option value="Denmark">Denmark</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Dominica">Dominica</option>
							<option value="Dominican Republic">
								Dominican Republic
							</option>
							<option value="Ecuador">Ecuador</option>
							<option value="Egypt">Egypt</option>
							<option value="El Salvador">El Salvador</option>
							<option value="Equatorial Guinea">
								Equatorial Guinea
							</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Estonia">Estonia</option>
							<option value="Eswatini">Eswatini</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Fiji">Fiji</option>
							<option value="Finland">Finland</option>
							<option value="France">France</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Georgia">Georgia</option>
							<option value="Germany">Germany</option>
							<option value="Ghana">Ghana</option>
							<option value="Greece">Greece</option>
							<option value="Grenada">Grenada</option>
							<option value="Guatemala">Guatemala</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Guyana">Guyana</option>
							<option value="Haiti">Haiti</option>
							<option value="Holy See">Holy See</option>
							<option value="Honduras">Honduras</option>
							<option value="Hungary">Hungary</option>
							<option value="Iceland">Iceland</option>
							<option value="India">India</option>
							<option value="Indonesia">Indonesia</option>
							<option value="Iran">Iran</option>
							<option value="Iraq">Iraq</option>
							<option value="Ireland">Ireland</option>
							<option value="Israel">Israel</option>
							<option value="Italy">Italy</option>
							<option value="Jamaica">Jamaica</option>
							<option value="Japan">Japan</option>
							<option value="Jordan">Jordan</option>
							<option value="Kazakhstan">Kazakhstan</option>
							<option value="Kenya">Kenya</option>
							<option value="Kiribati">Kiribati</option>
							<option value="Kuwait">Kuwait</option>
							<option value="Kyrgyzstan">Kyrgyzstan</option>
							<option value="Laos">Laos</option>
							<option value="Latvia">Latvia</option>
							<option value="Lebanon">Lebanon</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Liechtenstein">Liechtenstein</option>
							<option value="Lithuania">Lithuania</option>
							<option value="Luxembourg">Luxembourg</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Malaysia">Malaysia</option>
							<option value="Maldives">Maldives</option>
							<option value="Mali">Mali</option>
							<option value="Malta">Malta</option>
							<option value="Marshall Islands">Marshall Islands</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Mexico">Mexico</option>
							<option value="Micronesia">Micronesia</option>
							<option value="Moldova">Moldova</option>
							<option value="Monaco">Monaco</option>
							<option value="Mongolia">Mongolia</option>
							<option value="Montenegro">Montenegro</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Myanmar (formerly Burma)">
								Myanmar (formerly Burma)
							</option>
							<option value="Namibia">Namibia</option>
							<option value="Nauru">Nauru</option>
							<option value="Nepal">Nepal</option>
							<option value="Netherlands">Netherlands</option>
							<option value="New Zealand">New Zealand</option>
							<option value="Nicaragua">Nicaragua</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="North Korea">North Korea</option>
							<option value="North Macedonia (formerly Macedonia)">
								North Macedonia (formerly Macedonia)
							</option>
							<option value="Norway">Norway</option>
							<option value="Oman">Oman</option>
							<option value="Pakistan">Pakistan</option>
							<option value="Palau">Palau</option>
							<option value="Palestine State">Palestine State</option>
							<option value="Panama">Panama</option>
							<option value="Papua New Guinea">Papua New Guinea</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Peru">Peru</option>
							<option value="Philippines">Philippines</option>
							<option value="Poland">Poland</option>
							<option value="Portugal">Portugal</option>
							<option value="Qatar">Qatar</option>
							<option value="Romania">Romania</option>
							<option value="Russia">Russia</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Saint Kitts and Nevis">
								Saint Kitts and Nevis
							</option>
							<option value="Saint Lucia">Saint Lucia</option>
							<option value="Saint Vincent and the Grenadines">
								Saint Vincent and the Grenadines
							</option>
							<option value="Samoa">Samoa</option>
							<option value="San Marino">San Marino</option>
							<option value="Sao Tome and Principe">
								Sao Tome and Principe
							</option>
							<option value="Saudi Arabia">Saudi Arabia</option>
							<option value="Senegal">Senegal</option>
							<option value="Serbia">Serbia</option>
							<option value="Seychelles">Seychelles</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="Singapore">Singapore</option>
							<option value="Slovakia">Slovakia</option>
							<option value="Slovenia">Slovenia</option>
							<option value="Solomon Islands">Solomon Islands</option>
							<option value="Somalia">Somalia</option>
							<option value="South Africa">South Africa</option>
							<option value="South Korea">South Korea</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Spain">Spain</option>
							<option value="Sri Lanka">Sri Lanka</option>
							<option value="Sudan">Sudan</option>
							<option value="Suriname">Suriname</option>
							<option value="Sweden">Sweden</option>
							<option value="Switzerland">Switzerland</option>
							<option value="Syria">Syria</option>
							<option value="Tajikistan">Tajikistan</option>
							<option value="Tanzania">Tanzania</option>
							<option value="Thailand">Thailand</option>
							<option value="Timor-Leste">Timor-Leste</option>
							<option value="Togo">Togo</option>
							<option value="Tonga">Tonga</option>
							<option value="Trinidad and Tobago">
								Trinidad and Tobago
							</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Turkey">Turkey</option>
							<option value="Turkmenistan">Turkmenistan</option>
							<option value="Tuvalu">Tuvalu</option>
							<option value="Uganda">Uganda</option>
							<option value="Ukraine">Ukraine</option>
							<option value="United Arab Emirates">
								United Arab Emirates
							</option>
							<option value="United Kingdom">United Kingdom</option>
							<option value="United States of America">
								United States of America
							</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Uzbekistan">Uzbekistan</option>
							<option value="Vanuatu">Vanuatu</option>
							<option value="Venezuela">Venezuela</option>
							<option value="Vietnam">Vietnam</option>
							<option value="Yemen">Yemen</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie ihr Wohnland an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-3  ">
				<Form.Group as={Col} controlId="validationWohnort">
					<FloatingLabel
						controlId="formWohnort"
						label="Wohnort"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"

						//readOnly
						// ref={inputRefGeburtsort}
						// onBlur={handleBlurGeburtsort}
						// pattern="^.{2,}$"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie ihren Geburtsort an.

                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>

				<Form.Group as={Col} controlId="validationWohnortkennzahl">
					<FloatingLabel
						controlId="formWohnortkennzahl"
						label="Wohnortkennzahl"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"

						//readOnly
						// ref={inputRefGeburtsort}
						// onBlur={handleBlurGeburtsort}
						// pattern="^.{2,}$"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie ihren Geburtsort an.

                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>

				<Form.Group as={Col} controlId="validationGemeindekennzahl">
					<FloatingLabel
						controlId="formGemeindekennzahl"
						label="Gemeindekennzahl"
						className="pt-1"
					>
						<Form.Control
							required
							type="text"

						//readOnly
						// ref={inputRefGeburtsort}
						// onBlur={handleBlurGeburtsort}
						// pattern="^.{2,}$"
						/>
						{/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie ihren Geburtsort an.

                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationGeschwisterNo">
					<FloatingLabel
						controlId="formGeschwisterNo"
						label="Anzahl der Geschwister"
						className="pt-1"
					>
						<Form.Select required>
							<option />
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie die Anzahl ihrer Geschwister an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-4">
				<Form.Group controlId="validationGeschwisterHtl">
					<FloatingLabel
						controlId="formGeschwisterHtl"
						label="Anzahl der Geschwister an der HTBLuVA Salzburg"
						className="pt-1"
					>
						<Form.Select
							onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
								handleGeschwisterHtl(event)
							}
							required
						>
							<option />
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</Form.Select>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie die Anzahl ihrer Geschwister an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
			<Row className="mb-3 mt-4 ">
				<Form.Group controlId="validationGeschwister">
					<FloatingLabel
						controlId="formGeschwister"
						label="Geschwisternamen 
                   an der 
                  HTBLuVA Salzburg"
						className="pt-1 "
					>
						<Form.Control
							required={geschwisterHtl}
							type="text"
							pattern="^.{3,}$"

						//readOnly
						// ref={inputRefGeburtsort}
						// onBlur={handleBlurGeburtsort}
						//pattern="[A-Z][a-z]*"
						/>
						<Form.Control.Feedback type="invalid" className="mx-2">
							Bitte geben Sie die Namen ihrer Geschwister an der HTBLuVA
							Salzburg an.
						</Form.Control.Feedback>
					</FloatingLabel>
				</Form.Group>
			</Row>
		</Form>
	);
};

export default Persdaten;