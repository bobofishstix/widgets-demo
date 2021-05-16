import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home.jsx';
import NavBar from './components/NavBar/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// C:\Users\btyne\Documents\GitHub\widgets-demo\src\components\Home\home.jsx


function App() {
  return (
    <div className='global container-fluid'>
      <NavBar></NavBar> 
      <Home></Home> 
    </div>
  );
}

export default App;
