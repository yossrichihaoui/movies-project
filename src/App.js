
import './App.css';
import ExempleNav from './Componenet/Exepmple_navbar';
import Movielist from './Componenet/Movie-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import netflixlogo from './Componenet/Couleur-logo-Netflix.jpg';
import Counter from './Componenet/Counter';
function App() {
  return (
    <div>
      <ExempleNav  logo={netflixlogo} />
      <Counter/>
      <Movielist />
      
    </div>
  );
}

export default App;
