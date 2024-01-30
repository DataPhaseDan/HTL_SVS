import React from 'react'
import ReactDOM from 'react-dom/client'
// import Abendschule1 from './abendschule1.tsx'
//import './index.css'
//import Abendschule2 from './abendschule2'
import Tagesschule1 from './tagesschule1'
import Tagesschule2 from './tagesschule2'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Abendschule1/> */}
    {/* <Abendschule2/> */}
    <Tagesschule2 />
  </React.StrictMode>,
)
