
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import logo from  './FInalCryptologo.png'
import { Container } from 'react-dom';
import { TVChartContainer } from "./components/TVChartContainer";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
function App() {
  return (
  <>
    <Navbar bg="light" expand="lg" style={{padding:"20px"}}>
    <img src={logo} style={{height:"70px",width:"70px"}}></img>{"   "}
       <Navbar.Brand href="#home" style={{fontFamily:"Strasua",marginLeft:"10px"}}>Anteagle Exchange</Navbar.Brand>
      <Navbar.Toggle />


      <Navbar.Collapse className="justify-content-center"  >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Positions</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
    
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end"  >
        <Button color="secondary">Report a Problem</Button>
      
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/ios-glyphs/24/000000/twitter--v2.png"/></Nav.Link>
       <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png"/></Nav.Link>
      <Nav.Link onClick={()=>{
        document.body.classList.remove("white-content")
      }}><img src="https://img.icons8.com/material-outlined/24/000000/settings--v3.png"/></Nav.Link>
      </Navbar.Collapse>
    
  </Navbar>

<div className="row" style={{paddingRight:"20px"}}>

 <div class="tabs" style={{width:"20%"}}>

</div>

  <div className="col" style={{height:"100vh"}}>
  <TradingViewWidget
    symbol={'BTCUSDT'}
    theme={Themes.LIGHT}
    locale="en"
    width="100%"
    height="600vh"
  />
<div style={{height:"100rem"}}>

</div>
  </div>
 
</div>

  </  >
  );
}

export default App;
