CREATE TABLE IF NOT EXISTS zsv_bewerber (
	ID SERIAL PRIMARY KEY,
	finalisiert SMALLINT DEFAULT 0,
	wird_geloescht_in INTEGER DEFAULT 90,
	DSGVO SMALLINT DEFAULT 0,
	SCHULJAHR INTEGER DEFAULT NULL,
	Anmelderunde SMALLINT DEFAULT 1,
	Anmeldungstyp VARCHAR(16) DEFAULT NULL,
	Kontaktmailadresse VARCHAR(64) DEFAULT NULL,
	Code VARCHAR(64) DEFAULT NULL,
	Phase SMALLINT DEFAULT NULL,
	Schuelerkennzahl BIGINT DEFAULT NULL,
	existiert SMALLINT DEFAULT 0,
	Anmeldenummer text DEFAULT NULL,
	Anrede VARCHAR(8) DEFAULT NULL,
	Titelvor VARCHAR(64) DEFAULT NULL,
	Titelnach VARCHAR(64) DEFAULT NULL,
	Nachname VARCHAR(32) DEFAULT NULL,
	Vorname VARCHAR(32) DEFAULT NULL,
	Vornamen VARCHAR(32) DEFAULT NULL,
	Geburtsdatum DATE DEFAULT NULL,
	Geschlecht CHAR(1) DEFAULT NULL,
	SozialversicherungAUT SMALLINT DEFAULT 1,
	SOZIALVERSICHERUNGSTRAEGER INTEGER DEFAULT NULL,
	Sozialversicherungsnummer VARCHAR(8) DEFAULT NULL,
	SozialversicherungsGebDat VARCHAR(8) DEFAULT NULL,
	BILDOKNummer VARCHAR(16) DEFAULT NULL,
	Geburtsort VARCHAR(32) DEFAULT NULL,
	GEBAURTSLAND INTEGER DEFAULT NULL,
	STAATSBUERGERSCHAFT INTEGER DEFAULT NULL,
	ERSTSPRACHE INTEGER DEFAULT NULL,
	ZWEITSPRACHE INTEGER DEFAULT NULL,
	RELIGIONSBEKENNTNIS INTEGER DEFAULT NULL,
	Strasse VARCHAR(64) DEFAULT NULL,
	Hausnummer VARCHAR(32) DEFAULT NULL,
	Postleitzahl VARCHAR(8) DEFAULT NULL,
	Wohnort VARCHAR(128) DEFAULT NULL,
	Wohnortkennzahl VARCHAR(8) DEFAULT NULL,
	Gemeindekennzahl VARCHAR(8) DEFAULT NULL,
	WOHNLAND INTEGER DEFAULT NULL,
	Laendervorwahl1 VARCHAR(4) DEFAULT NULL,
	Vorwahl1 VARCHAR(8) DEFAULT NULL,
	Nummer1 VARCHAR(32) DEFAULT NULL,
	Laendervorwahl2 VARCHAR(4) DEFAULT NULL,
	Vorwahl2 VARCHAR(8) DEFAULT NULL,
	Nummer2 VARCHAR(32) DEFAULT NULL,
	Mailadresse VARCHAR(64) DEFAULT NULL,
	Schulpflicht SMALLINT DEFAULT NULL,
	Asylwerber SMALLINT DEFAULT NULL,
	VERHAELTNISA INTEGER DEFAULT NULL,
	AnredeA VARCHAR(8) DEFAULT NULL,
	TitelvorA VARCHAR(64) DEFAULT NULL,
	TitelnachA VARCHAR(64) DEFAULT NULL,
	NachnameA VARCHAR(32) DEFAULT NULL,
	VornameA VARCHAR(32) DEFAULT NULL,
	StrasseA VARCHAR(64) DEFAULT NULL,
	HausnummerA VARCHAR(16) DEFAULT NULL,
	PostleitzahlA VARCHAR(8) DEFAULT NULL,
	WohnortA VARCHAR(32) DEFAULT NULL,
	WohnortkennzahlA VARCHAR(8) DEFAULT NULL,
	GemeindekennzahlA VARCHAR(8) DEFAULT NULL,
	WOHNLANDA INTEGER DEFAULT NULL,
	LaendervorwahlA1 VARCHAR(4) DEFAULT NULL,
	VorwahlA1 VARCHAR(8) DEFAULT NULL,
	NummerA1 VARCHAR(32) DEFAULT NULL,
	LaendervorwahlA2 VARCHAR(4) DEFAULT NULL,
	VorwahlA2 VARCHAR(8) DEFAULT NULL,
	NummerA2 VARCHAR(32) DEFAULT NULL,
	MailadresseA VARCHAR(64) DEFAULT NULL,
	VERHAELTNISB INTEGER DEFAULT NULL,
	AnredeB VARCHAR(8) DEFAULT NULL,
	TitelvorB VARCHAR(64) DEFAULT NULL,
	TitelnachB VARCHAR(64) DEFAULT NULL,
	NachnameB VARCHAR(32) DEFAULT NULL,
	VornameB VARCHAR(32) DEFAULT NULL,
	StrasseB VARCHAR(64) DEFAULT NULL,
	HausnummerB VARCHAR(16) DEFAULT NULL,
	PostleitzahlB VARCHAR(8) DEFAULT NULL,
	WohnortB VARCHAR(32) DEFAULT NULL,
	WohnortkennzahlB VARCHAR(8) DEFAULT NULL,
	GemeindekennzahlB VARCHAR(8) DEFAULT NULL,
	WOHNLANDB INTEGER DEFAULT NULL,
	LaendervorwahlB1 VARCHAR(4) DEFAULT NULL,
	VorwahlB1 VARCHAR(8) DEFAULT NULL,
	NummerB1 VARCHAR(32) DEFAULT NULL,
	LaendervorwahlB2 VARCHAR(4) DEFAULT NULL,
	VorwahlB2 VARCHAR(8) DEFAULT NULL,
	NummerB2 VARCHAR(32) DEFAULT NULL,
	MailadresseB VARCHAR(64) DEFAULT NULL,
	Geschwisteranzahl SMALLINT DEFAULT 0,
	Geschwisteranschule SMALLINT DEFAULT 0,
	Geschwisternamen VARCHAR(256) DEFAULT NULL,
	Erstwunsch SMALLINT DEFAULT 1,
	Erstwunschschule VARCHAR(64) DEFAULT NULL,
	Erstwunschschulkennzahl VARCHAR(6) DEFAULT NULL,
	Zweitwunschschule VARCHAR(64) DEFAULT NULL,
	Zweitwunschschulkennzahl VARCHAR(6) DEFAULT NULL,
	FACHRICHTUNG1 INTEGER DEFAULT NULL,
	FACHRICHTUNG2 INTEGER DEFAULT NULL,
	FACHRICHTUNG3 INTEGER DEFAULT NULL,
	Eignungstestdatum DATE DEFAULT NULL,
	Eignungstest INTEGER DEFAULT NULL,
	Eignungstestnote INTEGER DEFAULT NULL,
	LetzteSchulform VARCHAR(128) DEFAULT NULL,
	LetzteSchuleZeugnis SMALLINT DEFAULT 0,
	LetzteSchuleNation CHAR(1) DEFAULT NULL,
	LetzteSchuleTyp VARCHAR(128) DEFAULT NULL,
	LetzteSchule VARCHAR(256) DEFAULT NULL,
	LetzteSchulkennzahl VARCHAR(6) DEFAULT NULL,
	NotentypM VARCHAR(24) DEFAULT NULL,
	M SMALLINT DEFAULT NULL,
	NotentypD VARCHAR(24) DEFAULT NULL,
	D SMALLINT DEFAULT NULL,
	NotentypE VARCHAR(24) DEFAULT NULL,
	E SMALLINT DEFAULT NULL,
	PH SMALLINT DEFAULT NULL,
	CH SMALLINT DEFAULT NULL,
	GG SMALLINT DEFAULT NULL,
	GS SMALLINT DEFAULT NULL,
	reihen SMALLINT DEFAULT 0,
	Punkte NUMERIC(6, 2) DEFAULT NULL,
	ZUTEILUNG INTEGER DEFAULT NULL,
	Zuteilungsstatus SMALLINT DEFAULT NULL,
	KLASSE INTEGER DEFAULT NULL,
	Anmerkungen TEXT DEFAULT NULL,
	registriert TIMESTAMP DEFAULT NULL,
	angemeldet TIMESTAMP DEFAULT NULL,
	abgemeldet TIMESTAMP DEFAULT NULL,
	geloescht SMALLINT DEFAULT 0
);



