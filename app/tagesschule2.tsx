//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>
// import { PhoneNumberUtil, PhoneNumberType } from "google-libphonenumber";
import axios, { AxiosResponse } from "axios";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
// import { parsePhoneNumberFromString } from "libphonenumber-js";
import React, { useState, useEffect, useRef } from "react";
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
	weitereVornamen: string;
	geschlecht: string;
	geburtsort: string;
	geburtsland: number;
	staatsbuergerschaft: number;
	muttersprache: number;
	alltagssprache: number;
	religion: number;
	svNummer: string;
	sozialversicherungstraeger: number;
	sozialversicherungaut: number;
	strasse: string;
	hausnummer: string;
	plz: string;
	ort: string;
	wohnland: number;
	letzteschulform: string;
	verhaeltnisA: number;
	anredeA: string;
	titelvorA: string;
	titelnachA: string;
	nachnameA: string;
	vornameA: string;
	strasseA: string;
	hausnummerA: string;
	postleitzahlA: string;
	wohnortA: string;
	wohnlandA: number;
	laendervorwahlA1: string;
	vorwahlA1: string;
	nummerA1: string;
	laendervorwahlA2: string;
	vorwahlA2: string;
	nummerA2: string;
	mailadresseA: string;
	verhaeltnisB: number;
	anredeB: string;
	titelvorB: string;
	titelnachB: string;
	nachnameB: string;
	vornameB: string;
	strasseB: string;
	hausnummerB: string;
	postleitzahlB: string;
	wohnortB: string;
	wohnlandB: number;
	laendervorwahlB1: string;
	vorwahlB1: string;
	nummerB1: string;
	laendervorwahlB2: string;
	vorwahlB2: string;
	nummerB2: string;
	mailadresseB: string;
	geschwisteranzahl: number;
	geschwisteranschule: number;
	geschwisternamen: string;
	erstwunsch: number;
	erstwunschschule: string;
	zweitwunschschule: string;





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
	const [OptionsSozialversicherungstraeger, setOptionsSozialversicherungstraeger] = useState<Option[]>([]);
	const [OptionsGeschlecht, setOptionsGeschlecht] = useState<Option[]>([]);
	const [OptionsAnrede, setOptionsAnrede] = useState<Option2[]>([]);
	const [OptionsTitelVor, setOptionsTitelVor] = useState<Option[]>([]);
	const [OptionsTitelNach, setOptionsTitelNach] = useState<Option[]>([]);
	const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<FormData>();

	const [anmeldenummer, setAnmeldenummer] = useState("");

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const session = searchParams.get("session");
	const navigate = useNavigate();
	if (!session) {
		navigate("/");

	}

	const [email, setEmail] = useState("");
	// const [isChecked, setIsChecked] = useState(false);
	const [anrede, setAnrede] = useState("");
	const [titelVorA, setTitelVorA] = useState("");
	const [titelNachA, setTitelNachA] = useState("");
	const [verhaeltnisA, setVerhaeltnisA] = useState("");
	const [anredeA, setAnredeA] = useState("");
	const [nachnameA, setNachnameA] = useState("");
	const [vornameA, setVornameA] = useState("");
	const [strasseA, setStrasseA] = useState("");
	const [HausnummerA, setHausnummerA] = useState("");
	const [PlzA, setPlzA] = useState("");
	const [OrtA, setOrtA] = useState("");
	const [wohnlandA, setWohnlandA] = useState("");
	const [laendervorwahlA1, setLaendervorwahlA1] = useState("");
	const [vorwahlA1, setVorwahlA1] = useState("");
	const [nummerA1, setNummerA1] = useState("");
	const [laendervorwahlA2, setLaendervorwahlA2] = useState("");
	const [vorwahlA2, setVorwahlA2] = useState("");
	const [nummerA2, setNummerA2] = useState("");
	const [mailadresseA, setMailadresseA] = useState("");
	const [verhaeltnisB, setVerhaeltnisB] = useState("");
	const [anredeB, setAnredeB] = useState("");
	const [titelVorB, setTitelVorB] = useState("");
	const [titelNachB, setTitelNachB] = useState("");
	const [nachnameB, setNachnameB] = useState("");
	const [vornameB, setVornameB] = useState("");
	const [strasseB, setStrasseB] = useState("");
	const [HausnummerB, setHausnummerB] = useState("");
	const [PlzB, setPlzB] = useState("");
	const [OrtB, setOrtB] = useState("");
	const [wohnlandB, setWohnlandB] = useState("");
	const [laendervorwahlB1, setLaendervorwahlB1] = useState("");
	const [vorwahlB1, setVorwahlB1] = useState("");
	const [nummerB1, setNummerB1] = useState("");
	const [laendervorwahlB2, setLaendervorwahlB2] = useState("");
	const [vorwahlB2, setVorwahlB2] = useState("");
	const [nummerB2, setNummerB2] = useState("");
	const [mailadresseB, setMailadresseB] = useState("");
	const [geschwisteranzahl, setGeschwisteranzahl] = useState("");
	const [geschwisteranschule, setGeschwisteranschule] = useState("");
	const [geschwisternamen, setGeschwisternamen] = useState("");



	const [weitereVornamen, setWeitereVornamen] = useState("");
	const [geschlecht, setGeschlecht] = useState("");
	const [geburtsort, setGeburtsort] = useState("");
	const [geburtsland, setGeburtsland] = useState("");
	const [staatsbuergerschaft, setStaatsbuergerschaft] = useState("");
	const [muttersprache, setMuttersprache] = useState("");
	const [alltagssprache, setAlltagssprache] = useState("");
	const [religion, setReligion] = useState("");
	const [svNummer, setSvNummer] = useState("");
	const [sozialversicherungstraeger, setSozialversicherungstraeger] = useState("");
	const [strasse, setStrasse] = useState("");
	const [Hausnummer, setHausnummer] = useState("");
	const [Plz, setPlz] = useState("");
	const [Ort, setOrt] = useState("");
	const [wohnland, setWohnland] = useState("");
	const [letzteschulform, setLetzteschulform] = useState("");
	const [validated, setValidated] = useState(true);
	const [currentDate] = useState(getYear());
	const [radioStateErstwunschSchule, setRadioStateErstwunschSchule] =
		useState("");
	const [geschwisterHtl, setGeschwisterHtl] = useState(false);
	// const [isValid, setIsValid] = useState<boolean>(false);
	// const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	const [phoneNumber, setPhonenumber] = useState("");
	// const [isValid, setIsValid] = useState<boolean>(false);
	const [birthdate, setBirthdate] = useState("");
	const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
	// const [isBirthdateValid, setIsBirthdateValid] = useState(false);
	const [vorname, setVorname] = useState("");
	const [nachname, setNachname] = useState("");
	const currentDateForOption = new Date();
	const specificDateCutoff = new Date(currentDateForOption.getFullYear(), 1, 1);
	const [showModalEmail, setShowModalEmail] = useState<boolean>(false);
	const [showModalSchoolReport, setShowModalSchoolReport] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	// const [isSubmitted, setIsSubmitted] = useState(false);
	const [radioState, setRadioState] = useState(true);
	const [adress, setAdress] = useState("");
	const [plzOrt, setPlzOrt] = useState("");
	// const [, setRadioStateGeschlecht] = useState("");
	const formData = new FormData();

	// const handleRadioChangeGeschlecht = (
	// 	event: React.ChangeEvent<HTMLInputElement>,
	// ) => {
	// 	setRadioStateGeschlecht(event.target.value);
	// };
	const validateEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsEmailValid(validateEmail(event.target.value));
		setEmail(event.target.value);
	};
	const handleBlurPlzOrt = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlzOrt(event.target.value);
	};
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

	const parsePlzOrt = () => {
		const parts = plzOrt.split(", ");
		const plz = parts[0];
		const ort = parts[1];
		setPlz(plz);
		setOrt(ort);
		// console.log(`PLZ: ${plz}, Ort: ${ort}`);
	};

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRadioState(event.target.value === "1");
	};

	const handleBlurAdress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAdress(event.target.value);
	};

	const parseAddress = () => {
		const parts = adress.split(/(\d+)/);
		const streetName = parts[0].trim();
		const streetNumber = parts[1];
		setStrasse(streetName);
		setHausnummer(streetNumber);
		//console.log(`Street Name: ${streetName}, Street Number: ${streetNumber}`);
	};

	const handleSvNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value.replace(/\s/g, ""); // remove all spaces
		if (value.length > 4) {
			value = `${value.slice(0, 4)} ${value.slice(4)}`; // add a space after the 4th character
		}
		setSvNummer(value);
	};
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

	const handleBlurGeburtsort = (event: React.ChangeEvent<HTMLInputElement>) => {
		const capitalized = capitalizeFirstLetter(event.target.value);
		// setGeburtsort(capitalized);
		setValue('geburtsort', capitalized);
	};
	const handleBlurWeitereVornamen = (event: React.ChangeEvent<HTMLInputElement>) => {
		const capitalized = capitalizeFirstLetterOfEachWord(event.target.value);
		// setWeitereVornamen(capitalized);
		setValue('weitereVornamen', capitalized);
	};
	const handleRadioErstwunschSchule = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setRadioStateErstwunschSchule(event.target.value);
	};

	const handleGeschwisterHtl = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setGeschwisterHtl(event.target.value > "0");
	};
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
		fetchOptionsGeburtsland();
		fetchOptionsStaatsbuergerschaft();
		fetchOptionsErstsprache();
		fetchOptionsZweitsprache();
		fetchOptionsReligionsbekenntnis();
		fetchOptionsWohnland();
		fetchOptionsSozialversicherungstraeger();
		fetchOptionsGeschlecht();
		const fetchData = async () => {
			try {
				const response = await axios.get(`https://localhost/anmeldungen/tagesschule/sessionfill/${session}`);
				if (response.data && response.data.length > 0) {
					const data = response.data[0];
					// Assuming the data is an array and you want the first item
					setAnrede(data.anrede);
					setTitelVorA(data.titelvorA);
					setTitelNachA(data.titelnachA);
					setWeitereVornamen(data.vornamen);
					setGeschlecht(data.geschlecht);
					setAnmeldenummer(data.anmeldenummer);
					setGeburtsort(data.geburtsort);
					setGeburtsland(data.geburtsland);
					setStaatsbuergerschaft(data.staatsbuergerschaft);
					setMuttersprache(data.erstsprache);
					setAlltagssprache(data.zweitsprache);
					setReligion(data.religionsbekenntnis);
					setSvNummer(data.sozialversicherungsnummer);
					setSozialversicherungstraeger(data.sozialversicherungstraeger);
					setStrasse(data.strasse);
					setHausnummer(data.hausnummer);
					setEmail(data.kontaktmailadresse);
					setAdress(data.strasse);
					setPlzOrt(`${data.postleitzahl}, ${data.wohnort}`);
					setBirthdate(data.geburtsdatum.slice(0, 10));
					setPlz(data.postleitzahl);
					setOrt(data.wohnort);
					setWohnland(data.wohnland);
					setLetzteschulform(data.letzteschulform);
					setVorname(data.vorname);
					setNachname(data.nachname);
					setPhonenumber(`${data.laendervorwahl1}${data.vorwahl1}${data.nummer1}`);
					setRadioState(data.sozialversicherungaut);

					// setValue('vorname', data.vorname);

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
		formData.append("anrede", data.anrede);
		formData.append("titelvorA", data.titelVor);
		formData.append("titelnachA", data.titelNach);
		formData.append("vornamen", data.weitereVornamen);
		formData.append("geschlecht", data.geschlecht);
		formData.append("geburtsort", data.geburtsort);
		formData.append("geburtsland", data.geburtsland.toString());
		formData.append("staatsbuergerschaft", data.staatsbuergerschaft.toString());
		formData.append("muttersprache", data.muttersprache.toString());
		formData.append("alltagssprache", data.alltagssprache.toString());
		formData.append("religion", data.religion.toString());
		formData.append("sozialversicherungaut", Number(radioState)?.toString());
		formData.append("sozialversicherungsnummer", data.svNummer);
		formData.append("sozialversicherungstraeger", data.sozialversicherungstraeger.toString());
		formData.append("strasse", data.strasse);
		formData.append("hausnummer", data.hausnummer);
		formData.append("postleitzahl", data.plz);
		formData.append("wohnort", data.ort);
		formData.append("wohnland", data.wohnland.toString());
		formData.append("letzteschulform", data.letzteschulform);


		axios.post("https://localhost/registration/abendschule/session/", formData, {
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
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setAnrede(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
							<Form.Group controlId="validationTitelVorA">
								<FloatingLabel
									controlId="formTitelVorA"
									label="Titel vor "
									className="pt-1"
								>
									<Controller
										name="titelvorA"
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setTitelVorA(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setTitelNachA(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
									<Form.Control

										type="text"
										placeholder="Vorname"
										value={vorname}
										disabled


									// className="pt-4"
									// pattern="[A-Z][a-z]*"
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
									<Form.Control

										type="text"
										placeholder="Nachname"
										value={nachname}
										disabled

									//pattern="[A-Z][a-z]*"
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
									<Form.Control  {...register('weitereVornamen', { required: false })} isInvalid={!!errors.weitereVornamen}
										type="text"
										placeholder="Weitere Vornamen"
										onChange={handleBlurWeitereVornamen}
										value={weitereVornamen}

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
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setGeschlecht(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
								<Form.Control
									disabled

									type="email"
									value={email}
								// onChange={handleEmailChange}
								// isInvalid={!isEmailValid}
								// className={isEmailValid ? "valid-input" : ""}
								//placeholder="ihre@email.hier"
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
								<Form.Control
									disabled

									type="tel"
									// placeholder="+43 123 456 7890"
									value={phoneNumber}
								// onChange={handlePhoneChange}
								// isInvalid={!isValid}
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
									<Form.Control
										disabled
										type="date"
										id="inputBirthDate"
										// required
										pattern="\d{2}\.\d{2}\.\d{4}"
										title="Bitte geben Sie ihr Geburtsdatum ein."
										value={birthdate}
									// onChange={handleBirthdateChange}
									// isInvalid={!isBirthdateValid}
									// className={isBirthdateValid ? "valid-input" : ""}
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
										<Form.Check
											inline
											label="ja"
											name="group1"
											type="radio"
											id={"inline-radio-1"}
											value="1"
											checked={radioState === true}
											onChange={handleRadioChange}
										/>
										<Form.Check
											inline
											label="nein"
											name="group1"
											type="radio"
											id="inline-radio-2"
											value="0"
											checked={radioState === false}
											onChange={handleRadioChange}
										/>
									</Col>
								</FloatingLabel>
							</Form.Group>
						</Row>
						{radioState && (
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
											render={({ field }) => (
												<Form.Select {...field} onChange={(e) => {
													setSozialversicherungstraeger(e.target.value); // Update the state with the selected value
													field.onChange(e); // Also call the original onChange to update the form value
												}}>
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
											<Form.Control
												// required={radioState}
												type="text"
												{...register('svNummer', { required: false, pattern: /^\d{4}\s(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}$/ })} isInvalid={!!errors.svNummer}
												value={svNummer}
												onChange={handleSvNumberChange}
												pattern="^\d{4}\s(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}$"
											/>
											<Form.Control.Feedback type="invalid" className="mx-2">
												Bitte geben Sie Ihre SV-Nummer in der Form 1234 TTMMJJ.
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

									<Form.Control

										type="text"
										{...register('geburtsort', { required: false })} isInvalid={!!errors.geburtsort}
										//readOnly


										onChange={handleBlurGeburtsort}
										value={geburtsort}


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
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setGeburtsland(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
								>
									<Controller
										name="staatsbuergerschaft"
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setStaatsbuergerschaft(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setMuttersprache(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setAlltagssprache(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setReligion(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
									label="Strasse, Hausnummer"
									className="pt-1"
								>
									<Form.Control


										type="text"
										pattern="^[^\d]+\s+\d+.*$"
										value={adress}
										onChange={handleBlurAdress}
										onBlur={parseAddress}
									//pattern="[A-Z][a-z]*"
									/>
									<Form.Control.Feedback type="invalid" className="mx-2">
										Bitte geben Sie Ihre Adresse in der Form Strasse, Hausnummer
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
									<Form.Control
										type="text"
										pattern="^[1-9]\d{3,5}, [^\d]{2,}$"
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
									<Controller

										name="wohnland"
										control={control}
										rules={{ required: false }}
										render={({ field }) => (
											<Form.Select {...field} onChange={(e) => {
												setWohnland(e.target.value); // Update the state with the selected value
												field.onChange(e); // Also call the original onChange to update the form value
											}}>
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
									<Form.Control

										type="text"
										value={letzteschulform}
										//pattern="^.{3,}$"
										{...register('letzteschulform', { required: false })} isInvalid={!!errors.letzteschulform}

									//readOnly
									// ref={inputRefGeburtsort}
									// onBlur={handleBlurGeburtsort}
									//pattern="[A-Z][a-z]*"
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
										<Form.Check
											inline
											label="Ja"
											name="groupErstwunschSchule"
											type="radio"
											id={"inline-radio-3"}
											value="Ja"
											checked={radioStateErstwunschSchule === "Ja"}
											onChange={handleRadioErstwunschSchule}
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
									<Form.Control
										required={radioStateErstwunschSchule === "Nein"}
										type="text"
										placeholder="Weitere Vornamen"

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
														render={({ field }) => (
															<Form.Select {...field} onChange={(e) => {
																setGeschlecht(e.target.value); // Update the state with the selected value
																field.onChange(e); // Also call the original onChange to update the form value
															}}>
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
										<Row className="mb-4 mt-4 ">
											<Form.Group controlId="validationSalutation">
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
													// ref={inputRefVorname}
													// onBlur={handleBlurVorname}
													// className="pt-4"
													// pattern="[A-Z][a-z]*"
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
													<Form.Control
														required
														type="text"
														placeholder="Nachname"
													// ref={inputRefNachname}
													// onBlur={handleBlurNachname}
													//pattern="[A-Z][a-z]*"
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
													<Form.Control
														required
														type="text"
														pattern="^[^\d]+\s+\d+.*$"
														value={adress}
														onChange={handleBlurAdress}
														onBlur={parseAddress}
													//pattern="[A-Z][a-z]*"
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
																<Form.Control
																	required
																	type="text"
																	pattern="^[1-9]\d{3}, [^\d]{2,}$"
																	value={plzOrt}
																	onChange={handleBlurPlzOrt}
																	onBlur={parsePlzOrt}
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
																<Form.Select required>
																	<option />
																	<option value="Afghanistan">
																		Afghanistan
																	</option>
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
																	<option value="Burkina Faso">
																		Burkina Faso
																	</option>
																	<option value="Burundi">Burundi</option>
																	<option value="Côte d'Ivoire">
																		Côte d'Ivoire
																	</option>
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
																	<option value="El Salvador">
																		El Salvador
																	</option>
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
																	<option value="Guinea-Bissau">
																		Guinea-Bissau
																	</option>
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
																	<option value="Liechtenstein">
																		Liechtenstein
																	</option>
																	<option value="Lithuania">Lithuania</option>
																	<option value="Luxembourg">Luxembourg</option>
																	<option value="Madagascar">Madagascar</option>
																	<option value="Malawi">Malawi</option>
																	<option value="Malaysia">Malaysia</option>
																	<option value="Maldives">Maldives</option>
																	<option value="Mali">Mali</option>
																	<option value="Malta">Malta</option>
																	<option value="Marshall Islands">
																		Marshall Islands
																	</option>
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
																	<option value="Netherlands">
																		Netherlands
																	</option>
																	<option value="New Zealand">
																		New Zealand
																	</option>
																	<option value="Nicaragua">Nicaragua</option>
																	<option value="Niger">Niger</option>
																	<option value="Nigeria">Nigeria</option>
																	<option value="North Korea">
																		North Korea
																	</option>
																	<option value="North Macedonia (formerly Macedonia)">
																		North Macedonia (formerly Macedonia)
																	</option>
																	<option value="Norway">Norway</option>
																	<option value="Oman">Oman</option>
																	<option value="Pakistan">Pakistan</option>
																	<option value="Palau">Palau</option>
																	<option value="Palestine State">
																		Palestine State
																	</option>
																	<option value="Panama">Panama</option>
																	<option value="Papua New Guinea">
																		Papua New Guinea
																	</option>
																	<option value="Paraguay">Paraguay</option>
																	<option value="Peru">Peru</option>
																	<option value="Philippines">
																		Philippines
																	</option>
																	<option value="Poland">Poland</option>
																	<option value="Portugal">Portugal</option>
																	<option value="Qatar">Qatar</option>
																	<option value="Romania">Romania</option>
																	<option value="Russia">Russia</option>
																	<option value="Rwanda">Rwanda</option>
																	<option value="Saint Kitts and Nevis">
																		Saint Kitts and Nevis
																	</option>
																	<option value="Saint Lucia">
																		Saint Lucia
																	</option>
																	<option value="Saint Vincent and the Grenadines">
																		Saint Vincent and the Grenadines
																	</option>
																	<option value="Samoa">Samoa</option>
																	<option value="San Marino">San Marino</option>
																	<option value="Sao Tome and Principe">
																		Sao Tome and Principe
																	</option>
																	<option value="Saudi Arabia">
																		Saudi Arabia
																	</option>
																	<option value="Senegal">Senegal</option>
																	<option value="Serbia">Serbia</option>
																	<option value="Seychelles">Seychelles</option>
																	<option value="Sierra Leone">
																		Sierra Leone
																	</option>
																	<option value="Singapore">Singapore</option>
																	<option value="Slovakia">Slovakia</option>
																	<option value="Slovenia">Slovenia</option>
																	<option value="Solomon Islands">
																		Solomon Islands
																	</option>
																	<option value="Somalia">Somalia</option>
																	<option value="South Africa">
																		South Africa
																	</option>
																	<option value="South Korea">
																		South Korea
																	</option>
																	<option value="South Sudan">
																		South Sudan
																	</option>
																	<option value="Spain">Spain</option>
																	<option value="Sri Lanka">Sri Lanka</option>
																	<option value="Sudan">Sudan</option>
																	<option value="Suriname">Suriname</option>
																	<option value="Sweden">Sweden</option>
																	<option value="Switzerland">
																		Switzerland
																	</option>
																	<option value="Syria">Syria</option>
																	<option value="Tajikistan">Tajikistan</option>
																	<option value="Tanzania">Tanzania</option>
																	<option value="Thailand">Thailand</option>
																	<option value="Timor-Leste">
																		Timor-Leste
																	</option>
																	<option value="Togo">Togo</option>
																	<option value="Tonga">Tonga</option>
																	<option value="Trinidad and Tobago">
																		Trinidad and Tobago
																	</option>
																	<option value="Tunisia">Tunisia</option>
																	<option value="Turkey">Turkey</option>
																	<option value="Turkmenistan">
																		Turkmenistan
																	</option>
																	<option value="Tuvalu">Tuvalu</option>
																	<option value="Uganda">Uganda</option>
																	<option value="Ukraine">Ukraine</option>
																	<option value="United Arab Emirates">
																		United Arab Emirates
																	</option>
																	<option value="United Kingdom">
																		United Kingdom
																	</option>
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
													// placeholder="+43 123 456 7890"
													value={phoneNumber}
												// onChange={handlePhoneChange}
												// onBlur={handlePhoneBlur}
												// isInvalid={!isValid}
												/>
												{/* <Form.Control.Feedback
													type={isValid ? "valid" : "invalid"}
													className="mx-2"
												>
													{isValid ? (
														""
													) : (
														<strong>
															Bitte geben Sie die Tel. Nr. des Bewerbers im
															Format +43 664 12345678 ein.
														</strong>
													)}
												</Form.Control.Feedback> */}
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
												<Form.Control
													disabled
													required
													type="email"
													value={email}
												// onChange={handleEmailChange}
												// isInvalid={!isEmailValid}
												// className={isEmailValid ? "valid-input" : ""}
												//placeholder="ihre@email.hier"
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
											<Form.Group controlId="validationErsterErziehungsberechtigter">
												<FloatingLabel
													controlId="formErsterErziehungsberechtigter"
													label="Verhältnis"
													className="pt-1"
												>
													<Form.Select required>
														<option value="3">Vater</option>
														<option value="4">Mutter</option>
														<option value="5">Großvater</option>
														<option value="6">Großmutter</option>
														<option value="7">Onkel</option>
														<option value="8">Tante</option>
														<option value="9">Bruder</option>
														<option value="10">Schwester</option>
														<option value="11">Stiefvater</option>
														<option value="12">Stiefmutter</option>
														<option value="13">Erziehungsberechtigter</option>
														<option value="14">Vormund</option>
														<option value="15">Pflegeeltern</option>
														<option value="16">Heim / WG</option>
														<option value="17">Eltern</option>
														<option value="18">Erziehungsberechtigt</option>
														<option value="19">Ansprechperson</option>
													</Form.Select>
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
													<Form.Select required>
														<option />
														<option value="1">Frau</option>
														<option value="2">Herr</option>
														<option value="3">Divers</option>
													</Form.Select>
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
										<Row className="mb-1 mt-4 ">
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
													// ref={inputRefVorname}
													// onBlur={handleBlurVorname}
													// className="pt-4"
													// pattern="[A-Z][a-z]*"
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
													<Form.Control
														required
														type="text"
														placeholder="Nachname"
													// ref={inputRefNachname}
													// onBlur={handleBlurNachname}
													//pattern="[A-Z][a-z]*"
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
													<Form.Control
														required
														type="text"
														pattern="^[^\d]+\s+\d+.*$"
														value={adress}
														onChange={handleBlurAdress}
														onBlur={parseAddress}
													//pattern="[A-Z][a-z]*"
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
																<Form.Control
																	required
																	type="text"
																	pattern="^[1-9]\d{3}, [^\d]{2,}$"
																	value={plzOrt}
																	onChange={handleBlurPlzOrt}
																	onBlur={parsePlzOrt}
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
																<Form.Select required>
																	<option />
																	<option value="Afghanistan">
																		Afghanistan
																	</option>
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
																	<option value="Burkina Faso">
																		Burkina Faso
																	</option>
																	<option value="Burundi">Burundi</option>
																	<option value="Côte d'Ivoire">
																		Côte d'Ivoire
																	</option>
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
																	<option value="El Salvador">
																		El Salvador
																	</option>
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
																	<option value="Guinea-Bissau">
																		Guinea-Bissau
																	</option>
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
																	<option value="Liechtenstein">
																		Liechtenstein
																	</option>
																	<option value="Lithuania">Lithuania</option>
																	<option value="Luxembourg">Luxembourg</option>
																	<option value="Madagascar">Madagascar</option>
																	<option value="Malawi">Malawi</option>
																	<option value="Malaysia">Malaysia</option>
																	<option value="Maldives">Maldives</option>
																	<option value="Mali">Mali</option>
																	<option value="Malta">Malta</option>
																	<option value="Marshall Islands">
																		Marshall Islands
																	</option>
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
																	<option value="Netherlands">
																		Netherlands
																	</option>
																	<option value="New Zealand">
																		New Zealand
																	</option>
																	<option value="Nicaragua">Nicaragua</option>
																	<option value="Niger">Niger</option>
																	<option value="Nigeria">Nigeria</option>
																	<option value="North Korea">
																		North Korea
																	</option>
																	<option value="North Macedonia (formerly Macedonia)">
																		North Macedonia (formerly Macedonia)
																	</option>
																	<option value="Norway">Norway</option>
																	<option value="Oman">Oman</option>
																	<option value="Pakistan">Pakistan</option>
																	<option value="Palau">Palau</option>
																	<option value="Palestine State">
																		Palestine State
																	</option>
																	<option value="Panama">Panama</option>
																	<option value="Papua New Guinea">
																		Papua New Guinea
																	</option>
																	<option value="Paraguay">Paraguay</option>
																	<option value="Peru">Peru</option>
																	<option value="Philippines">
																		Philippines
																	</option>
																	<option value="Poland">Poland</option>
																	<option value="Portugal">Portugal</option>
																	<option value="Qatar">Qatar</option>
																	<option value="Romania">Romania</option>
																	<option value="Russia">Russia</option>
																	<option value="Rwanda">Rwanda</option>
																	<option value="Saint Kitts and Nevis">
																		Saint Kitts and Nevis
																	</option>
																	<option value="Saint Lucia">
																		Saint Lucia
																	</option>
																	<option value="Saint Vincent and the Grenadines">
																		Saint Vincent and the Grenadines
																	</option>
																	<option value="Samoa">Samoa</option>
																	<option value="San Marino">San Marino</option>
																	<option value="Sao Tome and Principe">
																		Sao Tome and Principe
																	</option>
																	<option value="Saudi Arabia">
																		Saudi Arabia
																	</option>
																	<option value="Senegal">Senegal</option>
																	<option value="Serbia">Serbia</option>
																	<option value="Seychelles">Seychelles</option>
																	<option value="Sierra Leone">
																		Sierra Leone
																	</option>
																	<option value="Singapore">Singapore</option>
																	<option value="Slovakia">Slovakia</option>
																	<option value="Slovenia">Slovenia</option>
																	<option value="Solomon Islands">
																		Solomon Islands
																	</option>
																	<option value="Somalia">Somalia</option>
																	<option value="South Africa">
																		South Africa
																	</option>
																	<option value="South Korea">
																		South Korea
																	</option>
																	<option value="South Sudan">
																		South Sudan
																	</option>
																	<option value="Spain">Spain</option>
																	<option value="Sri Lanka">Sri Lanka</option>
																	<option value="Sudan">Sudan</option>
																	<option value="Suriname">Suriname</option>
																	<option value="Sweden">Sweden</option>
																	<option value="Switzerland">
																		Switzerland
																	</option>
																	<option value="Syria">Syria</option>
																	<option value="Tajikistan">Tajikistan</option>
																	<option value="Tanzania">Tanzania</option>
																	<option value="Thailand">Thailand</option>
																	<option value="Timor-Leste">
																		Timor-Leste
																	</option>
																	<option value="Togo">Togo</option>
																	<option value="Tonga">Tonga</option>
																	<option value="Trinidad and Tobago">
																		Trinidad and Tobago
																	</option>
																	<option value="Tunisia">Tunisia</option>
																	<option value="Turkey">Turkey</option>
																	<option value="Turkmenistan">
																		Turkmenistan
																	</option>
																	<option value="Tuvalu">Tuvalu</option>
																	<option value="Uganda">Uganda</option>
																	<option value="Ukraine">Ukraine</option>
																	<option value="United Arab Emirates">
																		United Arab Emirates
																	</option>
																	<option value="United Kingdom">
																		United Kingdom
																	</option>
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
												// onChange={handlePhoneChange}
												// isInvalid={!isValid}
												/>
												{/* <Form.Control.Feedback
													type={isValid ? "valid" : "invalid"}
													className="mx-2"
												>
													{isValid ? (
														""
													) : (
														<strong>
															Bitte geben Sie die Tel. Nr. des Bewerbers im
															Format +43 664 12345678 ein.
														</strong>
													)}
												</Form.Control.Feedback> */}
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
												<Form.Control
													disabled
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
					show={showModal}
					onHide={() => setShowModal(false)}
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
						<Button variant="success" onClick={() => setShowModal(false)}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
		</Container>
	);
};

export default Abendschule2;
