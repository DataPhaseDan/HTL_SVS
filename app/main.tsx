import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Adminpanel from "./adminpanel.tsx";
import Abendschule1 from "./abendschule1.tsx";
//import './index.css'
import Abendschule2 from "./abendschule2.tsx";
import Tagesschule1 from "./tagesschule1.tsx";
import Tagesschule2 from "./tagesschule2.tsx";
import LoginPage from "./login.tsx";
import NotFoundPage from "./notfound.tsx";
import ReactDOM from "react-dom";

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
	return (
		<Router>
			<Routes>
				<Route path="/anmeldungen/abendschule" element={<Abendschule1 />} />
				<Route path="/anmeldungen/abendschule/session" element={<Abendschule2 />} />
				<Route path="/anmeldungen/tagesschule" element={<Tagesschule1 />} />
				<Route path="/anmeldungen/tagesschule/session" element={<Tagesschule2 />} />
			
				<Route path="/adminpanel" element={<Adminpanel />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;


const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.render(<App />, rootElement);
} else {
	console.error('Could not find root element');
}