-- CREATE TABLE IF NOT EXISTS zsv_bewerber (
-- 	`ID` int(11) NOT NULL AUTO_INCREMENT,
-- 	`DSGVO` tinyint(1) DEFAULT 0,
-- 	`SCHULJAHR` int(11) DEFAULT NULL,
-- 	`Anmelderunde` tinyint(1) DEFAULT 1,
-- 	`Anmeldungstyp` varchar(16) DEFAULT NULL,
-- 	`Kontaktmailadresse` varchar(64) DEFAULT NULL,
-- 	`Code` varchar(64) DEFAULT NULL,
-- 	`Phase` tinyint(1) DEFAULT NULL,
-- 	`Schuelerkennzahl` bigint(14) unsigned DEFAULT NULL,
-- 	`existiert` tinyint(1) DEFAULT 0,
-- 	`Anmeldenummer` bigint(20) DEFAULT NULL,
-- 	`Anrede` varchar(8) DEFAULT NULL,
-- 	`Titelvor` varchar(64) DEFAULT NULL,
-- 	`Titelnach` varchar(64) DEFAULT NULL,
-- 	`Nachname` varchar(32) DEFAULT NULL,
-- 	`Vorname` varchar(32) DEFAULT NULL,
-- 	`Vornamen` varchar(32) DEFAULT NULL,
-- 	`Geburtsdatum` date DEFAULT NULL,
-- 	`Geschlecht` char(1) DEFAULT NULL,
-- 	`SozialversicherungAUT` tinyint(1) DEFAULT 1,
-- 	`SOZIALVERSICHERUNGSTRAEGER` int(11) DEFAULT NULL,
-- 	`Sozialversicherungsnummer` varchar(8) DEFAULT NULL,
-- 	`SozialversicherungsGebDat` varchar(8) DEFAULT NULL,
-- 	`BILDOKNummer` varchar(16) DEFAULT NULL,
-- 	`Geburtsort` varchar(32) DEFAULT NULL,
-- 	`GEBURTSLAND` int(11) DEFAULT NULL,
-- 	`STAATSBUERGERSCHAFT` int(11) DEFAULT NULL,
-- 	`ERSTSPRACHE` int(11) DEFAULT NULL,
-- 	`ZWEITSPRACHE` int(11) DEFAULT NULL,
-- 	`RELIGIONSBEKENNTNIS` int(11) DEFAULT NULL,
-- 	`Strasse` varchar(64) DEFAULT NULL,
-- 	`Hausnummer` varchar(32) DEFAULT NULL,
-- 	`Postleitzahl` varchar(8) DEFAULT NULL,
-- 	`Wohnort` varchar(128) DEFAULT NULL,
-- 	`Wohnortkennzahl` varchar(8) DEFAULT NULL,
-- 	`Gemeindekennzahl` varchar(8) DEFAULT NULL,
-- 	`WOHNLAND` int(11) DEFAULT NULL,
-- 	`Laendervorwahl1` varchar(4) DEFAULT NULL,
-- 	`Vorwahl1` varchar(8) DEFAULT NULL,
-- 	`Nummer1` varchar(32) DEFAULT NULL,
-- 	`Laendervorwahl2` varchar(4) DEFAULT NULL,
-- 	`Vorwahl2` varchar(8) DEFAULT NULL,
-- 	`Nummer2` varchar(32) DEFAULT NULL,
-- 	`Mailadresse` varchar(64) DEFAULT NULL,
-- 	`Schulpflicht` tinyint(1) DEFAULT NULL,
-- 	`Asylwerber` tinyint(1) DEFAULT NULL,
-- 	`VERHAELTNISA` int(11) DEFAULT NULL,
-- 	`AnredeA` varchar(8) DEFAULT NULL,
-- 	`TitelvorA` varchar(64) DEFAULT NULL,
-- 	`TitelnachA` varchar(64) DEFAULT NULL,
-- 	`NachnameA` varchar(32) DEFAULT NULL,
-- 	`VornameA` varchar(32) DEFAULT NULL,
-- 	`StrasseA` varchar(64) DEFAULT NULL,
-- 	`HausnummerA` varchar(16) DEFAULT NULL,
-- 	`PostleitzahlA` varchar(8) DEFAULT NULL,
-- 	`WohnortA` varchar(32) DEFAULT NULL,
-- 	`WohnortkennzahlA` varchar(8) DEFAULT NULL,
-- 	`GemeindekennzahlA` varchar(8) DEFAULT NULL,
-- 	`WOHNLANDA` int(11) DEFAULT NULL,
-- 	`LaendervorwahlA1` varchar(4) DEFAULT NULL,
-- 	`VorwahlA1` varchar(8) DEFAULT NULL,
-- 	`NummerA1` varchar(32) DEFAULT NULL,
-- 	`LaendervorwahlA2` varchar(4) DEFAULT NULL,
-- 	`VorwahlA2` varchar(8) DEFAULT NULL,
-- 	`NummerA2` varchar(32) DEFAULT NULL,
-- 	`MailadresseA` varchar(64) DEFAULT NULL,
-- 	`VERHAELTNISB` int(11) DEFAULT NULL,
-- 	`AnredeB` varchar(8) DEFAULT NULL,
-- 	`TitelvorB` varchar(64) DEFAULT NULL,
-- 	`TitelnachB` varchar(64) DEFAULT NULL,
-- 	`NachnameB` varchar(32) DEFAULT NULL,
-- 	`VornameB` varchar(32) DEFAULT NULL,
-- 	`StrasseB` varchar(64) DEFAULT NULL,
-- 	`HausnummerB` varchar(16) DEFAULT NULL,
-- 	`PostleitzahlB` varchar(8) DEFAULT NULL,
-- 	`WohnortB` varchar(32) DEFAULT NULL,
-- 	`WohnortkennzahlB` varchar(8) DEFAULT NULL,
-- 	`GemeindekennzahlB` varchar(8) DEFAULT NULL,
-- 	`WOHNLANDB` int(11) DEFAULT NULL,
-- 	`LaendervorwahlB1` varchar(4) DEFAULT NULL,
-- 	`VorwahlB1` varchar(8) DEFAULT NULL,
-- 	`NummerB1` varchar(32) DEFAULT NULL,
-- 	`LaendervorwahlB2` varchar(4) DEFAULT NULL,
-- 	`VorwahlB2` varchar(8) DEFAULT NULL,
-- 	`NummerB2` varchar(32) DEFAULT NULL,
-- 	`MailadresseB` varchar(64) DEFAULT NULL,
-- 	`Geschwisteranzahl` tinyint(4) DEFAULT 0,
-- 	`Geschwisteranschule` tinyint(4) DEFAULT 0,
-- 	`Geschwisternamen` varchar(256) DEFAULT NULL,
-- 	`Erstwunsch` tinyint(1) DEFAULT 1,
-- 	`Erstwunschschule` varchar(64) DEFAULT NULL,
-- 	`Erstwunschschulkennzahl` varchar(6) DEFAULT NULL,
-- 	`Zweitwunschschule` varchar(64) DEFAULT NULL,
-- 	`Zweitwunschschulkennzahl` varchar(6) DEFAULT NULL,
-- 	`FACHRICHTUNG1` int(11) DEFAULT NULL,
-- 	`FACHRICHTUNG2` int(11) DEFAULT NULL,
-- 	`FACHRICHTUNG3` int(11) DEFAULT NULL,
-- 	`Eignungstestdatum` date DEFAULT NULL,
-- 	`Eignungstest` int(4) DEFAULT NULL,
-- 	`Eignungstestnote` int(4) DEFAULT NULL,
-- 	`LetzteSchulform` varchar(128) DEFAULT NULL,
-- 	`LetzteSchuleZeugnis` tinyint(1) DEFAULT 0,
-- 	`LetzteSchuleNation` char(1) DEFAULT NULL,
-- 	`LetzteSchuleTyp` varchar(128) DEFAULT NULL,
-- 	`LetzteSchule` varchar(256) DEFAULT NULL,
-- 	`LetzteSchulkennzahl` varchar(6) DEFAULT NULL,
-- 	`NotentypM` varchar(24) DEFAULT NULL,
-- 	`M` tinyint(4) DEFAULT NULL,
-- 	`NotentypD` varchar(24) DEFAULT NULL,
-- 	`D` tinyint(4) DEFAULT NULL,
-- 	`NotentypE` varchar(24) DEFAULT NULL,
-- 	`E` tinyint(4) DEFAULT NULL,
-- 	`PH` tinyint(4) DEFAULT NULL,
-- 	`CH` tinyint(4) DEFAULT NULL,
-- 	`GG` tinyint(4) DEFAULT NULL,
-- 	`GS` tinyint(4) DEFAULT NULL,
-- 	`reihen` tinyint(1) DEFAULT 0,
-- 	`Punkte` decimal(6, 2) DEFAULT NULL,
-- 	`ZUTEILUNG` int(11) DEFAULT NULL,
-- 	`Zuteilungsstatus` tinyint(4) DEFAULT NULL,
-- 	`KLASSE` int(11) DEFAULT NULL,
-- 	`Anmerkungen` text DEFAULT NULL,
-- 	`registriert` datetime DEFAULT NULL,
-- 	`angemeldet` datetime DEFAULT NULL,
-- 	`abgemeldet` datetime DEFAULT NULL,
-- 	`geloescht` tinyint(1) DEFAULT 0
-- );