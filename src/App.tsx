//import reactLogo from './assets/react.svg'
//<Form.Label className='ms-1'>Vorname</Form.Label>

import { useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";

function getYear() {
  const date = new Date();
  const year = date.getFullYear();
  const nextYear = year + 1;
  return `${year}/${nextYear}`;
}

function App() {
  const [validated, setValidated] = useState(true);
  const [currentDate] = useState(getYear());
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const isPhoneValid = () => {
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phoneRegex.test(phone)) {
      return "valid";
    } else {
      return "invalid";
    }
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
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
                    pattern="[A-Z][a-z]*"
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
                    pattern="[A-Z][a-z]*"
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
              >
                <Form.Control
                  required
                  type="text"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                //placeholder="ihre@email.hier"
                />
                <Form.Control.Feedback type="invalid" className="mx-2">
                  Bitte geben Sie die E-mail des Bewerbers an.
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
                  value={phone}
                  onChange={handlePhoneChange}
                // isInvalid={!isPhoneValid()}
                />
                <Form.Control.Feedback type={isPhoneValid()} className="mx-2">
                  Bitte geben Sie die Tel. Nr. des Bewerbers im Format +XX XXX
                  XXXXXXX ein.
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
                    title="Bitte geben Sie ihr Geburtsdatum ein."
                  />
                  <Form.Control.Feedback type="invalid" className="mx-2">
                    Bitte wählen Sie das Geburtsdatum des Bewerbers.
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
                        style={{  wordWrap:"break-word", whiteSpace: "pre-wrap",overflowWrap: "break-word" }}
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

            <Button variant="success" type="submit">
              Bestätigen
            </Button>


          </Form>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
