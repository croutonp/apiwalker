import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Display from './views/Display';
import Form from './components/FormComponent';
import Home from './views/Home';
import People from './components/PeopleComponent';
import Planets from './components/PlanetsComponent';


function App() {
  return (
    
    <div>
      <Form></Form>

      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/people/:id' element={<People/>}></Route>
      <Route path='/planets/:id' element={<Planets/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
