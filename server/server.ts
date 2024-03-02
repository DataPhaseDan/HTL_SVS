import express, { Request, Response, NextFunction } from "express";
// import session, { Session } from "express-session";
import nodemailer from "nodemailer";
import pkg from "pg";
const { Pool } = pkg;
import { fileURLToPath } from "url";
import cors from "cors";
import path from "path"; // Add the import statement for the 'path' module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import session from "express-session";
import { serializeUser, deserializeUser } from 'passport-cookie';


interface User {
	id: string;
}

// const options = {
// 	key: fs.readFileSync("./cert.pem"),
// 	cert: fs.readFileSync("./key.pem"),
// };

// type CustomSession = {
// 	sessionHash: string; // Add your custom session properties here
// };

// type CustomRequest = express.Request & {
// 	session: Session & Partial<CustomSession>;
// };

const app = express();
app.use(
	session({
		secret: "my secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 15, // 15 minutes
			secure: true // Consider if applicable
		},
	}),
);
// const corsOptions = {
// 	origin: "https://localhost",

// 	methods: ["GET", "POST", "PUT", "DELETE"],
// 	allowedHeaders: [
// 		"Content-Type",
// 		"Authorization",
// 		"Origin",
// 		"X-Requested-With",
// 		"Accept",
// 		"Access-Control-Allow-Origin",
// 		"Access-Control-Allow-Headers",
// 		"Access-Control-Allow-Methods",
// 		"Access-Control-Allow-Credentials",
// 		"Access-Control-Max-Age",
// 		"Access-Control-Request-Headers",
// 		"Access-Control-Request-Method",
// 		"Accept-Encoding",
// 		"Accept-Language",
// 		"Connection",
// 		"Host",
// 		"Referer",
// 		"User-Agent",
// 		"X-Requested-With",
// 		"X-Forwarded-For",
// 		"X-Forwarded-Proto",
// 		"X-Forwarded-Port",
// 		// "text/html",
// 		// "application/json",
// 		// "multipart/form-data",
// 		// "application/x-www-form-urlencoded",
// 		// "application/xml",
// 		// "application/javascript",
// 		// "application/octet-stream",

// 	],
// 	acepptedHeaders: [
// 		"application/json",
// 	],

// };


// app.use(passport.initialize());
// app.use(passport.session());




// // server.ts
// const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.status(401).send('Unauthorized');
// };

// app.get('/login', passport.authenticate('microsoft', { scope: ['user.read'] }));

// app.get('/auth/microsoft/callback', passport.authenticate('microsoft', {
// 	successRedirect: '/adminpanel',
// 	failureRedirect: '/login',
// }));




// app.get('/adminpanel', isAuthenticated, (req: Request, res: Response) => {
// 	res.send('Welcome to the admin panel!');
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
});


app.use(cors());
// const __dirname = dirname(fileURLToPath(import.meta.url));
// res.sendFile(path.join(__dirname, "../app/dist/index.html"));

app.use(express.static(path.join(__dirname, "../app/dist")));

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// // ...

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	if (req.method === "GET") {
		console.log(`Received GET request: ${req.url}`);
		console.log(`Received GET request: ${req.url}`);
		console.log("Headers:", req.headers);
		console.log("Query parameters:", req.query);
	}
	if (req.method === "POST") {
		console.log(`Received POST request: ${req.url} \n`);
		console.log(`Received POST request: ${req.url} \n`);
		console.log("Headers:", req.headers);
		console.log("Query parameters:", req.query);
	}
	next();
});

const pool = new Pool({
	host: "db",
	database: "zsv_bewerber",
	user: "zsv_user",
	password: "zsv_password",
	port: 5432,
	/* PostgreSQL connection parameters */
});

const transporter = nodemailer.createTransport({
	host: 'smtp.office365.com',
	port: 587,
	auth: {
		user: 'Test.1abbt@htl-salzburg.ac.at',
		pass: 'daniel#RENNER90'
	}
});

app.use(express.json());

