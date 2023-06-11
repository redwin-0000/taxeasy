import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home"
import DigitalBilling from "./components/pages/DigitalBilling"
import DigitalOffice from "./components/pages/DigitalOffice"
import GST from "./components/pages/GST"
import ItrFilling from "./components/pages/ItrFilling"
import Blog from "./components/pages/Blog"
import PartnerWithus from "./components/pages/PartnerWithus"

function App() {

  return (
     <>
      <Router>
        <Routes>
        <Route 
          path='/'
          element = {<Home />}/>
          <Route 
          path='Home'
          element = {<Home />}/>
          <Route 
          path='DigitalBilling'
          element = {<DigitalBilling />}/>
          <Route 
          path='DigitalOffice'
          element = {<DigitalOffice />}/>
           <Route 
          path='GST'
          element = {<GST />}/>
           <Route 
          path='ItrFilling'
          element = {<ItrFilling />}/>
           <Route 
          path='Blog'
          element = {<Blog />}/>
           <Route 
          path='PartnerWithus'
          element = {<PartnerWithus />}/>
          
        </Routes>
      </Router>
      </>
  );
}

export default App;