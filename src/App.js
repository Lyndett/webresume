import React from 'react';
import { Contact, Home, Services } from './Screens';
import NavBar from './Components/NavBar';
import HowWeWork from './Screens/HowWeWork';
import Benefits from './Screens/Benefits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route desde react-router-dom
import ToDoList from './Projects/ToDoList';



function App() {
  return (
    <Router> {/* Envuelve todo el contenido de enrutamiento con el componente Router */}
      <div className="App">
        <NavBar />
        <Home />
        <Services />
        <HowWeWork />
        <Benefits />
        <Contact />
        <Routes> {/* Envuelve todas las rutas con el componente Routes */}
          <Route path="/todo-list" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
