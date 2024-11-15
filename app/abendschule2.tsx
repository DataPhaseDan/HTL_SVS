//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>
// import { PhoneNumberUtil, PhoneNumberType } from "google-libphonenumber";
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
	wohnland: string;
	letzteschulform: string;
};

// type ZsvBewerber = {
// 	finalisiert: number;
// 	wird_geloescht_in: number;
// 	dsgvo: number;
// 	schuljahr: number;
// 	anmelderunde: number;
// 	anmeldungstyp: string;
// 	kontaktmailadresse: string;
// 	code: string;
// 	phase: number;
// 	schuelerkennzahl: number;
// 	existiert: number;
// 	anmeldenummer: string;
// 	anrede: string;
// 	titelvor: string;
// 	titelnach: string;
// 	nachname: string;
// 	vorname: string;
// 	vornamen: string;
// 	geburtsdatum: Date;
// 	geschlecht: string;
// 	sozialversicherungAUT: number;
// 	sozialversicherungstraeger: number;
// 	sozialversicherungsnummer: string;
// 	sozialversicherungsGebDat: string;
// 	bildokNummer: string;
// 	geburtsort: string;
// 	geburtsland: number;
// 	staatsbuergerschaft: number;
// 	erstsprrache: number;
// 	zweitsprach: number;
// 	religionsbekenntnis: number;
// 	strasse: string;
// 	hausnummer: string;
// 	postleitzahl: string;
// 	wohnort: string;
// 	wohnortkennzahl: string;
// 	gemeindenkennzahl: string;
// 	wohnland: number;
// 	laendervorwahl1: string;
// 	vorwahl1: string;
// 	nummer1: string;
// 	laendervorwahl2: string;
// 	vorwahl2: string;
// 	nummer2: string;
// 	mailadresse: string;
// 	schulpflicht: number;
// 	asylwerber: number;
// 	verhaeltnisA: number;
// 	anredeA: string;
// 	titelvorA: string;
// 	titelnachA: string;
// 	nachnameA: string;
// 	vornameA: string;
// 	strasseA: string;
// 	hausnummerA: string;
// 	postleitzahlA: string;
// 	wohnortA: string;
// 	wohnortkennzahlA: string;
// 	gemeindenkennzahlA: string;
// 	wohnlandA: number;
// 	laendervorwahlA1: string;
// 	vorwahlA1: string;
// 	nummerA1: string;
// 	laendervorwahlA2: string;
// 	vorwahlA2: string;
// 	nummerA2: string;
// 	mailadresseA: string;
// 	verhaeltnisB: number;
// 	anredeB: string;
// 	titelvorB: string;
// 	titelnachB: string;
// 	nachnameB: string;
// 	vornameB: string;
// 	strasseB: string;
// 	hausnummerB: string;
// 	postleitzahlB: string;
// 	wohnortB: string;
// 	wohnortkennzahlB: string;
// 	gemeindenkennzahlB: string;
// 	wohnlandB: number;
// 	laendervorwahlB1: string;
// 	vorwahlB1: string;
// 	nummerB1: string;
// 	laendervorwahlB2: string;
// 	vorwahlB2: string;
// 	nummerB2: string;
// 	mailadresseB: string;
// 	geschwisteranzahl: number;
// 	geschwisteranschule: number;
// 	geschwisternamen: string;
// 	erstwunsch: number;
// 	erstwunschschule: string;
// 	erstwunschschulkennzahl: string;
// 	zweitwunschschule: string;
// 	zweitwunschschulkennzahl: string;
// 	fachrichtung1: number;
// 	fachrichtung2: number;
// 	fachrichtung3: number;
// 	eignungstestdatum: Date;
// 	eignungstest: number;
// 	eignungstestnote: number;
// 	letzteschulform: string;
// 	letzteschulezeugnis: number;
// 	letzteschulenation: string;
// 	letzteschuletyp: string;
// 	letzteschule: string;
// 	letzteschulkennzahl: string;
// 	notentypM: string;
// 	m: number;
// 	notentypD: string;
// 	d: number;
// 	notentypE: string;
// 	e: number;
// 	ph: number;
// 	ch: number;
// 	gg: number;
// 	gs: number;
// 	reihen: number;
// 	punkte: number;
// 	zuteilung: number;
// 	zuteilungsstatus: number;
// 	klasse: number;
// 	anmerkungen: string;
// 	registriert: Date;
// 	angemeldet: Date;
// 	abgemeldet: Date;
// 	geloescht: number;
// };

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
	const [OptionsAnrede, setOptionsAnrede] = useState<Option2[]>([]);
	const { register, watch, handleSubmit, control, setValue, formState: { errors } } = useForm<FormData>();

	const SVTAUTValue = watch('SVTAUT');
	// const [anmeldenummer, setAnmeldenummer] = useState("");

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const session = searchParams.get("session");
	const navigate = useNavigate();
	if (!session) {
		navigate("/");

	}

	const [email, setEmail] = useState("");
	// const [isChecked, setIsChecked] = useState(false);
	// const [anrede, setAnrede] = useState("");
	// const [titelVor, setTitelVor] = useState("");
	// const [titelNach, setTitelNach] = useState("");
	// const [weitereVornamen, setWeitereVornamen] = useState("");
	// const [geschlecht, setGeschlecht] = useState("");
	// const [geburtsort, setGeburtsort] = useState("");
	// const [geburtsland, setGeburtsland] = useState("");
	// const [staatsbuergerschaft, setStaatsbuergerschaft] = useState("");
	// const [muttersprache, setMuttersprache] = useState("");
	// const [alltagssprache, setAlltagssprache] = useState("");
	// const [religion, setReligion] = useState("");
	// const [svNummer, setSvNummer] = useState("");
	// const [sozialversicherungstraeger, setSozialversicherungstraeger] = useState("");
	// const [strasse, setStrasse] = useState("");
	// const [Hausnummer, setHausnummer] = useState("");
	// const [Plz, setPlz] = useState("");
	// const [Ort, setOrt] = useState("");
	// const [wohnland, setWohnland] = useState("");
	// const [letzteschulform, setLetzteschulform] = useState("");
	const [validated, setValidated] = useState(true);
	const [currentDate] = useState(getYear());
	// const [isValid, setIsValid] = useState<boolean>(false);
	// const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	// const [phoneNumber, setPhonenumber] = useState("");
	// const [isValid, setIsValid] = useState<boolean>(false);
	// const [birthdate, setBirthdate] = useState("");
	// const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	// const [vorname, setVorname] = useState("");
	// const [nachname, setNachname] = useState("");
	const [showModalEmail, setShowModalEmail] = useState<boolean>(false);
	const [showModalSchoolReport, setShowModalSchoolReport] = useState<boolean>(false);

	const [isSubmitted, setIsSubmitted] = useState(false);
	// const [showModal, setShowModal] = useState<boolean>(false);
	// const [isSubmitted, setIsSubmitted] = useState(false);
	// const [radioState, setRadioState] = useState(true);
	// const [adress, setAdress] = useState("");
	// const [plzOrt, setPlzOrt] = useState("");
	// const [, setRadioStateGeschlecht] = useState("");
	// const formData = new FormData();
	const [prefillData, setPrefillData] = useState<FormData | null>(null);

	// const handleRadioChangeGeschlecht = (
	// 	event: React.ChangeEvent<HTMLInputElement>,
	// ) => {
	// 	setRadioStateGeschlecht(event.target.value);
	// };

	// const handleBlurPlzOrt = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setPlzOrt(event.target.value);
	// };
	// const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setPhoneNumber(event.target.value.trim());


	// };
	// const handlePhoneBlur = () => {
	// 	const phoneUtil = PhoneNumberUtil.getInstance();
	// 	let isE164 = false;
	// 	let isValid = false;

	// 	try {
	// 		const inputNumber = phoneUtil.parse(phoneNumber);
	// 		isE164 = phoneUtil.getNumberType(inputNumber) === PhoneNumberType.MOBILE;
	// 		isValid = phoneUtil.isValidNumber(inputNumber);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}

	// 	setIsValid(isE164 ? isValid : false);
	// };

	// const parsePlzOrt = () => {
	// 	const parts = plzOrt.split(", ");
	// 	const plz = parts[0];
	// 	const ort = parts[1];
	// 	setPlz(plz);
	// 	setOrt(ort);
	// 	// console.log(`PLZ: ${plz}, Ort: ${ort}`);
	// };

	// const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setRadioState(event.target.value === "1");
	// };

	// const handleBlurAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setAdress(event.target.value);
	// };

	// const parseAddress = () => {
	// 	const parts = adress.split(/(\d+)/);
	// 	const streetName = parts[0].trim();
	// 	const streetNumber = parts[1];
	// 	setStrasse(streetName);
	// 	setHausnummer(streetNumber);
	// 	//console.log(`Street Name: ${streetName}, Street Number: ${streetNumber}`);
	// };

	// const handleSvNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	let value = event.target.value.replace(/\s/g, ""); // remove all spaces
	// 	if (value.length > 4) {
	// 		value = `${value.slice(0, 4)} ${value.slice(4)}`; // add a space after the 4th character
	// 	}
	// 	setSvNummer(value);
	// };
	// const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	//   setIsChecked(event.target.checked);
	// };

	// const handleBirthdateChange = (
	// 	event: React.ChangeEvent<HTMLInputElement>,
	// ) => {
	// 	const birthdateValue = event.target.value;
	// 	setBirthdate(birthdateValue);
	// 	setIsBirthdateValid(validateBirthdate(birthdateValue));
	// };

	// const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const inputNumber = parsePhoneNumberFromString(event.target.value);
	// 	setPhoneNumber(event.target.value);
	// 	setIsValid(inputNumber ? inputNumber.isValid() : false);
	// };
	// const validateBirthdate = (birthdate: string) => {
	// 	const birthdateParts = birthdate.split(".");
	// 	const birthdateDate = new Date(
	// 		`${birthdateParts[2]}-${birthdateParts[1]}-${birthdateParts[0]}`,
	// 	);
	// 	const currentDate = new Date();
	// 	const ageDiffMs = currentDate.getTime() - birthdateDate.getTime();
	// 	const ageDate = new Date(ageDiffMs);
	// 	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
	// 	return age >= 17;
	// };
	// const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setIsEmailValid(validateEmail(event.target.value));
	// 	setEmail(event.target.value);
	// };

	// const validateEmail = (email: string) => {
	// 	const re =
	// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(String(email).toLowerCase());
	// };

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

	// const handleBlurVorname = () => {
	// 	if (inputRefVorname.current) {
	// 		const capitalized = capitalizeFirstLetter(inputRefVorname.current.value);
	// 		inputRefVorname.current.value = capitalized;
	// 	}
	// };

	// const handleBlurGeburtsort = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const capitalized = capitalizeFirstLetter(event.target.value);
	// 	// setGeburtsort(capitalized);
	// 	setValue('geburtsort', capitalized);
	// };
	// const handleBlurWeitereVornamen = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const capitalized = capitalizeFirstLetterOfEachWord(event.target.value);
	// 	// setWeitereVornamen(capitalized);
	// 	setValue('weitereVornamen', capitalized);
	// };

	// const handleBlurNachname = () => {
	// 	if (inputRefNachname.current) {
	// 		const capitalized = capitalizeFirstLetter(inputRefNachname.current.value);
	// 		inputRefNachname.current.value = capitalized;
	// 	}
	// };


	// console.log("submitted diiiiiga, one step closer to Daniel Düsentrieb!");



	//event.persist();





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
	}
		, []);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {

		const fetchData = async () => {
			try {
				const response = await axios.get(`https://localhost/anmeldungen/abendschule/sessionfill/${session}`);
				if (response.data && response.data.length > 0) {
					const data = response.data[0];
					setPrefillData(data as FormData)
					setValue('anrede', data.anrede);
					setValue('titelVor', data.titelvor);
					setValue('titelNach', data.titelnach);
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

					// setValue('fachrichtung1', data.fachrichtung1);


					// Assuming the data is an array and you want the first item
					// setAnrede(data.anrede);
					// setTitelVor(data.titelvor);
					// setTitelNach(data.titelnach);
					// setWeitereVornamen(data.vornamen);
					// setAnmeldenummer(data.anmeldenummer);
					// setGeschlecht(data.geschlecht);
					// setGeburtsort(data.geburtsort);
					// setGeburtsland(data.geburtsland);
					// setStaatsbuergerschaft(data.staatsbuergerschaft);
					// setMuttersprache(data.erstsprache);
					// setAlltagssprache(data.zweitsprache);
					// setReligion(data.religionsbekenntnis);
					// setSvNummer(data.sozialversicherungsnummer);
					// setSozialversicherungstraeger(data.sozialversicherungstraeger);
					// setStrasse(data.strasse);
					// setHausnummer(data.hausnummer);
					// setEmail(data.kontaktmailadresse);
					// setAdress(data.strasse);
					// setPlzOrt(`${data.postleitzahl}, ${data.wohnort}`);
					// setBirthdate(data.geburtsdatum.slice(0, 10));
					// setPlz(data.postleitzahl);
					// setOrt(data.wohnort);
					// setWohnland(data.wohnland);
					// setLetzteschulform(data.letzteschulform);
					// setVorname(data.vorname);
					// setNachname(data.nachname);
					// setPhonenumber(`${data.laendervorwahl1}${data.vorwahl1}${data.nummer1}`);
					// // setValue('vorname', data.vorname);
					// setRadioState(data.sozialversicherungaut);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

	}, [session]);
	// const { control } = useForm({
	// 	defaultValues: {
	// 		anrede: anrede,
	// 		titelVor: titelVor,
	// 		titelNach: titelNach,
	// 		weitereVornamen: weitereVornamen,
	// 		geschlecht: geschlecht,
	// 		SVTAUT: radioState,



	// 	},
	// });



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
	// TODO: ensure that every field of the form is prefilled

	const onSubmit = (data: FormData) => {
		data.anmeldenummer = prefillData?.anmeldenummer || '';

		console.log("Client_Start -----------");
		console.log(data);
		console.log("Client_End -----------");





		axios.post("https://localhost/registration/abendschule/session/", data, {
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

					<h2 className="mt-5 mb-5">Anmeldung an der HTL für Berufstätige</h2>
					<h3 className="mb-5">Schuljahr {currentDate}</h3>
					<p>{/* <strong>Sie können sich nur einmal anmelden!</strong> */}</p>

					<p className="h6">
						Für die Anmeldung sind die Abschlusszeugnisse ihrer bisherigen
						Ausbildungen notwendig.
					</p>
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
										// defaultValue={anrede}
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
						<Row className="mb-4 mt-4 ">
							<Form.Group controlId="validationTitelVor">
								<FloatingLabel
									controlId="formTitelVor"
									label="Titel vor "
									className="pt-1"
								>
									<Controller
										name="titelVor"
										defaultValue={prefillData?.titelVor || ''}
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
									{/* <Form.Control  {...register('titelVor', { required: false, pattern: /^\S+@\S+$/i })} isInvalid={!!errors.titelVor}
										type="text"
										placeholder=""
										value={titelVor} */}
									{/* // ref={inputRefVorname}
									// onBlur={handleBlurVorname}
									// className="pt-4"
									// pattern="[A-Z][a-z]*" */}

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
										defaultValue={prefillData?.titelNach || ''}
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
						</Row>

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
										defaultValue={prefillData?.geschlecht || ''} // Set the default value based on the fetched data
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
									defaultValue={prefillData?.email} // Set the default value based on the fetched data
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
										defaultValue={prefillData?.geburtsland || ''} // Set the default value based on the fetched data
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
										defaultValue={prefillData?.religion || ''} // Set the default value based on the fetched data
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
										defaultValue={prefillData?.wohnland || ''} // Set the default value based on the fetched data
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
						eine Nachricht gesendet. Ihre Anmeldung ist erst
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
							</li>
						</ul>
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
		</Container>
	);
};

export default Abendschule2;