const handleRegistrationPhaseOne =
	(type: string) => async (req: Request, res: Response) => {
		const clientData = req.body;
		const sessionHash = clientData.Anmeldenummer;

		// console.log(clientData);
		// Check if a session for this user already exists
		let query =
			"SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0";
		const result = await pool.query(query, [sessionHash]);


		if (result.rows.length === 1) {
			// A session for this user already exists, so reactivate the session
			const url = `https://localhost/anmeldungen/${type}/session?session=${sessionHash}`;
			try {
				if (clientData.Kontaktmailadresse === "") {
					throw new Error("No email address provided");
				}
				await transporter.sendMail({
					from: transporter.options.from?.toString(),
					to: clientData.Kontaktmailadresse,
					subject: "Setzen Sie Ihre Anmeldung fort",
					text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
				});
				// If the email is sent successfully, you can send a success response to the client
				res.status(409).json({ Error: "Email duplicate" });
			} catch (error) {
				// If an error occurs while sending the email, log the error and send an error response
				console.error(error);
				// Determine the appropriate status code and message based on the error
				let statusCode = 500;
				let message = "An error occurred while sending the email.";
				if ((error as Error).message === "No email address provided") {
					statusCode = 400; // Bad Request
					message = "Sie haben keine Kontaktmailadresse angegeben!";
				} else if ((error as Error).message === "Keine Session gefunden!") {
					statusCode = 410; // Gone
					message = "Keine Session gefunden!";
				}
				res.status(statusCode).json({ message: message });
			}
		} else {
			// No session for this user exists, so create a new session
			query =
				`INSERT INTO zsv_bewerber(
					finalisiert,
					dsgvo,
					schuljahr,
					kontaktmailadresse,
					anmeldenummer,
					anrede,
					titelvor,
					titelnach,
					nachname,
					vorname,
					vornamen,
					geburtsdatum,
					geschlecht,
					sozialversicherungaut,
					sozialversicherungstraeger,
					sozialversicherungsnummer,
					sozialversicherungsgebdat,
					geburtsort,
					geburtsland,
					staatsbuergerschaft,
					erstsprache,
					zweitsprache,
					religionsbekenntnis,
					strasse,
					hausnummer,
					postleitzahl,
					wohnort,
					wohnland,
					laendervorwahl1,
					vorwahl1,
					nummer1,
					laendervorwahl2,
					vorwahl2,
					nummer2,
					schulpflicht,
					verhaeltnisA,
					anredeA,
					titelvorA,
					titelnachA,
					nachnameA,
					vornameA,
					strasseA,
					hausnummerA,
					postleitzahlA,
					wohnortA,
					wohnlandA,
					laendervorwahlA1,
					vorwahlA1,
					nummerA1,
					laendervorwahlA2,
					vorwahlA2,
					nummerA2,
					mailadresseA,
					verhaeltnisB,
					anredeB,
					titelvorB,
					titelnachB,
					nachnameB,
					vornameB,
					strasseB,
					hausnummerB,
					postleitzahlB,
					wohnortB,
					wohnlandB,
					laendervorwahlB1,
					vorwahlB1,
					nummerB1,
					laendervorwahlB2,
					vorwahlB2,
					nummerB2,
					mailadresseB,
					geschwisteranzahl,
					geschwisteranschule,
					geschwisternamen,
					erstwunsch,
					erstwunschschule,
					zweitwunschschule,
					fachrichtung1,
					fachrichtung2,
					fachrichtung3,
					letzteschulform,
					angemeldet
					) 
					VALUES($1, $2, $3,
						$4, $5, $6, $7, $8,
						$9, $10, $11, $12,
						$13, $14, $15, $16, $17, $18, $19, $20,
						$21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
						$31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
						$41, $42, $43, $44, $45, $46, $47, $48, $49, $50,
						$51, $52, $53, $54, $55, $56, $57, $58, $59, $60,
						$61, $62, $63, $64, $65, $66, $67, $68, $69, $70,
						$71, $72, $73, $74, $75, $76, $77, $78, $79, $80,
						$81, $82);`
			await pool.query(query, [
				clientData.finalisiert,
				clientData.dsgvo,
				clientData.schuljahr,
				clientData.kontaktmailadresse,
				clientData.anmeldenummer,
				clientData.anrede,
				clientData.titelvor,
				clientData.titelnach,
				clientData.nachname,
				clientData.vorname,
				clientData.vornamen,
				clientData.geburtsdatum,
				clientData.geschlecht,
				clientData.sozialversicherungaut,
				clientData.sozialversicherungstraeger,
				clientData.sozialversicherungsnummer?.substring(0, 3),
				clientData.sozialversicherungsnummer?.substring(3, 9),
				clientData.geburtsort,
				clientData.geburtsland,
				clientData.staatsbuergerschaft,
				clientData.erstsprache,
				clientData.zweitsprache,
				clientData.religion,
				clientData.strasse,
				clientData.hausnummer,
				clientData.postleitzahl,
				clientData.wohnort,
				clientData.wohnland,
				clientData.laendervorwahl1,
				clientData.vorwahl1,
				clientData.nummer1,
				clientData.laendervorwahl2,
				clientData.vorwahl2,
				clientData.nummer2,
				clientData.schulpflicht,
				clientData.verhaeltnisa,
				clientData.anredeA,
				clientData.titelvorA,
				clientData.titelnachA,
				clientData.nachnameA,
				clientData.vornameA,
				clientData.strasseA,
				clientData.hausnummerA,
				clientData.postleitzahlA,
				clientData.wohnortA,
				clientData.wohnlandA,
				clientData.laendervorwahlA1,
				clientData.vorwahlA1,
				clientData.nummerA1,
				clientData.laendervorwahlA2,
				clientData.vorwahlA2,
				clientData.nummerA2,
				clientData.mailadresseA,
				clientData.verhaeltnisb,
				clientData.anredeB,
				clientData.titelvorB,
				clientData.titelnachB,
				clientData.nachnameB,
				clientData.vornameB,
				clientData.strasseB,
				clientData.hausnummerB,
				clientData.postleitzahlB,
				clientData.wohnortB,
				clientData.wohnlandB,
				clientData.laendervorwahlB1,
				clientData.vorwahlB1,
				clientData.nummerB1,
				clientData.laendervorwahlB2,
				clientData.vorwahlB2,
				clientData.nummerB2,
				clientData.mailadresseB,
				clientData.geschwisteranzahl,
				clientData.geschwisteranschule,
				clientData.geschwisternamen,
				clientData.erstwunsch,
				clientData.erstwunschschule,
				clientData.zweitwunschschule,
				clientData.fachrichtung1,
				clientData.fachrichtung2,
				clientData.fachrichtung3,
				clientData.letzteschulform,
				clientData.angemeldet
			]);
			const url = `https://localhost/anmeldungen/${type}/session?session=${sessionHash}`;
			try {
				if (clientData.Kontaktmailadresse === "") {
					throw new Error("No email address provided");
				}
				await transporter.sendMail({
					from: transporter.options.from?.toString(),
					to: clientData.Kontaktmailadresse,
					subject: "Setzen Sie Ihre Anmeldung fort",
					text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
				});
				// If the email is sent successfully, you can send a success response to the client
				res.status(200).json({ message: "Email sent successfully" });
			} catch (error) {
				// If an error occurs while sending the email, log the error and send an error response
				console.error(error);
				// Determine the appropriate status code and message based on the error
				let statusCode = 500;
				let message = "An error occurred while sending the email.";
				if ((error as Error).message === "No email address provided") {
					statusCode = 400; // Bad Request
					message = "Sie haben keine Kontaktmailadresse angegeben!";
				} else if ((error as Error).message === "Keine Session gefunden!") {
					statusCode = 410; // Gone
					message = "Keine Session gefunden!";
				}
				res.status(statusCode).json({ message: message });
			}
		}

		// Send the session link to the user's email
	};



