import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


// const gap=()=>{
//   return(
    
//   )
// }

function App() {
  const [formdata,setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange=(e)=>{
      const {name, value} = e.target;
      
      
      setFormdata((prevData)=>{return{...prevData, [name]: value}})
      console.log(formdata)
  }
  const sendData = async(e)=>{
    e.preventDefault()
    setFormdata({
      firstname: '',
    lastname: '',
    email: '',
    password: '',
    })

    try{
      const res = await axios.post('http://localhost:5005/user', formdata)
      console.log(res)
      console.log(formdata)
    
    }catch(err){
      console.log(err);
      console.log("move on")
      
    }
    
  }


  return (
    <div className="App">
      <header>Signup Page</header>
      <div id="container">
        <h1>SignUp</h1>
        <form id="form" onSubmit={sendData}>
          <div id="input1">
            <label htmlFor='firstname'>Firstname: </label>
            <input type='text' className='firstname' id="firstname" name='firstname' placeholder="First Name" onChange={(e)=>{handleChange(e)}}  required></input>
          </div>
          <div id="input1">
            <label htmlFor='lastname'>Lastname: </label>
            <input type='text' className='lastname' id="lastname" name='lastname' placeholder="Last Name" onChange={(e)=>{handleChange(e)}}  required></input>
          </div>

          <div id="input1">
            <label htmlFor='email'>Email: </label>
            <input type='email' className='email' id="email" name='email' placeholder="Email" onChange={(e)=>{handleChange(e)}}  required></input>
          </div>

          <div id="input1">
            <label htmlFor='password'>Password: </label>
            <input type='password' className='password' id="password" name='password' placeholder="Password" onChange={(e)=>{handleChange(e)}}  required></input>
          </div>
          
          <button type='submit' className="button" >Submit</button>
        </form>
      </div>
      <footer>LInks</footer>
    </div>
  );
}

export default App;
