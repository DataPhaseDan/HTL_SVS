import React from 'react';

import {
	Col,
	FloatingLabel,
	Form,
	Row
} from "react-bootstrap";


const Noten: React.FC = () => {

	return (
		<Form>
			<Row className="mb-1 mt-4 ">
				<Form.Group controlId="validationNotentypM" as={Col}>
					<FloatingLabel
						controlId="formNotentypM"
						label="Notentyp M"
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
				<Form.Group controlId="validationNotentypD" as={Col}>
					<FloatingLabel
						controlId="formNotentypD"
						label="Notentyp D"
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
				<Form.Group controlId="validationNotentypE" as={Col}>
					<FloatingLabel
						controlId="formNotentypE"
						label="Notentyp E"
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
			<Row className="mb-1 ">
				<Form.Group controlId="validationM" as={Col}>
					<FloatingLabel controlId="formM" label="M" className="pt-1">
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
				<Form.Group controlId="validationD" as={Col}>
					<FloatingLabel controlId="formD" label="D" className="pt-1">
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
				<Form.Group controlId="validationE" as={Col}>
					<FloatingLabel controlId="formE" label="E" className="pt-1">
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

			<Row className="mb-1 ">
				<Form.Group controlId="validationPH" as={Col}>
					<FloatingLabel controlId="formPH" label="PH" className="pt-1">
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
				<Form.Group controlId="validationCH" as={Col}>
					<FloatingLabel controlId="formCH" label="CH" className="pt-1">
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
				<Form.Group controlId="validationGG" as={Col}>
					<FloatingLabel controlId="formGG" label="GG" className="pt-1">
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
				<Form.Group controlId="validationGS" as={Col}>
					<FloatingLabel controlId="formGS" label="GS" className="pt-1">
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
nation note
                    </Form.Control.Feedback> */}
					</FloatingLabel>
				</Form.Group>
			</Row>
		</Form>
	);
};

export default Noten;