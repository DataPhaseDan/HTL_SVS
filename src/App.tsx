//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>


import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  ProgressBar,
  Row,
  Modal
} from "react-bootstrap";
import { parsePhoneNumberFromString } from "libphonenumber-js";



function App() {
  const [validated, setValidated] = useState(true);
  const [currentDate] = useState(getYear());
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [birthdate, setBirthdate] = useState('');
  const [isBirthdateValid, setIsBirthdateValid] = useState(false);
  const inputRefVorname = useRef<HTMLInputElement>(null);
  const inputRefNachname = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const birthdateValue = event.target.value;
    setBirthdate(birthdateValue);
    setIsBirthdateValid(validateBirthdate(birthdateValue));
  };

  const handlePhoneChange = (event: any) => {
    const inputNumber = parsePhoneNumberFromString(event.target.value);
    setPhoneNumber(event.target.value);
    setIsValid(inputNumber ? inputNumber.isValid() : false);
  };

  const validateBirthdate = (birthdate: string) => {
    const birthdateParts = birthdate.split('.');
    const birthdateDate = new Date(`${birthdateParts[2]}-${birthdateParts[1]}-${birthdateParts[0]}`);
    const currentDate = new Date();
    const ageDiffMs = currentDate.getTime() - birthdateDate.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age >= 17;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setIsEmailValid(validateEmail(event.target.value));
    setEmail(event.target.value);
    
    
  };

  const validateEmail = (email: string) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  }

  const handleBlurVorname = () => {
    if (inputRefVorname.current) {
      const capitalized = capitalizeFirstLetter(inputRefVorname.current.value);
      inputRefVorname.current.value = capitalized;
    }
  };

  const handleBlurNachname = () => {
    if (inputRefNachname.current) {
      const capitalized = capitalizeFirstLetter(inputRefNachname.current.value);
      inputRefNachname.current.value = capitalized;
    }
  };


  const handleSubmit = (event: React.FormEvent) => {
    console.log("submitted diiiiiga");
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
     
      //event.persist();
    }
      // setShowModal(true);
      setIsSubmitted(true);
      setValidated(true);
      event.preventDefault();
      
      
      
    

  };

  useEffect(() => {
    if (isSubmitted) {
      console.log(email)
      setShowModal(true);
    }
  }, [isSubmitted]);

  return (

    <Container className="p-5 border" style={{ backgroundColor: "whitesmoke" }}>
      
      <Row className="justify-content-center">
        <Col xs={8} >
          <h2>Anmeldefortschritt</h2>
          <ProgressBar animated now={30} label={`33%`} />

          <h2 className="mt-5 mb-5">Anmeldung an der HTL für Berufstätige</h2>
          <h3 className="mb-5">Schuljahr {currentDate}</h3>
          <p>
            <strong>Sie können sich nur einmal anmelden!</strong>
          </p>

          <p className="h6">
            Für die Anmeldung sind die Abschlusszeugnisse ihrer bisherigen
            Ausbildungen notwendig.
          </p>
          <Form validated={validated} onSubmit={handleSubmit}>


            <Row className="mb-2 mt-4 ">
              <Form.Group controlId="validationVorname">
                <FloatingLabel
                  controlId="formVorname"
                  label="Vorname"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Vorname"
                    ref={inputRefVorname}
                    onBlur={handleBlurVorname}
                  // pattern="[A-Z][a-z]*"
                  />
                  <Form.Control.Feedback type="invalid" className="mx-2 mb-3">
                    Bitte geben Sie den Vornamen des Bewerbers an.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="validationNachname">
                <FloatingLabel
                  controlId="formNachname"
                  label="Nachname"
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

                    {email}
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
                <Form.Control.Feedback type={isEmailValid ? "valid" : "invalid"} className="mx-2">
                  {isEmailValid ? "" : <strong>Bitte geben Sie die E-mail des Bewerbers an.</strong>}
                </Form.Control.Feedback>
                <Container className="mt-2">
                  <Form.Text id="emailHelpBlock" muted>
                    Über diese E-Mail Adresse müssen Sie im Verlauf des
                    Aufnahmeprozesses erreichbar sein. An diese E-Mail Adresse
                    werden Bestätigungen und Terminverständigungen geschickt.
                    Eine Änderung ist unbedingt bekannt zu geben.
                    {
                      /* Die E-Mail
                    Adresse muss von einem Erziehungsberechtigten abgerufen
                    werden. */
                    }
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
              >
                <Form.Control
                  required
                  type="tel"
                  // placeholder="+43 123 456 7890"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  isInvalid={!isValid}
                />
                <Form.Control.Feedback type={isValid ? "valid" : "invalid"} className="mx-2">
                  {isValid ? "" : <strong>Bitte geben Sie die Tel. Nr. des Bewerbers im Format +43 664 12345678 ein.</strong>}
                </Form.Control.Feedback>
                <Container className="mt-2">
                  <Form.Text id="telHelpBlock" muted>
                    Über diese Tel. Nr. müssen Sie im Verlauf des
                    Aufnahmeprozesses erreichbar sein.
                    {
                      /* Die E-Mail
                    Adresse muss von einem Erziehungsberechtigten abgerufen
                    werden. */
                    }
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
                className="mt-5"
              >
                <Form.Select required>
                  <option></option>
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
                    pattern="\d{2}\.\d{2}\.\d{4}"
                    title="Bitte geben Sie ihr Geburtsdatum ein."
                    value={birthdate}
                    onChange={handleBirthdateChange}
                    isInvalid={!isBirthdateValid}
                    className={isBirthdateValid ? 'valid-input' : ''}
                  />
                  <Form.Control.Feedback type={isBirthdateValid ? 'valid' : 'invalid'} className="mx-2">
                    Bitte wählen Sie das Geburtsdatum des Bewerbers, sie müssen mindestens 17 Jahre alt sein .
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='text-break'>Datenschutzgrundverordnung</Accordion.Header>
                  <Accordion.Body className="text-wrap">
                    <Container
                      className="mt-2 mb-2 p-3 border 5px solid black"
                      style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                    >
                      <Form.Text id="DsgvoState" muted>
                        <p className="h5">
                          Datenschutzgrundverordnung
                        </p>
                        <p className="h6 mb-4">
                          Einwilligung Art. 7 DSGVO
                        </p>
                        <p>
                          <em>
                            Ich bin damit einverstanden, dass die angeführten
                            personenbezogenen Daten ausschließlich für schulische
                            und organisatorische Zwecke teilweise oder vollständig
                            verarbeitet werden.
                          </em>
                        </p>
                        <p className="h6">
                          Speicherdauer:
                        </p>
                        {/* <br className='my-1' /> */}
                        <p>
                          <em>
                            Die personenbezogenen Daten werden von der HTBLuVA
                            Salzburg nur so lange gespeichert, wie es unter
                            Einhaltung der einschlägigen gesetzlichen Bestimmungen
                            zur Erfüllung des jeweils genannten Zwecks notwendig
                            ist, oder solange gespeichert, als gesetzliche
                            Aufbewahrungsfristen bestehen oder Verjährungsfristen
                            betreffen potentieller Rechtsansprüche noch offen
                            sind.
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
                            Klassenlisten, Schulbuchlisten, AUVA Meldungen, Netz-
                            und E-Mail-Account, elektronische Zutrittssysteme,
                            Schulgeldverwaltung (edu.PAY), Schulfotografie,
                            Bezirksverwaltungsbehörden, Magistrat, Polizei.
                          </em>
                        </p>
                        <p>
                          <em>
                            Zudem gebe ich die Einwilligung, dass Fotos bzw.
                            Videos veröffentlicht werden dürfen (z.B. Homepage der
                            Schule, Jahresbericht der Schule, lokale Medien und
                            Berichte in Tageszeitungen, Rundfunk und Fernsehen).
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
                            gemäß Art. 77 DSGVO zu erheben. Durch den Widerruf der
                            Einwilligung wird die Rechtmäßigkeit der aufgrund der
                            Einwilligung bis zum Widerruf erfolgten Verarbeitung
                            nicht berührt.
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

            <Button variant="success" type="submit" onClick={handleSubmit}>
              Bestätigen
            </Button>


          </Form>
        </Col>
        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>E-Mail zur Verifizierung{email}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Um die angegebene E-Mailadresse  zu ver</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Row>


    </Container>
  );
}

export default App;
