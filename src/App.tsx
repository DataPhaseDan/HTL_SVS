
//import reactLogo from './assets/react.svg'

import './App.css'
import { Form,Button,Col,Row } from 'react-bootstrap'

function App() {
  return (
    <Form data-bs-theme="light">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridVorname">
          <Form.Label>Vorname</Form.Label>
          <Form.Control type="text" placeholder="Vorname" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNachname">
          <Form.Label>Nachname</Form.Label>
          <Form.Control type="text" placeholder="Nachname" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email" placeholder="ihre@email.hier" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridFachrichtung">
        <Form.Label>Fachrichtung</Form.Label>
        <Form.Select defaultValue="Choose...">
            <option>Bitte wählen Sie die gewünschte Fachrichtung</option>
            <option>Abend-HTL für Berufstätige (Bautechnik) </option>
            <option>Abend-HTL für Berufstätige (Elektrotechnik)</option>
            <option>Abend-HTL für Berufstätige (Informatik)</option>
            <option>Abend-HTL für Berufstätige (Maschinenbau)</option>
          </Form.Select>
      </Form.Group>

      <Row className="mb-3">
 

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Geburtsdatum</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default App;
