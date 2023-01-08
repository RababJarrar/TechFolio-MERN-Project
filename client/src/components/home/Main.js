import { useState } from 'react';
import Chat from './Chat';
import Form from './Form';

function Main() {
  const [name, setName] = useState("");
  const handelName = (name) => {
    setName(name);
  }
  return (
    <div className="App">
      <h1 style={{width:"80%", margin:"1% auto", padding:"1%",backgroundColor:"#faf2e9"}}>TechFolio Chat!</h1>
      {
        name?
        <Chat name={ name }/>:
        <Form handelName={ handelName }/>
      }
      
      
    </div>
  );
}

export default Main;