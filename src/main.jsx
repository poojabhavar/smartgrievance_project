import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Registration} from './Components/Registration'
// import { Header } from './Components/header'
import {State} from './practicals/State.jsx'
import { FormExample } from './practicals/RealLifeState.jsx'

import { ParentComponent } from './practicals/ChildComponents.jsx'  
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    {/* <Registration/> */}
    {/* *<State/> */}
    {/* <FormExample/> */}
  
    <ParentComponent/>
   
    
  </React.StrictMode>
)
