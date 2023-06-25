import { Route, Routes } from 'react-router-dom';

import './App.css'

import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Catalogue from '../pages/Catalogue/Catalogue';
import Biotime from '../pages/Biotime/Biotime';
import MedicalSystem from '../pages/MedicalSystem/MedicalSystem';
import Rollmed from '../pages/Rollmed/Rollmed';
import Urit from '../pages/Urit/Urit';




function App() {



  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}> 
        <Route index element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/biotime' element={<Biotime/>}/>
        <Route path='/medicalsystem' element={<MedicalSystem/>}/>
        <Route path='/rollmed' element={<Rollmed/>}/>
        <Route path='/urit' element={<Urit/>}/>
      </Route>
    </Routes>
      
  )
}

export default App;
