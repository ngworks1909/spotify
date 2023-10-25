import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path='/'  Component={HomePage}></Route>
        <Route exact path='/login'  Component={Login}></Route>
        <Route exact path='/signup'  Component={Signup}></Route>
      </Routes>
     </Router>
     
    </>
  );
}

export default App;
