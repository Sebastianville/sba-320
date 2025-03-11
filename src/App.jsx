
import './App.css'
import MarvelDashboard from './pages/MarvelDashBoard'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'



//! This is what must be pass: two paramters in addition to the API key https://developer.marvel.com/documentation/authorization

//! the only HTTP Verb is currently accepts is GET requests: https://developer.marvel.com/documentation/generalinfo

function App() {


  return (
    <div>
      {/* <h1>App Router</h1> */}
      <NavBar />

     
      <Routes>
        <Route path="/" element={<MarvelDashboard />} />
      </Routes>
    </div>
  );
}

export default App
