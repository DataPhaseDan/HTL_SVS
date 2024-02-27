import express, { Request, Response } from "express";
// import session, { Session } from "express-session";
import nodemailer from "nodemailer";
import pkg from "pg";
const { Pool } = pkg;
import { fileURLToPath } from "url";
import cors from "cors";
import path from "path"; // Add the import statement for the 'path' module
const __dirname = path.dirname(fileURLToPath(import.meta.url));


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
// app.use(
// 	session({
// 		secret: "my secret",
// 		resave: false,
// 		saveUninitialized: false,
// 		cookie: {
// 			maxAge: 1000 * 60 * 60, // One hour expiration (adjust as needed)
// 			httpOnly: true,
// 			secure: true // Consider if applicable
// 		},
// 	}),
// );
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
	/* SMTP server parameters */
});

app.use(express.json());

const handleRegistration =
(type: string) => async (req: Request, res: Response) => {
	const clientData = req.body;
	const sessionHash = clientData.Anmeldenummer;
	
	console.log(clientData);
	// Check if a session for this user already exists
	let query =
	"SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0";
	const result = await pool.query(query, [sessionHash]);
	
	if (result.rows.length === 1) {
		// A session for this user already exists, so reactivate the session
		// const url = `https://localhost/anmeldungen/${type}/session?session=${sessionHash}`;
		// await transporter.sendMail({
			// 	from: "noreply@mywebsite.com",
			// 	to: clientData.email,
			// 	subject: "Setzen Sie Ihre Anmeldung fort",
			// 	text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
			// });
			res.status(409).json({ message: "Conflict" });
		} else {
			// No session for this user exists, so create a new session
			query =
				`INSERT INTO zsv_bewerber(
					finalisiert,
					DSGVO,
					SCHULJAHR,
					Kontaktmailadresse,
					Anmeldenummer,
					Anrede,
					Titelvor,
					Titelnach,
					Nachname,
					Vorname,
					Vornamen,
					Geburtsdatum,
					Geschlecht,
					SozialversicherungAUT,
					SOZIALVERSICHERUNGSTRAEGER,
					Sozialversicherungsnummer,
					SozialversicherungsGebDat,
					Geburtsort,
					GEBURTSLAND,
					STAATSBUERGERSCHAFT,
					ERSTSPRACHE,
					ZWEITSPRACHE,
					RELIGIONSBEKENNTNIS,
					Strasse,
					Hausnummer,
					Postleitzahl,
					Wohnort,
					Wohnortkennzahl,
					Gemeindekennzahl,
					WOHNLAND,
					Laendervorwahl1,
					Vorwahl1,
					Nummer1,
					Laendervorwahl2,
					Vorwahl2,
					Nummer2,
					Mailadresse,
					Schulpflicht,
					VERHAELTNISA,
					AnredeA,
					TitelvorA,
					TitelnachA,
					NachnameA,
					VornameA,
					StrasseA,
					HausnummerA,
					PostleitzahlA,
					WohnortA,
					WohnortkennzahlA,
					GemeindekennzahlA,
					WOHNLANDA,
					LaendervorwahlA1,
					VorwahlA1,
					NummerA1,
					LaendervorwahlA2,
					VorwahlA2,
					NummerA2,
					MailadresseA,
					VERHAELTNISB,
					AnredeB,
					TitelvorB,
					TitelnachB,
					NachnameB,
					VornameB,
					StrasseB,
					HausnummerB,
					PostleitzahlB,
					WohnortB,
					WohnortkennzahlB,
					GemeindekennzahlB,
					WOHNLANDB,
					LaendervorwahlB1,
					VorwahlB1,
					NummerB1,
					LaendervorwahlB2,
					VorwahlB2,
					NummerB2,
					MailadresseB,
					Geschwisteranzahl,
					Geschwisteranschule,
					Geschwisternamen,
					Erstwunsch,
					Erstwunschschule,
					Zweitwunschschule,
					FACHRICHTUNG1,
					FACHRICHTUNG2,
					FACHRICHTUNG3,
					LetzteSchulform
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
						$81, $82, $83, $84, $85, $86, $87, $88);`
			await pool.query(query, [
				clientData.finalisiert,
				clientData.dsgvo,
				clientData.schuljahr,
				clientData.Kontaktmailadresse,
				clientData.Anmeldenummer,
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
				clientData.sozialversicherungsnummer,
				clientData.sozialversicherungsgebdat,
				clientData.geburtsort,
				clientData.geburtsland,
				clientData.staatsbuergerschaft,
				clientData.erstsprache,
				clientData.zweitsprache,
				clientData.religionsbekenntnis,
				clientData.strasse,
				clientData.hausnummer,
				clientData.postleitzahl,
				clientData.wohnort,
				clientData.wohnortkennzahl,
				clientData.gemeindekennzahl,
				clientData.wohnland,
				clientData.Laendervorwahl1,
				clientData.Vorwahl1,
				clientData.Nummer1,
				clientData.laendervorwahl2,
				clientData.vorwahl2,
				clientData.nummer2,
				clientData.mailadresse,
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
				clientData.wohnortkennzahlA,
				clientData.gemeindekennzahlA,
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
				clientData.wohnortkennzahlB,
				clientData.gemeindekennzahlB,
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
				clientData.Fachrichtung1,
				clientData.fachrichtung2,
				clientData.fachrichtung3,
				clientData.letzteschulform,
				//clientData.angemeldet

			]);
			const url = `https://localhost/anmeldungen/${type}/session?session=${sessionHash}`;

			// await transporter.sendMail({
			// 	from: "noreply@mywebsite.com",
			// 	to: clientData.email,
			// 	subject: "Setzen Sie Ihre Anmeldung fort",
			// 	text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
			// });

			res.status(200).json({ message: "OK" });
		}

		// Send the session link to the user's email
	};

	interface Option {
		id: number;
		name: string;
	
	}

app.get("/options/fachrichtungen_abendschule", async (req: Request, res: Response) => {
  try {
    const result = await pool.query<Option>('SELECT ID, Name FROM zsv_fachrichtungen_abendschule');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching options' });
  }
});

app.get("/options/fachrichtungen_tagesschule", async (req: Request, res: Response) => {
  try {
    const result = await pool.query<Option>('SELECT ID, Name FROM zsv_fachrichtungen_tagesschule');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching options' });
  }
});
// Serve static files from the "build" directory
// Parse JSON bodies

app.post("/registration/tagesschule", handleRegistration("tagesschule"));
app.post("/registration/abendschule", handleRegistration("abendschule"));

app.get("/registration/tagesschule/session", async (req: Request, res: Response) => {
	const sessionHash = req.query.Anmeldenummer;
});

app.get("/registration/abendschule/session", async (req: Request, res: Response) => {
	const sessionHash = req.query.Anmeldenummer;
});
app.get("*", (req: Request, res: Response) => {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	res.sendFile(path.join(__dirname, "../app/dist/index.html"));
});

app.listen(410, () => console.log("Server running on port 410"));
// https
// 	.createServer(options, app)
// 	.listen(410, () => console.log("Server running on port 410"));
