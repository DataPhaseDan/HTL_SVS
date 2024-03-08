CREATE TABLE IF NOT EXISTS zsv_bewerber (
    finalisiert SMALLINT DEFAULT 0,
    -- wird_geloescht_in INTEGER DEFAULT 90,
    DSGVO SMALLINT DEFAULT 0,
    SCHULJAHR VARCHAR(16) DEFAULT NULL,
     Anmelderunde SMALLINT DEFAULT 1,
      Anmeldungstyp VARCHAR(16) DEFAULT NULL,
       Kontaktmailadresse VARCHAR(64) DEFAULT NULL, 
       Code VARCHAR(64) DEFAULT NULL,
        Phase SMALLINT DEFAULT NULL, 
        Schuelerkennzahl BIGINT DEFAULT NULL,
         existiert SMALLINT DEFAULT 0, 
         Anmeldenummer text DEFAULT NULL UNIQUE,
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
                    GEBURTSLAND INTEGER DEFAULT NULL,
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
                                                                             Punkte NUMERIC(6, 2) DEFAULT NULL
                                                                             , ZUTEILUNG INTEGER DEFAULT NULL,
                                                                              Zuteilungsstatus SMALLINT DEFAULT NULL,
                                                                               KLASSE INTEGER DEFAULT NULL,
                                                                                Anmerkungen TEXT DEFAULT NULL, 
                                                                                registriert TIMESTAMP DEFAULT NULL,
                                                                                 angemeldet TIMESTAMP DEFAULT NULL, 
                                                                                 abgemeldet TIMESTAMP DEFAULT NULL,
                                                                                  geloescht SMALLINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS zsv_fachrichtungen_tagesschule (
    ID INTEGER PRIMARY KEY, Name VARCHAR(128) NOT NULL
);

INSERT INTO
    zsv_fachrichtungen_tagesschule (ID, Name)
VALUES (1, 'Bautechnik (Hochbau)'),
    (2, 'Bautechnik (Tiefbau)'),
    (
        3, 'Biomedizin- und Gesundheitstechnik'
    ),
    (
        4, 'Elektronik & technische Informatik (Smart Devices / Coding)'
    ),
    (
        5, 'Elektrotechnik (Autonome Robotik)'
    ),
    (
        6, 'Elektrotechnik (E-Mobilität)'
    ),
    (
        11, 'Informationstechnologie (Künstliche Intelligenz & Data Science / Virtual Engineering)'
    ),
    (
        13, 'Maschinenbau (Anlagentechnik mit Kunststofftechnik und Produktdesign)'
    ),
    (
        14, 'Maschinenbau (Umwelt- und Verfahrenstechnik)'
    ),
    (
        15, 'Maschinenbau (Robotik und Smart Engineering)'
    );

CREATE TABLE IF NOT EXISTS zsv_fachrichtungen_abendschule (
    ID INTEGER PRIMARY KEY, Name VARCHAR(128) NOT NULL
);

INSERT INTO
    zsv_fachrichtungen_abendschule (ID, Name)
VALUES (
        20, 'Abend-HTL für Berufstätige (Bautechnik)'
    ),
    (
        21, 'Abend-HTL für Berufstätige (Elektrotechnik)'
    ),
    (
        22, 'Abend-HTL für Berufstätige (Informatik)'
    ),
    (
        23, 'Abend-HTL für Berufstätige (Maschinenbau)'
    );
-- Create the table
CREATE TABLE IF NOT EXISTS zsv_abteilungen (
    ID SERIAL PRIMARY KEY, Name VARCHAR(64) NOT NULL, Kuerzel VARCHAR(3) NOT NULL, x SMALLINT NOT NULL, y SMALLINT NOT NULL
);

-- Insert test data
INSERT INTO
    zsv_abteilungen (Name, Kuerzel, x, y)
VALUES ('Test Name 1', 'T01', 1, 1),
    ('Test Name 2', 'T02', 2, 2),
    ('Test Name 3', 'T03', 3, 3),
    ('Test Name 4', 'T04', 4, 4),
    ('Test Name 5', 'T05', 5, 5);

CREATE TABLE IF NOT EXISTS zsv_benutzerprotokoll (
    ID SERIAL PRIMARY KEY, BENUTZER INT NOT NULL, Zeitpunkt TIMESTAMP NOT NULL, Taetigkeit VARCHAR(16) NOT NULL
);

INSERT INTO
    zsv_benutzerprotokoll (
        BENUTZER, Zeitpunkt, Taetigkeit
    )
VALUES (
        1, '2022-01-01 00:00:00', 'Test 1'
    ),
    (
        2, '2022-01-02 00:00:00', 'Test 2'
    ),
    (
        3, '2022-01-03 00:00:00', 'Test 3'
    );

CREATE TABLE IF NOT EXISTS zsv_bewerberprotokoll (
    ID SERIAL PRIMARY KEY, Zeitpunkt TIMESTAMP NOT NULL DEFAULT current_timestamp, BEWERBER INT NOT NULL, Aktion VARCHAR(256) NOT NULL, Status SMALLINT NOT NULL
);

INSERT INTO
    zsv_bewerberprotokoll (
        Zeitpunkt, BEWERBER, Aktion, Status
    )
VALUES (
        current_timestamp, 1, 'Test Aktion 1', 1
    ),
    (
        current_timestamp, 2, 'Test Aktion 2', 0
    ),
    (
        current_timestamp, 3, 'Test Aktion 3', 1
    );

CREATE TABLE IF NOT EXISTS zsv_erziehungsberechtigte (
    ID SERIAL PRIMARY KEY, VERHAELTNIS INT NOT NULL, Schuelerkennzahl BIGINT DEFAULT NULL, Anrede VARCHAR(8) DEFAULT NULL, Titelvor VARCHAR(64) DEFAULT NULL, Titelnach VARCHAR(64) DEFAULT NULL, Nachname VARCHAR(64) DEFAULT NULL, Vorname VARCHAR(64) DEFAULT NULL, Vornamen VARCHAR(64) DEFAULT NULL, Geschlecht CHAR(1) DEFAULT NULL, Geburtsdatum DATE DEFAULT NULL, Sozialversicherungsnummer VARCHAR(16) DEFAULT NULL, SOZIALVERSICHERUNGSTRAEGER INT DEFAULT NULL, Strasse VARCHAR(64) DEFAULT NULL, Hausnummer VARCHAR(16) DEFAULT NULL, Postleitzahl VARCHAR(16) DEFAULT NULL, Wohnort VARCHAR(64) DEFAULT NULL, LAND INT DEFAULT NULL, Telefonnummer1 VARCHAR(32) DEFAULT NULL, Telefonnummer2 VARCHAR(32) DEFAULT NULL, Mailadresse VARCHAR(64) DEFAULT NULL
);

INSERT INTO
    zsv_erziehungsberechtigte (
        VERHAELTNIS, Schuelerkennzahl, Anrede, Titelvor, Titelnach, Nachname, Vorname, Vornamen, Geschlecht, Geburtsdatum, Sozialversicherungsnummer, SOZIALVERSICHERUNGSTRAEGER, Strasse, Hausnummer, Postleitzahl, Wohnort, LAND, Telefonnummer1, Telefonnummer2, Mailadresse
    )
VALUES (
        1, 12345678901234, 'Herr', 'Dr.', NULL, 'Mustermann', 'Max', 'Max Mustermann', 'M', '1980-01-01', '1234567890', 1, 'Musterstraße', '1', '12345', 'Musterstadt', 1, '0123456789', '0987654321', 'max.mustermann@example.com'
    );

INSERT INTO
    zsv_erziehungsberechtigte (
        VERHAELTNIS, Schuelerkennzahl, Anrede, Titelvor, Titelnach, Nachname, Vorname, Vornamen, Geschlecht, Geburtsdatum, Sozialversicherungsnummer, SOZIALVERSICHERUNGSTRAEGER, Strasse, Hausnummer, Postleitzahl, Wohnort, LAND, Telefonnummer1, Telefonnummer2, Mailadresse
    )
VALUES (
        2, 23456789012345, 'Frau', NULL, NULL, 'Musterfrau', 'Maria', 'Maria Musterfrau', 'F', '1981-02-02', '2345678901', 2, 'Musterweg', '2', '23456', 'Musterdorf', 2, '1234567890', '0987654321', 'maria.musterfrau@example.com'
    ),
    (
        3, 34567890123456, 'Herr', 'Prof.', 'Dr.', 'Mustermann', 'Martin', 'Martin Mustermann', 'M', '1982-03-03', '3456789012', 3, 'Musterallee', '3', '34567', 'Musterstadt', 3, '2345678901', '1098765432', 'martin.mustermann@example.com'
    ),
    (
        4, 45678901234567, 'Frau', 'Dr.', 'Ing.', 'Musterdame', 'Martina', 'Martina Musterdame', 'F', '1983-04-04', '4567890123', 4, 'Musterstraße', '4', '45678', 'Musterdorf', 4, '3456789012', '2109876543', 'martina.musterdame@example.com'
    );

CREATE TABLE IF NOT EXISTS zsv_klassen (
    ID SERIAL PRIMARY KEY, ABTEILUNG INT DEFAULT NULL, Kuerzel VARCHAR(8) NOT NULL, Alias VARCHAR(8) DEFAULT NULL, AliasWU VARCHAR(8) DEFAULT NULL, AliasSK VARCHAR(8) DEFAULT NULL, AliasAD VARCHAR(8) DEFAULT NULL, AliasEP VARCHAR(8) DEFAULT NULL, Fachrichtung INT DEFAULT NULL, Raum VARCHAR(8) DEFAULT NULL, NachWSID INT DEFAULT NULL, NachSSID INT DEFAULT NULL, WS SMALLINT NOT NULL DEFAULT 1, SS SMALLINT NOT NULL DEFAULT 1, Ethik SMALLINT NOT NULL DEFAULT 0, DiplDB SMALLINT NOT NULL, LEHRER1 INT DEFAULT NULL, LEHRER2 INT DEFAULT NULL, x SMALLINT NOT NULL, y SMALLINT NOT NULL, aktiv SMALLINT NOT NULL DEFAULT 0
);

INSERT INTO
    zsv_klassen (
        Kuerzel, WS, SS, Ethik, DiplDB, x, y, aktiv
    )
VALUES ('Test 1', 1, 1, 0, 1, 1, 1, 0),
    ('Test 2', 1, 1, 0, 1, 2, 2, 0),
    ('Test 3', 1, 1, 0, 1, 3, 3, 0);

CREATE TABLE IF NOT EXISTS zsv_laender (
    ID SERIAL PRIMARY KEY, Name VARCHAR(64) NOT NULL, Alias VARCHAR(64) NOT NULL, Kuerzel2 CHAR(2) NOT NULL, Kuerzel3 CHAR(3) NOT NULL, AliasSK VARCHAR(3) DEFAULT NULL
);

INSERT INTO
    zsv_laender (
        Name, Alias, Kuerzel2, Kuerzel3, AliasSK
    )
VALUES (
        'Afghanistan', 'Afghanistan', 'AF', 'AFG', 'AFG'
    ),
    (
        'Ägypten', 'Egypt', 'EG', 'EGY', 'EGY'
    ),
    (
        'Albanien', 'Albania', 'AL', 'ALB', 'ALB'
    ),
    (
        'Arabische Republik Syrien', 'Syria', 'SY', 'SYR', 'SYR'
    ),
    (
        'Armenien', 'Armenia', 'AM', 'ARM', 'ARM'
    ),
    (
        'Bangladesch', 'Bangladesh', 'BD', 'BGD', 'BGD'
    ),
    (
        'Belarus (Weißrussland)', 'Belarus', 'BY', 'BLR', 'BLR'
    ),
    (
        'Bolivien', 'Bolivia', 'BO', 'BOL', 'BOL'
    ),
    (
        'Bosnien-Herzegowina', 'Bosnia and Herzegovina', 'BA', 'BIH', 'BIH'
    ),
    (
        'Brasilien', 'Brazil', 'BR', 'BRA', 'BRA'
    ),
    (
        'Bulgarien', 'Bulgaria', 'BG', 'BGR', 'BGR'
    ),
    (
        'China (Volksrepublik)', 'China', 'CN', 'CHN', 'CHN'
    ),
    (
        'Deutschland', 'Germany', 'DE', 'DEU', 'DEU'
    ),
    (
        'Dominikanische Republik', 'Dominican Republic', 'DO', 'DOM', 'DOM'
    ),
    (
        'England', 'England', 'EN', 'ENG', 'ENG'
    ),
    (
        'Estland', 'Estonia', 'EE', 'EST', 'EST'
    ),
    (
        'Finnland', 'Finland', 'FI', 'FIN', 'FIN'
    ),
    (
        'Frankreich', 'France', 'FR', 'FRA', 'FRA'
    ),
    (
        'Georgien', 'Georgia', 'GE', 'GEO', 'GEO'
    ),
    (
        'Griechenland', 'Greece', 'GR', 'GRC', 'GRC'
    ),
    (
        'Guatemala', 'Guatemala', 'GT', 'GTM', 'GTM'
    ),
    (
        'Indien', 'India', 'IN', 'IND', 'IND'
    ),
    (
        'Irak', 'Iraq', 'IQ', 'IRQ', 'IRQ'
    ),
    (
        'Irland', 'Ireland', 'IE', 'IRL', 'IRL'
    ),
    (
        'Islamische Republik Iran', 'Iran', 'IR', 'IRN', 'IRN'
    ),
    (
        'Italien', 'Italy', 'IT', 'ITA', 'ITA'
    ),
    (
        'Kamerun', 'Cameroon', 'CM', 'CMR', 'CMR'
    ),
    (
        'Kanada', 'Canada', 'CA', 'CAN', 'CAN'
    ),
    (
        'Kasachstan', 'Kazakhstan', 'KZ', 'KAZ', 'KAZ'
    ),
    (
        'Kenia', 'Kenya', 'KE', 'KEN', 'KEN'
    ),
    (
        'Kirgisien', 'Kyrgyzstan', 'KG', 'KGZ', 'KGZ'
    ),
    (
        'Kirgisistan', 'Kyrgyzstan', 'KG', 'KGZ', 'KGZ'
    ),
    (
        'Kosovo', 'Kosovo', 'XK', 'XKX', 'XKX'
    ),
    (
        'Kroatien', 'Croatia', 'HR', 'HRV', 'HRV'
    ),
    (
        'Libanon', 'Lebanon', 'LB', 'LBN', 'LBN'
    ),
    (
        'Marokko', 'Morocco', 'MA', 'MAR', 'MAR'
    ),
    (
        'Montenegro', 'Montenegro', 'ME', 'MNE', 'MNE'
    ),
    (
        'Nepal', 'Nepal', 'NP', 'NPL', 'NPL'
    ),
    (
        'Niederlande', 'Netherlands', 'NL', 'NLD', 'NLD'
    ),
    (
        'Niger', 'Niger', 'NE', 'NER', 'NER'
    ),
    (
        'Nigeria', 'Nigeria', 'NG', 'NGA', 'NGA'
    ),
    (
        'Nordmazedonien', 'North Macedonia', 'MK', 'MKD', 'MKD'
    ),
    (
        'Österreich', 'Austria', 'AT', 'AUT', 'AUT'
    ),
    (
        'Pakistan', 'Pakistan', 'PK', 'PAK', 'PAK'
    ),
    (
        'Palästina', 'Palestine', 'PS', 'PSE', 'PSE'
    ),
    (
        'Peru', 'Peru', 'PE', 'PER', 'PER'
    ),
    (
        'Philippinen', 'Philippines', 'PH', 'PHL', 'PHL'
    ),
    (
        'Polen', 'Poland', 'PL', 'POL', 'POL'
    ),
    (
        'Portugal', 'Portugal', 'PT', 'PRT', 'PRT'
    ),
    (
        'Republik China (Taiwan)', 'Taiwan', 'TW', 'TWN', 'TWN'
    ),
    (
        'Rumänien', 'Romania', 'RO', 'ROU', 'ROU'
    ),
    (
        'Russische Föderation', 'Russia', 'RU', 'RUS', 'RUS'
    ),
    (
        'Schweden', 'Sweden', 'SE', 'SWE', 'SWE'
    ),
    (
        'Schweiz', 'Switzerland', 'CH', 'CHE', 'CHE'
    ),
    (
        'Serbien und Montenegro', 'Serbia and Montenegro', 'CS', 'SCG', 'SCG'
    ),
    (
        'Slowakei', 'Slovakia', 'SK', 'SVK', 'SVK'
    ),
    (
        'Slowenien', 'Slovenia', 'SI', 'SVN', 'SVN'
    ),
    (
        'Somalia', 'Somalia', 'SO', 'SOM', 'SOM'
    ),
    (
        'Spanien', 'Spain', 'ES', 'ESP', 'ESP'
    ),
    (
        'Staatenlos', 'Stateless', 'XX', 'XXX', 'XXX'
    ),
    (
        'Staatsbürgerschaft ungeklärt', 'Citizenship unclear', 'XX', 'XXX', 'XXX'
    ),
    (
        'Sudan', 'Sudan', 'SD', 'SDN', 'SDN'
    ),
    (
        'Südkorea', 'South Korea', 'KR', 'KOR', 'KOR'
    ),
    (
        'Tadschikistan', 'Tajikistan', 'TJ', 'TJK', 'TJK'
    ),
    (
        'Thailand', 'Thailand', 'TH', 'THA', 'THA'
    ),
    (
        'Tschechien', 'Czech Republic', 'CZ', 'CZE', 'CZE'
    ),
    (
        'Tunesien', 'Tunisia', 'TN', 'TUN', 'TUN'
    ),
    (
        'Türkei', 'Turkey', 'TR', 'TUR', 'TUR'
    ),
    (
        'Uganda', 'Uganda', 'UG', 'UGA', 'UGA'
    ),
    (
        'Ukraine', 'Ukraine', 'UA', 'UKR', 'UKR'
    ),
    (
        'Ungarn', 'Hungary', 'HU', 'HUN', 'HUN'
    ),
    (
        'Usbekistan', 'Uzbekistan', 'UZ', 'UZB', 'UZB'
    ),
    (
        'Vereinigte Staaten von Amerika', 'United States of America', 'US', 'USA', 'USA'
    ),
    (
        'Vietnam', 'Vietnam', 'VN', 'VNM', 'VNM'
    ),
    (
        'Westsahara', 'Western Sahara', 'EH', 'ESH', 'ESH'
    );

CREATE TABLE IF NOT EXISTS zsv_schulen (
    ID SERIAL PRIMARY KEY, Bezeichnung VARCHAR(256) NOT NULL, Alias VARCHAR(128) DEFAULT NULL, Schultyp VARCHAR(16) DEFAULT NULL, Schulkennzahl VARCHAR(6) DEFAULT NULL, Strasse VARCHAR(64) DEFAULT NULL, Hausnummer VARCHAR(32) DEFAULT NULL, Postleitzahl VARCHAR(8) DEFAULT NULL, Ort VARCHAR(64) DEFAULT NULL, LAND INT DEFAULT NULL, Longitude VARCHAR(16) DEFAULT NULL, Lattitude VARCHAR(16) DEFAULT NULL
);

INSERT INTO
    zsv_schulen (
        Bezeichnung, Alias, Schultyp, Schulkennzahl, Strasse, Hausnummer, Postleitzahl, Ort, LAND, Longitude, Lattitude
    )
VALUES (
        'Schule 1', 'Alias 1', 'Type 1', '123456', 'Street 1', '1', '12345678', 'City 1', 1, '12.3456', '12.3456'
    ),
    (
        'Schule 2', 'Alias 2', 'Type 2', '234567', 'Street 2', '2', '23456789', 'City 2', 2, '23.4567', '23.4567'
    ),
    (
        'Schule 3', 'Alias 3', 'Type 3', '345678', 'Street 3', '3', '34567890', 'City 3', 3, '34.5678', '34.5678'
    ),
    (
        'Schule 4', 'Alias 4', 'Type 4', '456789', 'Street 4', '4', '45678901', 'City 4', 4, '45.6789', '45.6789'
    ),
    (
        'Schule 5', 'Alias 5', 'Type 5', '567890', 'Street 5', '5', '56789012', 'City 5', 5, '56.7890', '56.7890'
    );

CREATE TABLE IF NOT EXISTS zsv_schuljahre (
    ID SERIAL PRIMARY KEY, Bezeichnung VARCHAR(16) NOT NULL, WS BOOLEAN NOT NULL, SS BOOLEAN NOT NULL, Anmeldungsbeginn DATE DEFAULT NULL, Anmeldungsdauer INT DEFAULT NULL, Beginndatum DATE DEFAULT NULL, Enddatum DATE DEFAULT NULL
);

INSERT INTO
    zsv_schuljahre (
        Bezeichnung, WS, SS, Anmeldungsbeginn, Anmeldungsdauer, Beginndatum, Enddatum
    )
VALUES (
        '2022/23', TRUE, FALSE, '2022-09-01', 30, '2022-10-01', '2023-07-31'
    ),
    (
        '2023/24', TRUE, FALSE, '2023-09-01', 30, '2023-10-01', '2024-07-31'
    ),
    (
        '2024/25', TRUE, FALSE, '2024-09-01', 30, '2024-10-01', '2025-07-31'
    ),
    (
        '2025/26', TRUE, FALSE, '2025-09-01', 30, '2025-10-01', '2026-07-31'
    ),
    (
        '2026/27', TRUE, FALSE, '2026-09-01', 30, '2026-10-01', '2027-07-31'
    );

CREATE TABLE IF NOT EXISTS zsv_sozialversicherungstraeger (
    ID SERIAL PRIMARY KEY, Name VARCHAR(128) NOT NULL, Kuerzel VARCHAR(16) NOT NULL
);

INSERT INTO
    zsv_sozialversicherungstraeger (Name, Kuerzel)
VALUES ('Name 1', 'K1'),
    ('Name 2', 'K2'),
    ('Name 3', 'K3'),
    ('Name 4', 'K4'),
    ('Name 5', 'K5');

CREATE TABLE IF NOT EXISTS zsv_sprachen (
    ID SERIAL PRIMARY KEY, Name VARCHAR(64) NOT NULL, Kuerzel2 CHAR(2) DEFAULT NULL, AliasSK VARCHAR(2) DEFAULT NULL
);

INSERT INTO
    zsv_sprachen (Name, Kuerzel2, AliasSK)
VALUES ('English', 'EN', 'EN'),
    ('German', 'DE', 'DE'),
    ('French', 'FR', 'FR'),
    ('Spanish', 'ES', 'ES'),
    ('Italian', 'IT', 'IT');

CREATE TABLE IF NOT EXISTS zsv_titel (
    ID SERIAL PRIMARY KEY, Kuerzel VARCHAR(64) NOT NULL, Name VARCHAR(256) NOT NULL
);

INSERT INTO
    zsv_titel (Kuerzel, Name)
VALUES ('DR', 'Doktor'),
    ('PROF', 'Professor'),
    ('DIPL', 'Diplom-Ingenieur'),
    ('MAG', 'Magister'),
    ('Ing', 'Ingenieur'),
    ('MSC', 'Master of Science');

CREATE TABLE IF NOT EXISTS zsv_verhaeltnisse (
    ID SERIAL PRIMARY KEY, Name VARCHAR(48) NOT NULL
);

INSERT INTO
    zsv_verhaeltnisse (Name)
VALUES ('Mutter'),
    ('Vater'),
    ('Onkel'),
    ('Großeltern'),
    ('Tante'),
    ('Cousin'),
    ('Cousine'),
    ('Schwester'),
    ('Bruder');

CREATE TABLE IF NOT EXISTS zsv_geschlecht (
    ID SERIAL PRIMARY KEY, Name VARCHAR(48) NOT NULL
);

CREATE TABLE IF NOT EXISTS zsv_anrede (
    ID SERIAL PRIMARY KEY, Name VARCHAR(48) NOT NULL
);

INSERT INTO zsv_geschlecht (Name) VALUES ('m'), ('w');

INSERT INTO zsv_anrede (Name) VALUES ('Herr'), ('Frau'), ('Divers');

CREATE TABLE IF NOT EXISTS zsv_religionsbekenntnisse (
    ID SERIAL PRIMARY KEY, Name VARCHAR(64) NOT NULL, Kuerzel VARCHAR(16) DEFAULT NULL, zaehlenals VARCHAR(32) NOT NULL, abmeldbar BOOLEAN DEFAULT NULL, Unterrichtsnummer INT DEFAULT NULL, Unterrichtsbezeichnung VARCHAR(64) DEFAULT NULL, AliasEinschreiber VARCHAR(64) DEFAULT NULL, AliasSK VARCHAR(64) DEFAULT NULL, AliasHTL VARCHAR(64) DEFAULT NULL
);

INSERT INTO
    zsv_religionsbekenntnisse (
        Name, Kuerzel, zaehlenals, abmeldbar, Unterrichtsnummer, Unterrichtsbezeichnung, AliasEinschreiber, AliasSK, AliasHTL
    )
VALUES (
        'Name 1', 'K1', 'Count as 1', TRUE, 1, 'Lesson 1', 'Alias 1', 'SK1', 'HTL1'
    ),
    (
        'Name 2', 'K2', 'Count as 2', FALSE, 2, 'Lesson 2', 'Alias 2', 'SK2', 'HTL2'
    ),
    (
        'Name 3', 'K3', 'Count as 3', TRUE, 3, 'Lesson 3', 'Alias 3', 'SK3', 'HTL3'
    ),
    (
        'Name 4', 'K4', 'Count as 4', FALSE, 4, 'Lesson 4', 'Alias 4', 'SK4', 'HTL4'
    ),
    (
        'Name 5', 'K5', 'Count as 5', TRUE, 5, 'Lesson 5', 'Alias 5', 'SK5', 'HTL5'
    );

CREATE TABLE IF NOT EXISTS zsv_staatsbuergerschaften (
    ID SERIAL PRIMARY KEY, Name VARCHAR(64) NOT NULL, Alias VARCHAR(64) DEFAULT NULL, Kuerzel2 CHAR(2) NOT NULL, Kuerzel3 CHAR(3) NOT NULL, AliasSK VARCHAR(64) DEFAULT NULL
);

INSERT INTO
    zsv_staatsbuergerschaften (
        Name, Alias, Kuerzel2, Kuerzel3, AliasSK
    )
VALUES (
        'Name 1', 'Alias 1', 'N1', 'NA1', 'SK1'
    ),
    (
        'Name 2', 'Alias 2', 'N2', 'NA2', 'SK2'
    ),
    (
        'Name 3', 'Alias 3', 'N3', 'NA3', 'SK3'
    ),
    (
        'Name 4', 'Alias 4', 'N4', 'NA4', 'SK4'
    ),
    (
        'Name 5', 'Alias 5', 'N5', 'NA5', 'SK5'
    );