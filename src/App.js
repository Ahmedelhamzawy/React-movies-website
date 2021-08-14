// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Tv from './components/Tv/Tv';
import Movies from './components/Movies/Movies';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import {Switch,Route,Redirect} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import ProtectedRoutes from './components/protected Routes/ProtectedRoutes';

class App extends Component{
  render(){
  return (
     <>
    <Navbar/>
   
    <Switch>
    <ProtectedRoutes path='/home' component={Home}/>
    <ProtectedRoutes path='/movies' component={Movies} />
    <ProtectedRoutes path='/tv' component={Tv} />
    <Route path='/Register' component={Register} />
    <Route path='/Login' component={Login}/>
    <Redirect exact from='/' to='/Register' />
    <Route path='*' component={Register} />
    </Switch>
    
    
     </>
  );
}
}

export default App;
