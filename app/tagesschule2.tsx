import { PhoneNumberFormat, PhoneNumberType, PhoneNumberUtil } from "google-libphonenumber";
import axios from "axios";
import { useForm, Controller, Control, ControllerRenderProps, set } from "react-hook-form";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import {
	//Accordion,
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Modal,
	ProgressBar,
	Row,
	Accordion
} from "react-bootstrap";

type FormData = {
	anrede: string;
	titelVor: string;
	titelNach: string;
	anmeldenummer: string;
	kontaktmailadresse: string;
	vorname: string;
	nachname: string;
	telnr: string;
	laendervorwahl1: string;
	vorwahl1: string;
	nummer1: string;
	email: string;
	geburtsdatum: string;
	weitereVornamen: string;
	geschlecht: string;
	geburtsort: string;
	geburtsland: string;
	staatsbuergerschaft: string;
	muttersprache: string;
	alltagssprache: string;
	religion: string;
	svNummer: string;
	svGebDat: string;
	sozialversicherungstraeger: string;
	SVTAUT: string;
	strasse: string;
	adresse: string;
	plzort: string;
	hausnummer: string;
	plz: string;
	ort: string;
	plzA: string;
	ortA: string;
	plzB: string;
	ortB: string;
	wohnland: string;
	letzteschulform: string;
	verhaeltnisA: string;
	anredeA: string;
	titelvorA: string;
	titelnachA: string;
	nachnameA: string;
	vornameA: string;
	strasseA: string;
	adresseA: string;
	plzortA: string;
	adresseB: string;
	plzortB: string;
	hausnummerA: string;
	postleitzahlA: string;
	wohnortA: string;
	wohnlandA: string;
	laendervorwahlA2: string;
	vorwahlA2: string;
	nummerA2: string;
	mailadresseA: string;
	verhaeltnisB: string;
	anredeB: string;
	titelvorB: string;
	titelnachB: string;
	nachnameB: string;
	vornameB: string;
	strasseB: string;
	hausnummerB: string;
	postleitzahlB: string;
	wohnortB: string;
	wohnlandB: string;
	laendervorwahlB1: string;
	vorwahlB1: string;
	nummerB1: string;
	laendervorwahlB2: string;
	vorwahlB2: string;
	nummerB2: string;
	mailadresseB: string;
	geschwisteranzahl: string;
	geschwisteranschule: string;
	geschwisternamen: string;
	erstwunsch: string;
	erstwunschschule: string;
	zweitwunschschule: string;
};


