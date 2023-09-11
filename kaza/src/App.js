
import './App.css';
import{Route, Routes} from 'react-router-dom';
import{Home} from './pages/home/Home';
import{About} from './pages/about/About';
import{Error} from './pages/pageError/Error';
import{Logement} from './pages/houce/Logement';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/home' element={<Home/>}> </Route>
     <Route path='/about' element={<About/>}> </Route>
     <Route path='/notfind' element={<Error/>}> </Route>
     <Route path='/logement' element={<Logement/>}> </Route>
     </Routes>
    </div>
  );
}

export default App;
