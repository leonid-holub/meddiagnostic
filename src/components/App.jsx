import { Route, Routes } from 'react-router-dom';

import './App.css'

import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';




function App() {



  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}> 
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
      
  )
}

export default App;
