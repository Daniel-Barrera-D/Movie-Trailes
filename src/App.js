import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import NuevaCategoria from './pages/NuevaCategoria';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/nuevo-video' element={ <NuevoVideo /> }/>
        <Route path='/nueva-categoria' element={ <NuevaCategoria/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
