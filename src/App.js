import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Home from './component/home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;