const handleRegistrationPhaseTwo =
	(type: string) => async (req: Request, res: Response) => {
		const clientData = req.body;
		const sessionHash = clientData.Anmeldenummer;

		// console.log(clientData);
		// Check if a session for this user already exists
		let query =
			"SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0";
		const result = await pool.query(query, [sessionHash]);


		if (result.rows.length === 1) {
			// A session for this user already exists, so reactivate the session
			const url = `https://localhost/anmeldungen/${type}/session?session=${sessionHash}`;
			try {
				if (clientData.Kontaktmailadresse === "") {
					throw new Error("No email address provided");
				}
				await transporter.sendMail({
					from: transporter.options.from?.toString(),
					to: clientData.Kontaktmailadresse,
					subject: "Setzen Sie Ihre Anmeldung fort",
					text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
				});
				query =
					`INSERT INTO zsv_bewerber(
					finalisiert,
					dsgvo,
					schuljahr,
					kontaktmailadresse,
					anmeldenummer,
					anrede,
					titelvor,
					titelnach,
					nachname,
					vorname,
					vornamen,
					geburtsdatum,
					geschlecht,
					sozialversicherungaut,
					sozialversicherungstraeger,
					sozialversicherungsnummer,
					sozialversicherungsgebdat,
					geburtsort,
					geburtsland,
					staatsbuergerschaft,
					erstsprache,
					zweitsprache,
					religionsbekenntnis,
					strasse,
					hausnummer,
					postleitzahl,
					wohnort,
					wohnland,
					laendervorwahl1,
					vorwahl1,
					nummer1,
					laendervorwahl2,
					vorwahl2,
					nummer2,
					schulpflicht,
					verhaeltnisA,
					anredeA,
					titelvorA,
					titelnachA,
					nachnameA,
					vornameA,
					strasseA,
					hausnummerA,
					postleitzahlA,
					wohnortA,
					wohnlandA,
					laendervorwahlA1,
					vorwahlA1,
					nummerA1,
					laendervorwahlA2,
					vorwahlA2,
					nummerA2,
					mailadresseA,
					verhaeltnisB,
					anredeB,
					titelvorB,
					titelnachB,
					nachnameB,
					vornameB,
					strasseB,
					hausnummerB,
					postleitzahlB,
					wohnortB,
					wohnlandB,
					laendervorwahlB1,
					vorwahlB1,
					nummerB1,
					laendervorwahlB2,
					vorwahlB2,
					nummerB2,
					mailadresseB,
					geschwisteranzahl,
					geschwisteranschule,
					geschwisternamen,
					erstwunsch,
					erstwunschschule,
					zweitwunschschule,
					fachrichtung1,
					fachrichtung2,
					fachrichtung3,
					letzteschulform,
					angemeldet
					) 
					VALUES($1, $2, $3,
						$4, $5, $6, $7, $8,
						$9, $10, $11, $12,
						$13, $14, $15, $16, $17, $18, $19, $20,
						$21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
						$31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
						$41, $42, $43, $44, $45, $46, $47, $48, $49, $50,
						$51, $52, $53, $54, $55, $56, $57, $58, $59, $60,
						$61, $62, $63, $64, $65, $66, $67, $68, $69, $70,
						$71, $72, $73, $74, $75, $76, $77, $78, $79, $80,
						$81, $82);`
				await pool.query(query, [
					clientData.finalisiert,
					clientData.dsgvo,
					clientData.schuljahr,
					clientData.kontaktmailadresse,
					clientData.anmeldenummer,
					clientData.anrede,
					clientData.titelvor,
					clientData.titelnach,
					clientData.nachname,
					clientData.vorname,
					clientData.vornamen,
					clientData.geburtsdatum,
					clientData.geschlecht,
					clientData.sozialversicherungaut,
					clientData.sozialversicherungstraeger,
					clientData.sozialversicherungsnummer?.substring(0, 3),
					clientData.sozialversicherungsnummer?.substring(3, 9),
					clientData.geburtsort,
					clientData.geburtsland,
					clientData.staatsbuergerschaft,
					clientData.erstsprache,
					clientData.zweitsprache,
					clientData.religion,
					clientData.strasse,
					clientData.hausnummer,
					clientData.postleitzahl,
					clientData.wohnort,
					clientData.wohnland,
					clientData.laendervorwahl1,
					clientData.vorwahl1,
					clientData.nummer1,
					clientData.laendervorwahl2,
					clientData.vorwahl2,
					clientData.nummer2,
					clientData.schulpflicht,
					clientData.verhaeltnisa,
					clientData.anredeA,
					clientData.titelvorA,
					clientData.titelnachA,
					clientData.nachnameA,
					clientData.vornameA,
					clientData.strasseA,
					clientData.hausnummerA,
					clientData.postleitzahlA,
					clientData.wohnortA,
					clientData.wohnlandA,
					clientData.laendervorwahlA1,
					clientData.vorwahlA1,
					clientData.nummerA1,
					clientData.laendervorwahlA2,
					clientData.vorwahlA2,
					clientData.nummerA2,
					clientData.mailadresseA,
					clientData.verhaeltnisb,
					clientData.anredeB,
					clientData.titelvorB,
					clientData.titelnachB,
					clientData.nachnameB,
					clientData.vornameB,
					clientData.strasseB,
					clientData.hausnummerB,
					clientData.postleitzahlB,
					clientData.wohnortB,
					clientData.wohnlandB,
					clientData.laendervorwahlB1,
					clientData.vorwahlB1,
					clientData.nummerB1,
					clientData.laendervorwahlB2,
					clientData.vorwahlB2,
					clientData.nummerB2,
					clientData.mailadresseB,
					clientData.geschwisteranzahl,
					clientData.geschwisteranschule,
					clientData.geschwisternamen,
					clientData.erstwunsch,
					clientData.erstwunschschule,
					clientData.zweitwunschschule,
					clientData.fachrichtung1,
					clientData.fachrichtung2,
					clientData.fachrichtung3,
					clientData.letzteschulform,
					clientData.angemeldet
				]);
				// If the email is sent successfully, you can send a success response to the client
				res.status(202).json({ message: "Data Accepted and Written" });
			} catch (error) {
				// If an error occurs while sending the email, log the error and send an error response
				console.error(error);
				// Determine the appropriate status code and message based on the error
				let statusCode = 500;
				let message = "An error occurred while sending the email.";
				if ((error as Error).message === "No email address provided") {
					statusCode = 400; // Bad Request
					message = "Sie haben keine Kontaktmailadresse angegeben!";
				} else if ((error as Error).message === "Keine Session gefunden!") {
					statusCode = 410; // Gone
					message = "Keine Session gefunden!";
				}
				res.status(statusCode).json({ message: message });
			}
		} else {
			res.status(410).json({ Error: "Anmeldung bereits finalisiert" });
		};
	};