const Abendschule2: React.FC = () => {

	interface Option {
		id: number;
		name: string;
	}
	interface Option2 {
		value: string;
		name: string;
	}

	const [OptionsGeburtsland, setOptionsGeburtsland] = useState<Option[]>([]);
	const [OptionsStaatsbuergerschaft, setOptionsStaatsbuergerschaft] = useState<Option[]>([]);
	const [OptionsErstsprache, setOptionsErstsprache] = useState<Option[]>([]);
	const [OptionsZweitsprache, setOptionsZweitsprache] = useState<Option[]>([]);
	const [OptionsReligionsbekenntnis, setOptionsReligionsbekenntnis] = useState<Option[]>([]);
	const [OptionsWohnland, setOptionsWohnland] = useState<Option[]>([]);
	const [OptionsTitelVor, setOptionsTitelVor] = useState<Option[]>([]);
	const [OptionsTitelNach, setOptionsTitelNach] = useState<Option[]>([]);
	const [OptionsSozialversicherungstraeger, setOptionsSozialversicherungstraeger] = useState<Option[]>([]);
	const [OptionsGeschlecht, setOptionsGeschlecht] = useState<Option[]>([]);
	const [OptionsVerhaeltnis, setOptionsVerhaeltnis] = useState<Option[]>([]);
	const [OptionsAnrede, setOptionsAnrede] = useState<Option2[]>([]);
	// const [OptionsAnredeA, setOptionsAnredeA] = useState<Option2[]>([]);
	const { watch, handleSubmit, control, setValue, formState: { errors } } = useForm<FormData>();
	const [emailB, setEmailB] = useState("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const SVTAUTValue = watch('SVTAUT');
	const Erstwunsch = watch('erstwunsch');

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const session = searchParams.get("session");
	const navigate = useNavigate();
	if (!session) {
		navigate("/");

	}

	const [email, setEmail] = useState("");


	// const [isChecked, setIsChecked] = useState(false);


	const [validated, setValidated] = useState(true);
	const [currentDate] = useState(getYear());

	// const [isValid, setIsValid] = useState<boolean>(false);
	// const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	// const [phoneNumber, setPhonenumber] = useState("");
	// const [isValid, setIsValid] = useState<boolean>(false);
	// const [birthdate, setBirthdate] = useState("");
	// const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	// const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	// const [vorname, setVorname] = useState("");
	// const [nachname, setNachname] = useState("");
	const currentDateForOption = new Date();
	const specificDateCutoff = new Date(currentDateForOption.getFullYear(), 1, 1);
	const [showModalEmail, setShowModalEmail] = useState<boolean>(false);
	const [showModalSchoolReport, setShowModalSchoolReport] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	// const [showModal, setShowModal] = useState<boolean>(false);
	// const [isSubmitted, setIsSubmitted] = useState(false);
	// const [radioState, setRadioState] = useState(true);
	// const [adress, setAdress] = useState("");
	// const [plzOrt, setPlzOrt] = useState("");
	// const [, setRadioStateGeschlecht] = useState("");
	const [prefillData, setPrefillData] = useState<FormData | null>(null);
	const handlePhoneBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputPhoneNumber = event.target.value.trim();
		setPhoneNumber(inputPhoneNumber);
		const phoneUtil = PhoneNumberUtil.getInstance();
		let isValid = false;

		try {
			// Parse the number without specifying a country code
			const inputNumber = phoneUtil.parse(inputPhoneNumber);
			// Check if the number is valid and possible
			isValid = phoneUtil.isValidNumber(inputNumber) && phoneUtil.isPossibleNumber(inputNumber);
			// Format the number in the international format
			const formattedNumber = phoneUtil.format(inputNumber, PhoneNumberFormat.INTERNATIONAL);
			// Check if the number is in the correct format
			const regex = /^\+\d{1,3} \d{1,3} \d{1,8}$/; // This pattern allows for any country code, area code, and local number
			isValid = isValid && regex.test(formattedNumber);
		} catch (err) {
			console.error(err);
		}

		setIsValid(isValid);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsEmailValid(validateEmail(event.target.value));
		setEmailB(event.target.value.trim());
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
	const capitalizeFirstLetterOfEachWord = (string: string) => {
		return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
	};




	useEffect(() => {
		const fetchOptionsGeburtsland = async () => {
			try {
				const response = await axios.get('/options/geburtsland/');
				setOptionsGeburtsland(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsSozialversicherungstraeger = async () => {
			try {
				const response = await axios.get('/options/sozialversicherungstraeger/');
				setOptionsSozialversicherungstraeger(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsStaatsbuergerschaft = async () => {
			try {
				const response = await axios.get('/options/staatsbuergerschaft/');
				setOptionsStaatsbuergerschaft(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsErstsprache = async () => {
			try {
				const response = await axios.get('/options/erstsprache/');
				setOptionsErstsprache(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsZweitsprache = async () => {
			try {
				const response = await axios.get('/options/zweitsprache/');
				setOptionsZweitsprache(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsReligionsbekenntnis = async () => {
			try {
				const response = await axios.get('/options/religionsbekenntnis/');
				setOptionsReligionsbekenntnis(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsWohnland = async () => {
			try {
				const response = await axios.get('/options/wohnland/');
				setOptionsWohnland(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsGeschlecht = async () => {
			try {
				const response = await axios.get('/options/geschlecht/');
				setOptionsGeschlecht(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsAnrede = async () => {
			try {
				const response = await axios.get('/options/anrede/');
				setOptionsAnrede(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsTitelVor = async () => {
			try {
				const response = await axios.get('/options/titel/');
				setOptionsTitelVor(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsTitelNach = async () => {
			try {
				const response = await axios.get('/options/titel/');
				setOptionsTitelNach(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		const fetchOptionsVerhaeltnis = async () => {
			try {
				const response = await axios.get('/options/verhaeltnis/');
				setOptionsVerhaeltnis(response.data);
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};
		fetchOptionsAnrede();
		fetchOptionsTitelVor();
		fetchOptionsTitelNach();
		fetchOptionsGeschlecht();
		fetchOptionsGeburtsland();
		fetchOptionsStaatsbuergerschaft();
		fetchOptionsErstsprache();
		fetchOptionsZweitsprache();
		fetchOptionsReligionsbekenntnis();
		fetchOptionsWohnland();
		fetchOptionsSozialversicherungstraeger();
		fetchOptionsVerhaeltnis();
	}
		, []);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Assuming phoneNumber is the state variable holding the phone number value
		handlePhoneBlur({ target: { value: phoneNumber } } as React.ChangeEvent<HTMLInputElement>);
	}, [phoneNumber]);


	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Assuming emailB is the state variable holding the email value
		handleEmailChange({ target: { value: emailB } } as React.ChangeEvent<HTMLInputElement>);
	}, [emailB]);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`https://localhost/anmeldungen/tagesschule/sessionfill/${session}`);
				if (response.data && response.data.length > 0) {
					const data = response.data[0];
					setPrefillData(data as FormData)
					setValue('anrede', data.anrede);
					setValue('anredeA', data.anredea);
					setValue('anredeB', data.anredeb);
					setValue('titelvorA', data.titelvora);
					setValue('titelnachA', data.titelnacha);
					setValue('titelvorB', data.titelvorb);
					setValue('titelnachB', data.titelnachb);
					setValue('vornameA', data.vornamea);
					setValue('nachnameA', data.nachnamea);
					setValue('vornameB', data.vornameb);
					setValue('nachnameB', data.nachnameb);
					// setValue('telnrA', data.telnr);
					setValue('mailadresseA', data.kontaktmailadresse);
					setValue('strasseA', data.strassea);
					setValue('hausnummerA', data.hausnummera);
					setValue('adresseA', `${data.strassea} ${data.hausnummera}`);
					setValue('plzortA', `${data.postleitzahla}, ${data.wohnorta}`);
					setValue('plzA', data.postleitzahla);
					setValue('ortA', data.wohnorta);
					setValue('wohnlandA', data.wohnlanda);
					setValue('mailadresseB', data.mailadresseb);
					setValue('strasseB', data.strasseb);
					setValue('hausnummerB', data.hausnummerb);
					setValue('adresseB', `${data.strasseb} ${data.hausnummerb}`);
					setValue('plzortB', `${data.postleitzahlb}, ${data.wohnortb}`);
					setValue('plzB', data.postleitzahlb);
					setValue('ortB', data.wohnortb);
					setValue('wohnlandB', data.wohnlanda);
					setValue('geschlecht', data.geschlecht);
					setValue('vorname', data.vorname);
					setValue('nachname', data.nachname);
					setValue('telnr', `${data.laendervorwahl1}${data.vorwahl1}${data.nummer1}`);
					setValue('email', data.kontaktmailadresse);
					setValue('geburtsdatum', data.geburtsdatum.substring(0, 10));
					setValue('weitereVornamen', data.vornamen);
					setValue('geburtsort', data.geburtsort);
					setValue('geburtsland', data.geburtsland);
					setValue('staatsbuergerschaft', data.staatsbuergerschaft);
					setValue('muttersprache', data.erstsprache);
					setValue('alltagssprache', data.zweitsprache);
					setValue('religion', data.religionsbekenntnis);
					setValue('svGebDat', data.sozialversicherungsGebDat);
					setValue('svNummer', `${data.sozialversicherungsnummer} ${data.sozialversicherungsgebdat}`);
					setValue("SVTAUT", data.sozialversicherungaut.toString());
					setValue('sozialversicherungstraeger', data.sozialversicherungstraeger);
					setValue('strasse', data.strasse);
					setValue('hausnummer', data.hausnummer);
					setValue('adresse', `${data.strasse} ${data.hausnummer}`);
					setValue('plzort', `${data.postleitzahl}, ${data.wohnort}`);
					setValue('plz', data.postleitzahl);
					setValue('ort', data.wohnort);
					setValue('wohnland', data.wohnland);
					setValue('letzteschulform', data.letzteschulform);
					setValue('zweitwunschschule', data.zweitwunschschule);
					setValue('erstwunsch', data.erstwunsch);
					setValue('geschwisteranzahl', data.geschwisteranzahl);
					setValue('geschwisteranschule', data.geschwisteranschule);
					setValue('geschwisternamen', data.geschwisternamen);
					setValue('verhaeltnisA', data.verhaeltnisa);
					setValue('anredeA', data.anredea);
					setValue('verhaeltnisB', data.verhaeltnisb);
					setValue('anredeB', data.anredeb);
					setValue('titelvorB', data.titelvorb);
					setValue('titelnachB', data.titelnachb);
					setPhoneNumber(`${data.laendervorwahlb1}${data.vorwahlb1}${data.nummerb1}`);
					setEmailB(data.mailadresseb);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

	}, [session]);


	// const fetchSessionData = async (sessionHash: string): Promise<ZsvBewerber[]> => {
	// 	try {
	// 		const response = await fetch(`https://localhost/anmeldungen/abendschule/session/${sessionHash}`);

	// 		if (!response.ok) {
	// 			throw new Error(`Error fetching data: ${response.statusText}`);
	// 		}

	// 		const data: ZsvBewerber[] = await response.json();
	// 		return data;
	// 	} catch (error) {
	// 		console.error(error);
	// 		throw error; // Re-throw the error to handle it in your component
	// 	}
	// };


	const onSubmit = (data: FormData) => {
		data.anmeldenummer = prefillData?.anmeldenummer || '';
		data.laendervorwahlB1 = phoneNumber.substring(0, 3);
		data.vorwahlB1 = phoneNumber.substring(3, 6);
		data.nummerB1 = phoneNumber.substring(6);
		data.mailadresseB = emailB;

		console.log("Client_Start -----------");
		console.log(data);
		console.log("Client_End -----------");

		axios.post("https://localhost/registration/tagesschule/session/", data, {
			headers: {
				'Content-Type': 'application/json',
			},

		}).then((response) => {
			console.log(response);
			if (!isSubmitted && response.status === 202) {
				// setShowAlert(true);
				setIsSubmitted(true);
				setShowModalEmail(true);
			}

		}).catch(error => {
			console.error(error);
			if (error.response && error.response.status === 410) {
				setIsSubmitted(true);
				setShowModalSchoolReport(true);
			}
		});
	};
	return (
		<Container className="p-5 border" style={{ backgroundColor: "whitesmoke" }}>
			<Row className="justify-content-center">
				<Col xs={8}>
					<h2>Anmeldefortschritt</h2>
					<ProgressBar animated now={90} label={"90%"} />

					<h2 className="mt-5 mb-5">Anmeldung an der HTBLuVA Salzburg</h2>
					<h3 className="mb-5">Schuljahr {currentDate}</h3>
					<p>{/* <strong>Sie können sich nur einmal anmelden!</strong> */}</p>

					{/* <p className="h6">
						Für die Anmeldung sind die Abschlusszeugnisse ihrer bisherigen
						Ausbildungen notwendig.
					</p> */}
					<Form validated={validated} onSubmit={handleSubmit(onSubmit)} method="post">
						<Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationSalutation">
								<FloatingLabel
									controlId="formSalutation"
									label="Anrede"
									className="pt-1"
								>
									<Controller
										name="anrede"
										defaultValue={prefillData?.anrede || ''}
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field}>
												<option value="" />
												{OptionsAnrede.map((option) => (
													<option value={option.value}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>
						{/* <Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationTitelVorA">
								<FloatingLabel
									controlId="formTitelVorA"
									label="Titel vor "
									className="pt-1"
								>
									<Controller
										name="titelvorA"
										defaultValue={prefillData?.titelvorA || ''}
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field}>
												<option value="" />
												{OptionsTitelVor.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2 mb-1" />
								</FloatingLabel>
							</Form.Group>
							<Form.Group controlId="validationTitelNach">
								<FloatingLabel
									controlId="formTitelNach"
									label="Titel nach "
									className="pt-1"
								>
									<Controller
										name="titelNach"
										control={control}
										defaultValue={prefillData?.titelnachA || ''}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field}>
												<option value="" />
												{OptionsTitelNach.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2 mb-1" />
								</FloatingLabel>
							</Form.Group>
						</Row> */}

						<Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationVorname">
								<FloatingLabel
									controlId="formVorname"
									label="Vorname"
									className="pt-1"
								>
									<Controller
										name="vorname"
										defaultValue={prefillData?.vorname} // Set the default value based on the fetched data
										control={control}
										render={({ field }) => (
											<Form.Control
												type="text"
												disabled // Keep the disabled attribute if needed
												placeholder="Vorname"
												{...field} // Spread the field props to the Form.Control
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2 mb-1">
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
									<Controller
										name="nachname"
										control={control}
										defaultValue={prefillData?.nachname} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="Nachname"
												{...field} // Spread the field props to the Form.Control
												disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie den Nachnamen des Bewerbers an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>

						<Row className="mb-2 mt-4 ">
							<Form.Group controlId="validationWeitereVornamen">
								<FloatingLabel
									controlId="formWeitereVornamen"
									label="Weitere Vornamen"
									className="pt-1"
								>
									<Controller
										name="weitereVornamen"
										control={control}
										defaultValue={prefillData?.weitereVornamen || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="weitere Vornamen"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									{/* <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte geben Sie den Nachnamen des Bewerbers an.

                    {email}
                  </Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>


						<Row className="mb-4 mt-4 ">
							<Form.Group >
								<FloatingLabel
									controlId="formGeschlecht"
									label="Biologisches Geschlecht"
									className="pt-1"
								>
									<Controller
										name="geschlecht"
										control={control}
										rules={{ required: false }}
										defaultValue={prefillData?.geschlecht || ''}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsGeschlecht.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>

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
								<Controller
									name="email"
									control={control}
									defaultValue={prefillData?.kontaktmailadresse} // Set the default value based on the fetched data
									render={({ field }) => (
										<Form.Control
											type="email"
											disabled
											placeholder="E-mail"
											{...field} // Spread the field props to the Form.Control
										// disabled // Keep the disabled attribute if needed
										/>
									)}
								/>
								{/* <Form.Control.Feedback
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
								</Form.Control.Feedback> */}
								<Container className="mt-2">
									<Form.Text id="emailHelpBlock" muted>
										Über diese E-Mail Adresse müssen Sie im Verlauf des
										Aufnahmeprozesses erreichbar sein. An diese E-Mail Adresse
										werden Bestätigungen und Terminverständigungen geschickt.
										Eine Änderung ist unbedingt bekannt zu geben.
										Die E-Mail
										Adresse muss von einem Erziehungsberechtigten abgerufen
										werden.
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
								<Controller
									name="telnr"
									control={control}
									defaultValue={prefillData?.telnr} // Set the default value based on the fetched data
									render={({ field }) => (
										<Form.Control
											type="string"
											disabled
											placeholder="text"
											{...field} // Spread the field props to the Form.Control
										// disabled // Keep the disabled attribute if needed
										/>
									)}
								/>
								{/* <Form.Control.Feedback
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
								</Form.Control.Feedback> */}
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
						<Row>
							<Form.Group controlId="validationGeburtsdatum">
								<FloatingLabel
									controlId="formGridState"
									label="Geburtsdatum"
									className="pt-1 mt-3"
								>
									{/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
									<Controller
										name="geburtsdatum"
										control={control}
										defaultValue={prefillData?.geburtsdatum} // Set the default value based on the fetched data
										disabled
										render={({ field }) => (
											<Form.Control
												type="text"
												// placeholder="E-mail"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									{/* <Form.Control.Feedback
										type={isBirthdateValid ? "valid" : "invalid"}
										className="mx-2"
									>
										Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen
										mindestens 17 Jahre alt sein .
									</Form.Control.Feedback> */}
								</FloatingLabel>
							</Form.Group>
						</Row>

						<Row className="mb-4">
							<Form.Group controlId="validationSVT">
								<FloatingLabel
									controlId="formSVT"
									// style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
									label="Österreichische Sozialversicherungsnummer"
									className="mt-1"
								>
									<Col className="mx-3 pt-5">
										<Controller
											name="SVTAUT"
											defaultValue={prefillData?.SVTAUT || ''}
											control={control}
											rules={{ required: false }} // Set the validation rules as needed
											render={({ field }) => (
												<Form.Check
													inline
													label="ja"
													type="radio"
													id="inline-radio-1"
													value="1"
													checked={field.value === "1"}
													onChange={(e) => {
														field.onChange(e); // Update the form state
														setValue('SVTAUT', e.target.value); // Also update the local state if needed
													}}
												/>
											)}
										/>
										<Controller
											name="SVTAUT"
											control={control}
											defaultValue={prefillData?.SVTAUT || ''}
											rules={{ required: false }} // Set the validation rules as needed
											render={({ field }) => (
												<Form.Check
													inline
													label="nein"
													type="radio"
													id="inline-radio-2"
													value="0"
													checked={field.value === "0"}
													onChange={(e) => {
														field.onChange(e); // Update the form state
														setValue('SVTAUT', e.target.value); // Also update the local state if needed
													}}
												/>
											)}
										/>
									</Col>
								</FloatingLabel>
							</Form.Group>
						</Row>
						{SVTAUTValue === '1' && (
							<Form.Group className="mb-3 mt-5" controlId="validationSVV">
								{
									<FloatingLabel
										controlId="formSelectSVV"
										label="Sozialversicherungsträger"
										// className="mt-5"
										className="pt-1 "
									>
										<Controller
											name="sozialversicherungstraeger"
											control={control}
											rules={{ required: false }}
											defaultValue={prefillData?.sozialversicherungstraeger || ''} // Set the default value based on the fetched data
											render={({ field }) => (
												<Form.Select {...field} >
													<option value="" />
													{OptionsSozialversicherungstraeger.map((option) => (
														<option value={option.id}>
															{option.name}
														</option>
													))}
												</Form.Select>
											)}
										/>
										<Form.Control.Feedback type="invalid" className="mx-2">
											Bitte geben Sie den Sozialversicherungsträger an.
										</Form.Control.Feedback>
										<br />
										<FloatingLabel
											controlId="formSVNumber"
											label="SV-Nummer"
											className="pt-1"
										>
											<Controller
												name="svNummer"
												control={control}
												defaultValue={prefillData?.svNummer || ''} // Set the default value based on the fetched data
												render={({ field }) => (
													<Form.Control
														type="text"
														placeholder="SV-Nummer"
														{...field} // Spread the field props to the Form.Control
													// disabled // Keep the disabled attribute if needed
													/>
												)}
											/>
											<Form.Control.Feedback type="invalid" className="mx-2">
												Bitte geben Sie Ihre SV-Nummer in der Form 1234 TTMMJJ ein.
											</Form.Control.Feedback>
										</FloatingLabel>
									</FloatingLabel>
								}
							</Form.Group>
						)}

						<Row className="mb-3 mt-4 ">
							<Form.Group controlId="validationGeburtsort">
								<FloatingLabel
									controlId="formGeburtsort"
									label="Geburtsort"
									className="pt-1"
								>

									<Controller
										name="geburtsort"
										control={control}
										defaultValue={prefillData?.geburtsort || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="Geburtsort"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
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
									<Controller
										name="geburtsland"
										control={control}
										defaultValue={prefillData?.geburtsland || ''}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsGeburtsland.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>

								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-4">
							<Form.Group controlId="validationStaatsbuergerschaft">
								<FloatingLabel
									controlId="formStaatsbuergerschaft"
									label="Staatsbürgerschaft"
									className="pt-1"
									typeof="number"
								>
									<Controller
										name="staatsbuergerschaft"
										control={control}
										defaultValue={prefillData?.staatsbuergerschaft || ''} // Set the default value based on the fetched data
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsStaatsbuergerschaft.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-4">
							<Form.Group controlId="validationMuttersprache">
								<FloatingLabel
									controlId="formMuttersprache"
									label="Muttersprache"
									className="pt-1"
								><Controller
										name="muttersprache"
										control={control}
										defaultValue={prefillData?.muttersprache || ''} // Set the default value based on the fetched data
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsErstsprache.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>

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
									<Controller
										name="alltagssprache"
										control={control}
										defaultValue={prefillData?.alltagssprache || ''} // Set the default value based on the fetched data
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsZweitsprache.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-4">
							<Form.Group controlId="validationReligion">
								<FloatingLabel
									controlId="formReligion"
									label="Religion"
									className="pt-1"
								><Controller
										name="religion"
										control={control}
										defaultValue={prefillData?.religion || ''}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsReligionsbekenntnis.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)} />
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-5 mt-4 ">
							<Form.Group controlId="validationAdresse">
								<FloatingLabel
									controlId="formAdresse"
									label="Strasse Hausnummer"
									className="pt-1"
								>
									<Controller
										name="adresse"
										control={control}
										defaultValue={prefillData?.adresse || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												pattern="^[^\d]+\s+\d+.*$"
												type="text"
												placeholder="Straße Hausnummer"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie Ihre Adresse in der Form Strasse Hausnummer
										Top Stiege etc. ein.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-3 mt-4 ">
							<Form.Group controlId="validationPlzOrt">
								<FloatingLabel
									controlId="formPlzOrt"
									label="PLZ, Ort"
									className="pt-1"
								>
									<Controller
										name="plzort"
										control={control}
										defaultValue={prefillData?.plzort || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="PLZ, Ort"
												pattern="^[1-9]\d{3,5}, [^\d]{2,}$"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
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
									<Controller

										name="wohnland"
										control={control}
										defaultValue={prefillData?.wohnland || ''}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
												{OptionsWohnland.map((option) => (
													<option value={option.id}>
														{option.name}
													</option>
												))}
											</Form.Select>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie ihr Wohnland an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-3 mt-4 ">
							<Form.Group controlId="validationLetzteSchulform">
								<FloatingLabel
									controlId="formLetzteSchulform"
									label="Zuletzt besuchte Schulform"
									className="pt-1"
								>
									<Controller
										name="letzteschulform"
										control={control}
										defaultValue={prefillData?.letzteschulform || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="Zuletzt besuchte Schulform"
												// pattern="^[1-9]\d{3,5}, [^\d]{2,}$"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie ihre zuletzt besuchte Schulform an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-3 mt-4 ">
							<Form.Group controlId="validationErstwunschSchule">
								<FloatingLabel
									controlId="formErstwunschSchule"
									label="Erstwunschschule"
									className="mt-1 "
								>
									<Col className="mx-3 pt-5">
										<Controller
											name="erstwunsch"
											defaultValue={prefillData?.erstwunsch}
											control={control}
											rules={{ required: false }} // Set the validation rules as needed
											render={({ field }) => (
												<Form.Check
													inline
													label="ja"
													type="radio"
													id="inline-radio-1"
													value="1"
													checked={field.value === "1"}
													onChange={(e) => {
														field.onChange(e); // Update the form state
														setValue('erstwunsch', e.target.value); // Also update the local state if needed
													}}
												/>
											)}
										/>
										<Controller
											name="erstwunsch"
											defaultValue={prefillData?.erstwunsch}
											control={control}
											rules={{ required: false }} // Set the validation rules as needed
											render={({ field }) => (
												<Form.Check
													inline
													label="nein"
													type="radio"
													id="inline-radio-2"
													value="0"
													checked={field.value === "0"}
													onChange={(e) => {
														field.onChange(e); // Update the form state
														setValue('erstwunsch', e.target.value); // Also update the local state if needed
													}}
												/>
											)}
										/>
									</Col>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationZweitwunschSchule">
								<FloatingLabel
									controlId="formZweitwunschSchule"
									label="Zweitwunschschule"
									className="pt-1"
								>
									<Controller
										name="zweitwunschschule"
										control={control}
										defaultValue={prefillData?.zweitwunschschule || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												required={Erstwunsch === '0'}
												type="text"
												placeholder="Zweitwunschschule"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Haben Sie sich auch an einer zweiten Schule beworben?
									</Form.Control.Feedback>
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
									<Controller
										name="geschwisteranzahl"
										control={control}
										defaultValue={prefillData?.geschwisteranzahl || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Select {...field}  >
												<option value="" />
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
										)}
									/>
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

									<Controller
										name="geschwisteranschule"
										control={control}
										defaultValue={prefillData?.geschwisteranschule || ''} // Set the default value based on the fetched data
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} >
												<option value="" />
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
										)}
									/>


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
									<Controller
										name="geschwisternamen"
										control={control}
										defaultValue={prefillData?.geschwisternamen || ''} // Set the default value based on the fetched data
										render={({ field }) => (
											<Form.Control
												type="text"
												placeholder="Geschwisternamen"
												{...field} // Spread the field props to the Form.Control
											// disabled // Keep the disabled attribute if needed
											/>
										)}
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie die Namen ihrer Geschwister an der HTBLuVA
										Salzburg an.
									</Form.Control.Feedback>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Form.Group
							className="mb-3"
							id="formGridErsterErziehungsberechtigter"
						>
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header className="text-break">
										1. Erziehungsberechtigter
									</Accordion.Header>
									<Accordion.Body className="text-wrap">
										<Row className="mb-4">
											<Form.Group controlId="validationErsterErziehungsberechtigter">
												<FloatingLabel
													controlId="formErsterErziehungsberechtigter"
													label="Verhältnis"
													className="pt-1"
												>
													<Controller
														name="verhaeltnisA"
														control={control}
														rules={{ required: false }}
														defaultValue={prefillData?.verhaeltnisA || ''} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Select {...field} >
																<option value="" />
																{OptionsVerhaeltnis.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-4 mt-4 ">
											<Form.Group controlId="validationSalutation">
												<FloatingLabel
													controlId="formSalutation"
													label="Anrede"
													className="pt-1"
												>
													<Controller
														name="anredeA"
														defaultValue={prefillData?.anredeA || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsAnrede.map((option) => (
																	<option value={option.value}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
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
													<Controller
														name="titelvorA"
														defaultValue={prefillData?.titelvorA || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsTitelVor.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
												</FloatingLabel>
											</Form.Group>
											<Form.Group controlId="validationTitelNach">
												<FloatingLabel
													controlId="formTitelNach"
													label="Titel nach "
													className="pt-1"
												>
													<Controller
														name="titelnachA"
														defaultValue={prefillData?.titelnachA || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsTitelNach.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2 mb-1"
													/>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-4 mt-4 ">
											<Form.Group controlId="validationVorname">
												<FloatingLabel
													controlId="formVorname"
													label="Vorname"
													className="pt-1"
												>
													<Controller
														name="vornameA"
														defaultValue={prefillData?.vornameA} // Set the default value based on the fetched data
														control={control}
														render={({ field }) => (
															<Form.Control
																type="text"
																// Keep the disabled attribute if needed
																placeholder="Vorname"
																{...field} // Spread the field props to the Form.Control
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2 "
													>
														Bitte geben Sie den Vornamen des
														Erziehungsberechtigten an.
													</Form.Control.Feedback>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-3 mt-4 ">
											<Form.Group controlId="validationNachname">
												<FloatingLabel
													controlId="formNachname"
													label="Nachname"
													className="pt-1"
												>
													<Controller
														name="nachnameA"
														control={control}
														defaultValue={prefillData?.nachnameA} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Control
																type="text"
																placeholder="Nachname"
																{...field} // Spread the field props to the Form.Control
															// Keep the disabled attribute if needed
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2"
													>
														Bitte geben Sie den Nachnamen des
														Erziehungsberechtigten an.
													</Form.Control.Feedback>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-5 mt-4 ">
											<Form.Group controlId="validationAdresse">
												<FloatingLabel
													controlId="formAdresse"
													label="Strasse, Hausnummer"
													className="pt-1"
												>
													<Controller
														name="adresseA"
														control={control}
														defaultValue={prefillData?.adresseA || ''} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Control
																pattern="^[^\d]+\s+\d+.*$"
																type="text"
																placeholder="Straße Hausnummer"
																{...field} // Spread the field props to the Form.Control
															// disabled // Keep the disabled attribute if needed
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2"
													>
														Bitte geben Sie Ihre Adresse in der Form Strasse,
														Hausnummer Top Stiege etc. ein.
													</Form.Control.Feedback>
													<Row className="mb-3 mt-4 ">
														<Form.Group controlId="validationPlzOrt">
															<FloatingLabel
																controlId="formPlzOrt"
																label="PLZ, Ort"
																className="pt-1"
															>
																<Controller
																	name="plzortA"
																	control={control}
																	defaultValue={prefillData?.plzortA || ''} // Set the default value based on the fetched data
																	render={({ field }) => (
																		<Form.Control
																			type="text"
																			placeholder="PLZ, Ort"
																			pattern="^[1-9]\d{3,5}, [^\d]{2,}$"
																			{...field} // Spread the field props to the Form.Control
																		// disabled // Keep the disabled attribute if needed
																		/>
																	)}
																/>
																<Form.Control.Feedback
																	type="invalid"
																	className="mx-2"
																>
																	Bitte geben Sie Ihre PLZ und Ort in der Form
																	PLZ, Ortsname ein.
																</Form.Control.Feedback>
															</FloatingLabel>
														</Form.Group>
													</Row>
													<Row>
														<Form.Group controlId="validationWohnland">
															<FloatingLabel
																controlId="formWohnland"
																label="Wohnland"
																className="pt-1"
															>
																<Controller

																	name="wohnlandA"
																	control={control}
																	defaultValue={prefillData?.wohnlandA || ''} // Set the default value based on the fetched data
																	rules={{ required: false }}
																	render={({ field }) => (
																		<Form.Select {...field} >
																			<option value="" />
																			{OptionsWohnland.map((option) => (
																				<option value={option.id}>
																					{option.name}
																				</option>
																			))}
																		</Form.Select>
																	)}
																/>


																<Form.Control.Feedback
																	type="invalid"
																	className="mx-2"
																>
																	Bitte geben Sie ihr Wohnland an.
																</Form.Control.Feedback>
															</FloatingLabel>
														</Form.Group>
													</Row>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Form.Group
											as={Col}
											className=" mb-3"
											controlId="validationPhone"
										>
											<FloatingLabel
												label="Tel. Nr."
												controlId="formPhone"
												className="pt-1"
											>
												<Controller
													name="telnr"
													control={control}
													defaultValue={prefillData?.telnr} // Set the default value based on the fetched data
													render={({ field }) => (
														<Form.Control
															type="string"
															disabled
															placeholder="text"
															{...field} // Spread the field props to the Form.Control
														// disabled // Keep the disabled attribute if needed
														/>
													)}
												/>

												<Container className="mt-2">
													<Form.Text id="telHelpBlock" muted>
														Über diese Tel. Nr. müssen Sie im Verlauf des
														Aufnahmeprozesses erreichbar sein sowie bei Anfragen
														von Lehr- sowie Administrativen-Personen.
														{/* Die E-Mail
                    Adresse muss von einem Erziehungsberechtigten abgerufen
                    werden. */}
													</Form.Text>
												</Container>
											</FloatingLabel>
										</Form.Group>
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
												<Controller
													name="email"
													control={control}
													defaultValue={prefillData?.kontaktmailadresse} // Set the default value based on the fetched data
													render={({ field }) => (
														<Form.Control
															type="email"
															disabled
															placeholder="E-mail"
															{...field} // Spread the field props to the Form.Control
														// disabled // Keep the disabled attribute if needed
														/>
													)}
												/>
												<Container className="mt-2">
													<Form.Text id="emailHelpBlock" muted>
														Über diese E-Mail Adresse müssen Sie im Verlauf des
														Aufnahmeprozesses erreichbar sein. An diese E-Mail
														Adresse werden Bestätigungen und
														Terminverständigungen geschickt. Eine Änderung ist
														unbedingt bekannt zu geben.
														Die E-Mail
														Adresse muss von einem Erziehungsberechtigten abgerufen
														werden.
													</Form.Text>
												</Container>
											</FloatingLabel>
										</Form.Group>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Form.Group>
						<Form.Group
							className="mb-3"
							id="formGridZweiterErziehungsberechtigter"
						>
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header className="text-break">
										2. Erziehungsberechtigter
									</Accordion.Header>
									<Accordion.Body className="text-wrap">
										<Row className="mb-4">
											<Form.Group >
												<FloatingLabel
													label="Verhältnis"
													className="pt-1"
												>
													<Controller
														name="verhaeltnisB"
														control={control}
														rules={{ required: false }}
														defaultValue={prefillData?.verhaeltnisB || ''} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Select {...field} >
																<option value="" />
																{OptionsVerhaeltnis.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-4 mt-4 ">
											<Form.Group controlId="validationSalutation">
												<FloatingLabel
													controlId="formSalutation"
													label="Anrede"
													className="pt-1"
												>
													<Controller
														name="anredeB"
														defaultValue={prefillData?.anredeB || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsAnrede.map((option) => (
																	<option value={option.value}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
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
													<Controller
														name="titelvorB"
														defaultValue={prefillData?.titelvorB || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsTitelVor.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
												</FloatingLabel>
											</Form.Group>
											<Form.Group controlId="validationTitelNach">
												<FloatingLabel
													controlId="formTitelNach"
													label="Titel nach "
													className="pt-1"
												>
													<Controller
														name="titelnachB"
														defaultValue={prefillData?.titelnachB || ''}
														control={control}
														rules={{ required: false }}
														render={({ field }) => (
															<Form.Select {...field}>
																<option value="" />
																{OptionsTitelNach.map((option) => (
																	<option value={option.id}>
																		{option.name}
																	</option>
																))}
															</Form.Select>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2 mb-1"
													/>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-4 mt-4 ">
											<Form.Group controlId="validationVorname">
												<FloatingLabel
													controlId="formVorname"
													label="Vorname"
													className="pt-1"
												>
													<Controller
														name="vornameB"
														defaultValue={prefillData?.vornameB || ''} // Set the default value based on the fetched data
														control={control}
														render={({ field }) => (
															<Form.Control
																type="text"
																// Keep the disabled attribute if needed
																placeholder="Vorname"
																{...field} // Spread the field props to the Form.Control
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2 "
													>
														Bitte geben Sie den Vornamen des
														Erziehungsberechtigten an.
													</Form.Control.Feedback>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-3 mt-4 ">
											<Form.Group controlId="validationNachname">
												<FloatingLabel
													controlId="formNachname"
													label="Nachname"
													className="pt-1"
												>
													<Controller
														name="nachnameB"
														control={control}
														defaultValue={prefillData?.nachnameB || ''} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Control
																type="text"
																placeholder="Nachname"
																{...field} // Spread the field props to the Form.Control
															// Keep the disabled attribute if needed
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2"
													>
														Bitte geben Sie den Nachnamen des
														Erziehungsberechtigten an.
													</Form.Control.Feedback>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Row className="mb-5 mt-4 ">
											<Form.Group controlId="validationAdresse">
												<FloatingLabel
													controlId="formAdresse"
													label="Strasse, Hausnummer"
													className="pt-1"
												>
													<Controller
														name="adresseB"
														control={control}
														defaultValue={prefillData?.adresseB || ''} // Set the default value based on the fetched data
														render={({ field }) => (
															<Form.Control
																pattern="^[^\d]+\s+\d+.*$"
																type="text"
																placeholder="Straße Hausnummer"
																{...field} // Spread the field props to the Form.Control
															// disabled // Keep the disabled attribute if needed
															/>
														)}
													/>
													<Form.Control.Feedback
														type="invalid"
														className="mx-2"
													>
														Bitte geben Sie Ihre Adresse in der Form Strasse,
														Hausnummer Top Stiege etc. ein.
													</Form.Control.Feedback>
													<Row className="mb-3 mt-4 ">
														<Form.Group controlId="validationPlzOrt">
															<FloatingLabel
																controlId="formPlzOrt"
																label="PLZ, Ort"
																className="pt-1"
															>
																<Controller
																	name="plzortB"
																	control={control}
																	defaultValue={prefillData?.plzortB || ''} // Set the default value based on the fetched data
																	render={({ field }) => (
																		<Form.Control
																			type="text"
																			placeholder="PLZ, Ort"
																			pattern="^[1-9]\d{3,5}, [^\d]{2,}$"
																			{...field} // Spread the field props to the Form.Control
																		// disabled // Keep the disabled attribute if needed
																		/>
																	)}
																/>
																<Form.Control.Feedback
																	type="invalid"
																	className="mx-2"
																>
																	Bitte geben Sie Ihre PLZ und Ort in der Form
																	PLZ, Ortsname ein.
																</Form.Control.Feedback>
															</FloatingLabel>
														</Form.Group>
													</Row>
													<Row>
														<Form.Group controlId="validationWohnland">
															<FloatingLabel
																controlId="formWohnland"
																label="Wohnland"
																className="pt-1"
															>
																<Controller

																	name="wohnlandB"
																	control={control}
																	defaultValue={prefillData?.wohnlandB || ''} // Set the default value based on the fetched data
																	rules={{ required: false }}
																	render={({ field }) => (
																		<Form.Select {...field} >
																			<option value="" />
																			{OptionsWohnland.map((option) => (
																				<option value={option.id}>
																					{option.name}
																				</option>
																			))}
																		</Form.Select>
																	)}
																/>


																<Form.Control.Feedback
																	type="invalid"
																	className="mx-2"
																>
																	Bitte geben Sie ihr Wohnland an.
																</Form.Control.Feedback>
															</FloatingLabel>
														</Form.Group>
													</Row>
												</FloatingLabel>
											</Form.Group>
										</Row>
										<Form.Group
											as={Col}
											className=" mb-3"
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
													//placeholder="+43 123 456 7890"
													value={phoneNumber}
													onChange={handlePhoneBlur}
													//onBlur={handlePhoneBlur}
													isInvalid={!isValid}
												//pattern="^\+\d{1,3} \d{1,3} \d{1,8}$"
												/>
												<Form.Control.Feedback
													type={isValid ? "valid" : "invalid"}
													className="mx-2"
												>
													{isValid ? (
														""
													) : (
														<strong>
															Bitte geben Sie die Tel. Nr. des 2.Erziehungsberechtigten im Format +43
															66x 12345678 ein.
														</strong>
													)}
												</Form.Control.Feedback>
											</FloatingLabel>
										</Form.Group>
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
													value={emailB}
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
														Adresse werden Bestätigungen und
														Terminverständigungen geschickt. Eine Änderung ist
														unbedingt bekannt zu geben.
														{/* Die E-Mail
                    Adresse muss von einem Erziehungsberechtigten abgerufen
                    werden. */}
													</Form.Text>
												</Container>
											</FloatingLabel>
										</Form.Group>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Form.Group>
						<Button variant="success" type="submit" >
							Bestätigen
						</Button>
					</Form>
				</Col>
				<Modal
					show={showModalSchoolReport}
					onHide={() => setShowModalSchoolReport(false)}
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>Abschlusszeugnisse</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Wir haben ihnen an die E-Mailadresse <strong>{email}</strong> soeben
						{/* eine Nachricht gesendet. Ihre Anmeldung ist erst
						vollständig abgeschlossen, wenn Sie entweder
						<p />
						<ul>
							<li>
								{" "}
								auf diese E-Mail antworten und uns digitale Kopien der{" "}
								<strong>
									Abschlusszeugnisse ihrer bisherigen Ausbildungen
								</strong>{" "}
								zusenden
							</li>
						</ul>
						<ul>
							<li>
								oder uns die{" "}
								<strong>
									Abschlusszeugnisse ihrer bisherigen Ausbildungen
								</strong>{" "}
								in der Direktion der HTBLuVA Salzburg vorbeibringen.
							</li> */}
						{/* </ul> */}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="success" onClick={() => setShowModalSchoolReport(false)}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
				<Modal
					show={showModalEmail}
					onHide={() => setShowModalEmail(false)}
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>Sitzung gespeichert</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Wir haben ihnen an die E-Mailadresse <strong>{email}</strong> soeben
						eine Nachricht gesendet. Ihre Anmeldung ist fortsetzbar, indem Sie
						auf den Link in der E-Mail klicken.
						<p />

					</Modal.Body>

					<Modal.Footer>
						<Button variant="success" onClick={() => setShowModalEmail(false)}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
		</Container >
	);
};

export default Abendschule2;
