import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Adminpanel from "./adminpanel";
 import Abendschule1 from './abendschule1.tsx'
//import './index.css'
import Abendschule2 from './abendschule2'
import Tagesschule1 from "./tagesschule1";
import Tagesschule2 from "./tagesschule2";
const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Abendschule1/>
			<Abendschule2/>
			<Tagesschule2 />
			<Adminpanel />
		</React.StrictMode>,
	);
} else {
	console.error("root element not found");
}