interface Option {
	id: number;
	name: string;

}

// TODO: setup passport.js for oauth2 middleware
app.get("/options/fachrichtungen_abendschule/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_fachrichtungen_abendschule');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});

app.get("/options/fachrichtungen_tagesschule/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_fachrichtungen_tagesschule');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/geburtsland/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_laender');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});

app.get("/options/sozialversicherungstraeger/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_sozialversicherungstraeger');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/staatsbuergerschaft/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_staatsbuergerschaften');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/erstsprache/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_sprachen');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/zweitsprache/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_sprachen');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});

app.get("/options/religionsbekenntnis/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_religionsbekenntnisse');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/wohnland/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_laender');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
app.get("/options/geschlecht/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_geschlecht');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});

app.get("/options/anrede/", async (req: Request, res: Response) => {
	try {
		const result = await pool.query<Option>('SELECT ID, Name FROM zsv_anrede');
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});
// Serve static files from the "build" directory
// Parse JSON bodies

app.post("/registration/tagesschule/", handleRegistrationPhaseOne("tagesschule"));
app.post("/registration/abendschule/", handleRegistrationPhaseOne("abendschule"));
app.post("/registration/tagesschule/session/", handleRegistrationPhaseTwo("tagesschule"));
app.post("/registration/abendschule/session/", handleRegistrationPhaseTwo("abendschule"));

// app.post('/send-email', async (req:Request, res:Response) => {
//   const { recipient, subject, message } = req.body;


//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: recipient,
//     subject: subject,
//     text: message
//   };

//   transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send({ success: false });
//     } else {
//       console.log(`Email sent: ${info.response}`);
//       res.status(200).send({ success: true });
//     }
//   });
// });

app.get("/anmeldungen/tagesschule/sessionfill/:session", async (req: Request<{ session: string }>, res: Response) => {
	const sessionHash = req.params.session;
	try {
		const result = await pool.query('SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0', [sessionHash]);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});

app.get("/anmeldungen/abendschule/sessionfill/:session", async (req: Request<{ session: string }>, res: Response) => {
	const sessionHash = req.params.session;
	try {
		const result = await pool.query('SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0', [sessionHash]);
		res.json(result.rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'An error occurred while fetching options' });
	}
});



app.get("*", (req: Request, res: Response) => {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	res.sendFile(path.join(__dirname, "../app/dist/index.html"));
});

app.listen(410, () => console.log("Server running on port 410"));