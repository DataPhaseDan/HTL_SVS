import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



import Adminpanel from "./adminpanel";
import Abendschule1 from "./abendschule1";
//import './index.css'
import Abendschule2 from "./abendschule2";
import Tagesschule1 from "./tagesschule1";
import Tagesschule2 from "./tagesschule2";
// import ProtectedRoute from "./protectedroute";

import LoginPage from "./login";
import NotFoundPage from "./notfound";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { createRoot } from "react-dom/client";
// import {AuthProvider, useAuth} from "./authcontext";



// const rootElement = document.getElementById("root");

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Abendschule1 />
// 		<Abendschule2 />
// 		<Tagesschule1 />
// 		<Tagesschule2 />
// 		<Adminpanel />
// 	</React.StrictMode>
// 	, rootElement
// );

function App() {
	// const auth = useAuth();
	// const isAuthenticated = auth ? auth?.isAuthenticated : false;

	return (
			<Router>
				<Routes>
					<Route path="/anmeldungen/abendschule" element={<Abendschule1 />} />
					<Route path="/anmeldungen/abendschule/session" element={<Abendschule2 />} />
					<Route path="/anmeldungen/tagesschule" element={<Tagesschule1 />} />
					<Route path="/anmeldungen/tagesschule/session" element={<Tagesschule2 />} />

					<Route path="/login" element={<LoginPage />} />
					{/* <Route path="/auth/microsoft/callback" element={<Callback />} /> */}

					<Route path="/adminpanel" element={<Adminpanel />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>

	);
}

export default App;

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(<App />);
}


// if (rootElement) {
// 	ReactDOM.render(<App />, rootElement);
// } else {
// 	console.error('Could not find root element');
// }