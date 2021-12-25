import React,{ useState } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div style={{textAlign:'center'}}>
      <Header user={user} setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      {
        showLogin && <Login setUser={setUser}  setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      }
      {
        showSignup && <Signup setUser={setUser}  setShowLogin={setShowLogin} setShowSignup={setShowSignup}/>
      }
      {
        !showLogin && !showSignup && user && <div ><span style={{border:'1px solid grey', padding: '5px', margin:'5px'}} onClick={()=>{setUser();}}>logout</span></div>
      }
      {
        !showLogin && !showSignup && !user && <div>welcome home</div>
      }
    </div>
  );
}

export default App;
