<Tab eventKey="Windows User Settings" title="Win Settings">
            <Col className="justify-content-center">
              <Form.Label ><Badge bg="primary">Schüler AD</Badge></Form.Label>
              <Row ><Form.Group controlId="validationBewerberprotokollStatus" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Aktiv"
                  className="pt-1 mt-1 ps-4"
                />

                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

              </Form.Group></Row>
              <Row >
               

                <Form.Group controlId="validationSchuelerAdNachname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerAdNachname"
                    label="Nachname"
                    className="pt-1"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder=""

                      ref={inputRefNachname}
                      onBlur={handleBlurNachname}
                    //pattern="[A-Z][a-z]*"
                    />

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationSchuelerAdVorname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerAdVorname"
                    label="Vorname"
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

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationBenutzerKlasse" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Klasse"
                className="pt-1 "
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

              </Row>
              <Row className="pt-2"> <Form.Group  as={Col} controlId="validationSchuelerAdGeburtsdatum">
                <FloatingLabel
                  controlId="formSchuelerAdGeburtsdatum"
                  label="Geburtsdatum"
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
              <Form.Group controlId="validationSchuelerAdBeschreibung" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerAdBeschreibung"
                    label="Beschreibung"
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

                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-4 pt-4 ">
                <Form.Group controlId="validationUserPrincipalName" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerUserPrincipalName"
                    label="UserPrincipalName"
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
                <Form.Group controlId="validationSamAccountName" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerSamAccountName"
                    label="SamAccountName"
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
                <Form.Group controlId="validationSchuelerDistinguishedName" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerDistinguishedName"
                    label="DistinguishedName"
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
                <Form.Group controlId="validationSchuelerHomeDirectory" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerHomeDirectory"
                    label="HomeDirectory"
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
              <Form.Label ><Badge bg="primary">Schüler EP</Badge></Form.Label>
              <Row  ><Form.Group controlId="validationSchuelerEp" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Aktiv"
                  className="pt-1 mt-1 ps-4"
                />

                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

              </Form.Group></Row>
              <Row >
               

                <Form.Group controlId="validationSchuelerEpNachname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpNachname"
                    label="Nachname"
                    className="pt-1"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder=""

                      ref={inputRefNachname}
                      onBlur={handleBlurNachname}
                    //pattern="[A-Z][a-z]*"
                    />

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationSchuelerAdVorname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerAdVorname"
                    label="Vorname"
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

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationBenutzerKlasse" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Klasse"
                className="pt-1 "
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

              </Row>
              <Row className="pt-2"> <Form.Group  as={Col} controlId="validationSchuelerAdTyp">
                <FloatingLabel
                  controlId="formSchuelerEpTyp"
                  label="Typ"
                  className="pt-1"
                >
                  {/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
                  <Form.Control

                    type="text"
                    id="inputBirthDate"
                    placeholder=""
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
              <Form.Group controlId="validationSchuelerEpAbteilung" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpAbteilung"
                    label="Abteilung"
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

                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-1 pt-4 ">
                <Form.Group controlId="validationSchuelerEpBenutzername" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpBenutzername"
                    label="Benutzername"
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
                <Form.Group controlId="validationSchuelerEpMailadresse" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpMailadresse"
                    label="Mailadresse"
                    className="pt-1"
                  >
                    <Form.Control
                      required
                      type="email"
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
              <Form.Label className="pt-4" ><Badge bg="primary">Schüler SK</Badge></Form.Label>
              <Row  ><Form.Group controlId="validationSchuelerEp" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Aktiv"
                  className="pt-1 mt-1 ps-4"
                />

                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

              </Form.Group></Row>
              <Row >
               

                <Form.Group controlId="validationSchuelerEpNachname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpNachname"
                    label="Nachname"
                    className="pt-1"
                  >
                    <Form.Control
                      required
                      type="text"
                      placeholder=""

                      ref={inputRefNachname}
                      onBlur={handleBlurNachname}
                    //pattern="[A-Z][a-z]*"
                    />

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationSchuelerAdVorname" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerAdVorname"
                    label="Vorname"
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

                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="validationBenutzerKlasse" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Klasse"
                className="pt-1 "
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

              </Row>
              <Row className="pt-2"> <Form.Group  as={Col} controlId="validationSchuelerAdTyp">
                <FloatingLabel
                  controlId="formSchuelerEpTyp"
                  label="Typ"
                  className="pt-1"
                >
                  {/* <Form.Label htmlFor="inputBirthDate">Geburtsdatum</Form.Label> */}
                  <Form.Control

                    type="text"
                    id="inputBirthDate"
                    placeholder=""
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
              <Form.Group controlId="validationSchuelerEpAbteilung" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpAbteilung"
                    label="Abteilung"
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

                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-1 pt-4 ">
                <Form.Group controlId="validationSchuelerEpBenutzername" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpBenutzername"
                    label="Benutzername"
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
                <Form.Group controlId="validationSchuelerEpMailadresse" as={Col}>
                  <FloatingLabel
                    controlId="formSchuelerEpMailadresse"
                    label="Mailadresse"
                    className="pt-1"
                  >
                    <Form.Control
                      required
                      type="email"
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
            </Col>
          </Tab>







           <Row><Form.Group controlId="validationBenutzerRolle" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Rolle"
                className="pt-1 mt-1"
              >
                <Form.Control
                  required
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
              <Form.Group controlId="validationBenutzerRechte" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Rechte"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    required
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
            </Row>
            <Row><Form.Group controlId="validationBenutzerKlassen" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Klassen"
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
                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>
              <Form.Group controlId="validationBenutzerReligionen" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Religionen"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Form.Label className="pt-4 h5" ><Badge bg="primary">Benutzerprotokoll</Badge></Form.Label>
            <Row >

              <Form.Group as={Col} controlId="validationBenutzerprotokollBenutzer" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Benutzer"
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
              <Form.Group controlId="validationBenutzerprotokollZeitpunkt" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Zeitpunkt"
                  className="pt-1 "
                >
                  <Form.Control
                    required
                    type="datetime-local"
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
              <Form.Group controlId="validationBenutzerprotokollTaetigkeit" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Tätigkeit"
                  className="pt-1 mt-2"
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
            <Form.Label className="pt-4 h5" ><Badge bg="primary">Benutzer_wu</Badge></Form.Label>
            <Row >

              <Form.Group as={Col} controlId="validationBenutzerWuSamAccountName" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="SamAccountName"
                  className="pt-1"
                >
                  <Form.Control
                    required
                    type="text"
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
              <Form.Group controlId="validationBenutzerWuGruppe" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Gruppe"
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
            </Row>
            <Row>
              <Form.Group controlId="validationBenutzerWuUserPrincipalName" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="UserPrincipalName"
                  className="pt-1 mt-2"
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

            <Form.Label className="pt-4 h5" ><Badge bg="primary">Benutzerordnung</Badge></Form.Label>
            <Row >
              <Row><Form.Group controlId="validationBenutzerordnungZustimmung" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Zugestimmt"
                  className="pt-1 mt-1 ps-4"
                />

                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

              </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="validationBenutzerordnungSchueler" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Schüler"
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
              <Form.Group controlId="validationBenutzerordnungDokument" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Dokument"
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
              <Form.Group controlId="validationBenutzerordnungZeitpunkt" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Zeitpunkt"
                  className="pt-1 mt-2"
                >
                  <Form.Control
                    required
                    type="datetime-local"
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
            <Form.Label className="pt-4 h5" ><Badge bg="primary">Datenschutzgrundverordnung</Badge></Form.Label>
            <Row >
              <Row><Form.Group controlId="validationDatenschutzgrundverordnungZustimmung" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Zugestimmt"
                  className="pt-1 mt-1 ps-4"
                />

                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

              </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="validationDatenschutzgrundverordnungSchueler" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Schüler"
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
              <Form.Group controlId="validationDatenschutzgrundverordnungDokument" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Dokument"
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
              <Form.Group controlId="validationDatenschutzgrundverordnungZeitpunkt" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Zeitpunkt"
                  className="pt-1 mt-2"
                >
                  <Form.Control
                    required
                    type="datetime-local"
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

            <Form.Label className="pt-4 h5" ><Badge bg="primary">Parkberechtigungen</Badge></Form.Label>
            <Row >

              <Form.Group as={Col} controlId="validationParkberechtigungenSchueler" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Schüler"
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
              <Form.Group controlId="validationParkberechtigungenSchuljahr" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Schuljahr"
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
              <Form.Group controlId="validationParkberechtigungenKennzeichenNo1" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Kennzeichen No1"
                  className="pt-1 mt-2"
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
              <Form.Group controlId="validationParkberechtigungenKennzeichenNo2" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Kennzeichen No2"
                  className="pt-1 mt-2"
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
              <Form.Group controlId="validationParkberechtigungenKennzeichenZeitpunkt" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Zeitpunkt"
                  className="pt-1 mt-2"
                >
                  <Form.Control
                    required
                    type="datetime-local"
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
            <Form.Label className="pt-4 h5" ><Badge bg="primary">Religionsentscheidungen</Badge></Form.Label>
            <Row >

              <Form.Group as={Col} controlId="validationReligionsentscheidungenSchueler" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Schüler"
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
              <Form.Group controlId="validationReligionsentscheidungenSchuljahr" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Schuljahr"
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
              <Form.Group controlId="validationReligionsentscheidungenEntscheidung" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Entscheidung"
                  className="pt-1 mt-2"
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
              <Form.Group controlId="validationReligionsentscheidungenZeitpunkt" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Zeitpunkt"
                  className="pt-1 mt-2"
                >
                  <Form.Control
                    required
                    type="datetime-local"
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
              <Form.Group controlId="validationReligionsentscheidungenAnmerkungen" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Anmerkungen"
                  className="pt-1 mt-2"
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
            <Form.Label className="pt-3 h5" ><Badge bg="primary">Fachrichtungen</Badge></Form.Label>
            <Row><Form.Group controlId="validationDFachrichtungenAnmeldbar" as={Col}>
              <Form.Check
                type="checkbox"
                // controlId="formNachname"
                label="Anmeldbar"
                className="pt-1 mt-1 ps-4"
              />

              {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

            </Form.Group>
            </Row>
            <Row >
              <Form.Group as={Col} controlId="validationFachrichtungenName" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Name"
                  className="pt-1"
                >
                  <Form.Control
                    required
                    type="text"
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
              <Form.Group controlId="validationFachrichtungenKuerzel" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Kürzel"
                  className="pt-1"
                >
                  <Form.Control
                    // required
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
            <Row><Form.Group controlId="validationFachrichtungenSchulformenkennzahl" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Schulformenkennzahl"
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
              <Form.Group controlId="validationFachrichtungenAbteilung" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Abteilung"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    // required
                    type="number"
                    placeholder=""
                    min={0}
                  // max={99}

                  // ref={inputRefNachname}
                  // onBlur={handleBlurNachname}
                  //pattern="[A-Z][a-z]*"
                  />
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group></Row>

            <Row><Form.Group controlId="validationFachrichtungenX" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="X"
                className="pt-1 mt-1"
              >
                <Form.Control
                  required
                  type="number"
                  placeholder=""
                  min={0}
                  max={99}

                // ref={inputRefNachname}
                // onBlur={handleBlurNachname}
                //pattern="[A-Z][a-z]*"
                />
                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>
              <Form.Group controlId="validationFachrichtungenY" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Y"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    min={0}
                    max={99}

                  // ref={inputRefNachname}
                  // onBlur={handleBlurNachname}
                  //pattern="[A-Z][a-z]*"
                  />
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group></Row>
            <Form.Label className="pt-3 h5" ><Badge bg="primary">Reihungskriterien</Badge></Form.Label>
            <Row >
              <Form.Group controlId="validationReihungskriterienSchuljahr" >
                <FloatingLabel
                  controlId="formReihungskriterienSchuljahr"
                  label="Schuljahr"
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
              <Form.Group controlId="validationReihungskriterienNationsumrechnung" >
                <FloatingLabel
                  controlId="formReihungskriterienNationsumrechnung"
                  label="Nationsumrechnung"
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
              <Form.Group controlId="validationReihungskriterienNotentypaufschlag" >
                <FloatingLabel
                  controlId="formReihungskriterienNotentypaufschlag"
                  label="Notentypaufschlag"
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
              <Form.Group controlId="validationReihungskriterienEignungstestpunkte" >
                <FloatingLabel
                  controlId="formReihungskriterienEignungstestpunkte"
                  label="Eignungstestpunkte"
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
              <Form.Group controlId="validationReihungskriterienNotenpunkte" >
                <FloatingLabel
                  controlId="formReihungskriterienNotenpunkte"
                  label="Notenpunkte"
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
              <Form.Group controlId="validationReihungskriterienOrtspunkte" >
                <FloatingLabel
                  controlId="formReihungskriterienOrtspunkte"
                  label="Ortspunkte"
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
              <Form.Group controlId="validationReihungskriterienGeschwisterfaktor" >
                <FloatingLabel
                  controlId="formReihungskriterienGeschwisterfaktor"
                  label="Geschwisterfaktor"
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
            <Form.Label className="pt-3 h5" ><Badge bg="primary">Klassen</Badge></Form.Label>


            <Row >
              <Form.Group controlId="validationKlassenAktiv" as={Col}>
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
              <Form.Group controlId="validationKlassenWS" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="WS"
                  className="pt-1 mt-1 ps-4"
                />
              </Form.Group>
              <Form.Group controlId="validationKlassenSS" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="SS"
                  className="pt-1 mt-1 ps-4"
                />
              </Form.Group>
              <Form.Group controlId="validationKlassenEthik" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="Ethik"
                  className="pt-1 mt-1 ps-4"
                />
              </Form.Group>
              <Form.Group controlId="validationKlassenDiplDB" as={Col}>
                <Form.Check
                  type="checkbox"
                  // controlId="formNachname"
                  label="DiplDB"
                  className="pt-1 mt-1 ps-4"
                />
              </Form.Group>
            </Row>
            <Row >
              <Form.Group as={Col} controlId="validationKlassenAbteilung" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Abteilung"
                  className="pt-1"
                >
                  <Form.Control
                    // required
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
              <Form.Group controlId="validationKlassenKuerzel" as={Col}>
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
            </Row>
            <Row><Form.Group controlId="validationKlassenAlias" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Alias"
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
                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>
              <Form.Group controlId="validationKlassenAliasWu" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Alias WU"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="validationKlassenAliasSk" as={Col}>
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="validationKlassenAliasAd" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Alias AD"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    required
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

              <Form.Group controlId="validationKlassenAliasEp" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Alias EP"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="validationKlassenFachrichtung" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Fachrichtung"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    // required
                    type="number"
                    placeholder=""
                    min={0}
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
            <Row>
              <Form.Group controlId="validationKlassenRaum" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Raum"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="validationKlassenNachWsID" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Nach WS ID"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    // required
                    type="number"
                    placeholder=""
                    min={0}
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
              <Form.Group controlId="validationKlassenNachSsId" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Nach SS ID"
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




              <Form.Group controlId="validationKlassenLehrer1" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Lehrer 1"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    // required
                    type="number"
                    placeholder=""
                    min={0}
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
              <Form.Group controlId="validationKlassenLehrer2" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Lehrer 2"
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
              <Form.Group controlId="validationKlassenX" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="X"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    min={0}
                    max={99}

                  // ref={inputRefNachname}
                  // onBlur={handleBlurNachname}
                  //pattern="[A-Z][a-z]*"
                  />
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="validationKlassenY" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Y"
                  className="pt-1 mt-1"
                >
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    min={0}
                    max={99}

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




            <Form.Label className="pt-3 h5" >
              <Badge bg="primary">Lehrer</Badge>
            </Form.Label>

            <Row >
              <Form.Group as={Col} controlId="validationLehrerKuerzel" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Kürzel"
                  className="pt-1"
                >
                  <Form.Control
                    // required
                    type="text"
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
              <Form.Group controlId="validationLehrerNachname" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Nachname"
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
              <Form.Group controlId="validationLehrerVorname" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Vorname"
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
            <Row><Form.Group controlId="validationLehrerSamAccountName" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="SamAccountName"
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
                {/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>

              <Form.Group controlId="validationLehrerUserPrincipalName" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="UserPrincipalName"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
              <Row>
                <Row><Form.Group controlId="validationLehrerAbteilungsvorstand" as={Col}>
                  <Form.Check
                    type="checkbox"
                    // controlId="formNachname"
                    label="Abteilungsvorstand"
                    className="pt-1 mt-1 ps-4"
                  />

                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

                </Form.Group>

                  <Form.Group controlId="validationLehrerKlassenvorstand" as={Col}>
                    <Form.Check
                      type="checkbox"
                      // controlId="formNachname"
                      label="Klassenvorstand"
                      className="pt-1 mt-1 ps-4"
                    />

                    {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

                  </Form.Group>
                  <Form.Group controlId="validationLehrerReligionslehrer" as={Col}>
                    <Form.Check
                      type="checkbox"
                      // controlId="formNachname"
                      label="Religionslehrer"
                      className="pt-1 mt-1 ps-4"
                    />

                    {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}

                  </Form.Group>
                </Row>
              </Row>

            </Row>
            <Form.Label className="pt-3 h5" ><Badge bg="primary">Länder</Badge></Form.Label>

            <Row >
              <Form.Group as={Col} controlId="validationLaenderName" >
                <FloatingLabel
                  // controlId="formVorname"
                  label="Name"
                  className="pt-1"
                >
                  <Form.Control
                    // required
                    type="text"
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
              <Form.Group controlId="validationLaenderKuerzel2" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Kürzel 2"
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
              <Form.Group controlId="validationLaenderKuerzel3" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Kürzel 3"
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
            <Row><Form.Group controlId="validationLaenderAlias" as={Col}>
              <FloatingLabel
                // controlId="formNachname"
                label="Alias"
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
                {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
              </FloatingLabel>
            </Form.Group>

              <Form.Group controlId="validationKlassenAliasSk" as={Col}>
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                      Bitte geben Sie den Nachnamen des Bewerbers an.

                    </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>

            </Row>
            <Form.Label className="pt-3 h5" >
              <Badge bg="primary">Ortschaften</Badge>
            </Form.Label>
           
            <Row>
              <Form.Group controlId="validationOrtschaftenGemeinde" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Gemeinde"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
          Bitte geben Sie den Nachnamen des Bewerbers an.

        </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>

              <Form.Group controlId="validationOrtschaftenGemeindekennzahl" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Gemeindekennzahl"
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

              <Form.Group controlId="validationOrtschaftenKatastralgemeinde" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Katastralgemeinde"
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
              <Form.Group controlId="validationOrtschaftenKatastralgemeindenummer" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Katastralgemeindenummer"
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
              <Form.Group controlId="validationOrtschaftenBezirk" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Bezirk"
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
                  {/* <Form.Control.Feedback type="invalid" className="mx-2">
                  Bitte geben Sie den Nachnamen des Bewerbers an.

                  </Form.Control.Feedback> */}
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId="validationOrtschaftenBezirkskennzahl" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Bezirkskennzahl"
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
              <Form.Group controlId="validationOrtschaftenBundesland" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Bundesland"
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
              <Form.Group controlId="validationOrtschaftenLand" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Land"
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
              </Form.Group></Row>

            <Row>
              <Form.Group controlId="validationOrtschaftenLongitude" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Longitude"
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
              <Form.Group controlId="validationOrtschaftenLatitude" as={Col}>
                <FloatingLabel
                  // controlId="formNachname"
                  label="Latitude"
                  className="pt-1 mt-1 "
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