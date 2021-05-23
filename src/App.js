import './App.css';
import Home from './components/Home/home.jsx';
import NavBar from './components/NavBar/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='global'>
      <NavBar></NavBar> 
      <Home></Home> 
    </div>
  );
}

export default App;
