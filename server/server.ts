import express, { Request, Response } from "express";
import session, { Session } from "express-session";
import nodemailer from "nodemailer";
import { Pool, Client } from "pg";

import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

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
app.use(
	session({
		secret: "my secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60, // One hour expiration (adjust as needed)
			httpOnly: true,
			secure: true // Consider if applicable
		},
	}),
);
const corsOptions = {
	origin: "https://localhost",

	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: [
		"Content-Type",
		"Authorization",
		"Origin",
		"X-Requested-With",
		"Accept",
		"Access-Control-Allow-Origin",
		"Access-Control-Allow-Headers",
		"Access-Control-Allow-Methods",
		"Access-Control-Allow-Credentials",
		"Access-Control-Max-Age",
		"Access-Control-Request-Headers",
		"Access-Control-Request-Method",
		"Accept-Encoding",
		"Accept-Language",
		"Connection",
		"Host",
		"Referer",
		"User-Agent",
		"X-Requested-With",
		"X-Forwarded-For",
		"X-Forwarded-Proto",
		"X-Forwarded-Port",
		"text/html",
		"application/json",
		"multipart/form-data",
		"application/x-www-form-urlencoded",
		"application/xml",
		"application/javascript",
		"application/octet-stream",

	],
};
app.use(cors(corsOptions));
// const __dirname = dirname(fileURLToPath(import.meta.url));
// res.sendFile(path.join(__dirname, "../app/dist/index.html"));

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(express.json());

app.use((req, res, next) => {
	if (req.method === "GET") {
		console.log(`Received GET request: ${req.url}`);
		console.log(`Received GET request: ${req.url}`);
		console.log("Headers:", req.headers);
		console.log("Query parameters:", req.query);
	}
	if (req.method === "POST") {
		console.log(`Received POST request: ${req.url}`);
		console.log(`Received POST request: ${req.url}`);
		console.log("Headers:", req.headers);
		console.log("Query parameters:", req.query);
	}
	next();
});

// const pool = new Client({
// 	host: "db:5432",
// 	database: "zsv_bewerber",
// 	user: "zsv_user",
// 	password: "zsv_password",
// 	port: 5432,
// 	/* PostgreSQL connection parameters */
// });

const transporter = nodemailer.createTransport({
	/* SMTP server parameters */
});

// const handleRegistration =
// 	(type: string) => async (req: CustomRequest, res: Response) => {
// 		const clientData = JSON.parse(req.body?.toString() || "{}");
// 		const sessionHash = clientData.hash;

// 		// Check if a session for this user already exists
// 		let query =
// 			"SELECT * FROM zsv_bewerber WHERE Anmeldenummer = $1 AND finalisiert = 0";
// 		const result = await pool.query(query, [sessionHash]);

// 		if (result.rows.length > 0) {
// 			// A session for this user already exists, so reactivate the session
// 			const url = `localhost:5173/anmeldungen/${type}/session?session=${sessionHash}`;
// 			await transporter.sendMail({
// 				from: "noreply@mywebsite.com",
// 				to: clientData.email,
// 				subject: "Setzen Sie Ihre Anmeldung fort",
// 				text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
// 			});
// 			res.status(200).json({ message: "OK" });
// 		} else {
// 			// No session for this user exists, so create a new session
// 			query =
// 				"INSERT INTO zsv_bewerber(Anmeldenummer, Vorname,Nachname,finalisiert, first_registering, expires, Kontaktmailadresse,FACHRICHTUNG1,Laendervorwahl1,Vorwahl1,Nummer1,Geburtsdatum,DSGVO ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
// 			await pool.query(query, [
// 				clientData.hash,
// 				clientData.vorname,
// 				clientData.nachname,
// 				clientData.finalisiert,
// 				new Date(),
// 				new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
// 				clientData.email,
// 				clientData.fachrichtung,
// 				clientData.laendervorwahl,
// 				clientData.vorwahl,
// 				clientData.nummer,
// 				clientData.geburtsdatum,
// 				clientData.dsgvo
// 			]);
// 			const url = `localhost:5173/anmeldungen/${type}/session?session_hash=${sessionHash}`;
// 			await transporter.sendMail({
// 				from: "noreply@mywebsite.com",
// 				to: clientData.email,
// 				subject: "Setzen Sie Ihre Anmeldung fort",
// 				text: `Drücken Sie bitte auf diesen Link um Ihre Anmeldung fortzusetzen: ${url}`,
// 			});

// 			res.status(200).json({ message: "OK" });
// 		}

// 		// Send the session link to the user's email
// 	};

// Serve static files from the "build" directory
// Parse JSON bodies

// app.post("/registration/tagesschule", handleRegistration("tagesschule"));
// app.post("/registration/abendschule", handleRegistration("abendschule"));
app.post(
	"/registration/abendschule",
	(req: Request, res: Response) => {
		// Access the body of the request with req.body
		console.log(req.body);

		// Respond with a success message
		res.status(200).json({ message: "Registration for Abendschule received" });
	},
);

app.post("/registration/tagesschule", (req: Request, res: Response) => {
	// Access the body of the request with req.body
	console.log(req.body);

	// Respond with a success message
	res.json({ message: "Registration for Tagesschule received" });
});
// All other requests not handled above will be directed to your React app
app.get("*", (req: Request, res: Response) => {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	res.sendFile(path.join(__dirname, "../app/dist/index.html"));
});

app.listen(410, () => console.log("Server running on port 410"));
// https
// 	.createServer(options, app)
// 	.listen(410, () => console.log("Server running on port 410"));
