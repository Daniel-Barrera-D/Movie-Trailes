import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import NewCategory from './pages/NewCategory';
import Footer from './components/Footer/Footer';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/new-video' element={ <NewVideo /> }/>
        <Route path='/new-category' element={ <NewCategory/> } />
      </Routes>
      <Footer/>
    </Router>
    </DataProvider>
  );
}

export default App;
