
import './App.css';

// const gap=()=>{
//   return(
    
//   )
// }

function App() {
  return (
    <div className="App">
      <header>Signup Page</header>
      <div id="container">
        <h1>SignUp</h1>
        <form id="form">
          <div id="input1">
            <label htmlFor='firstname'>Firstname: </label>
            <input type='text' className='firstname' id="firstname" name='firstname' placeholder="First Name" required></input>
          </div>
          <div id="input1">
            <label htmlFor='lastname'>Lastname: </label>
            <input type='text' className='lastname' id="lastname" name='lastname' placeholder="Last Name" required></input>
          </div>

          <div id="input1">
            <label htmlFor='email'>Email: </label>
            <input type='email' className='email' id="email" name='email' placeholder="Email" required></input>
          </div>

          <div id="input1">
            <label htmlFor='password'>Password: </label>
            <input type='password' className='password' id="password" name='password' placeholder="Password" required></input>
          </div>
          
          <button type='submit' className="button">Submit</button>
        </form>
      </div>
      <footer>LInks</footer>
    </div>
  );
}

export default App;
