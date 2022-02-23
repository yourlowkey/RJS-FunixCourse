import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';


ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    
  </React.StrictMode>,
  document.getElementById('root')
);
// Configuring React
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/">Ristorane Confusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
} 


export default App;
