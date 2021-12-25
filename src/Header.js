import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

function Header(props){
    const user = props.user;
    const setLogin = props.setShowLogin;
    const setSignup = props.setShowSignup;
    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                logo
            </Navbar.Brand>
            <Navbar.Text>
                {
                    !user && <div>
                        <span onClick={()=>{
                            setLogin(true);
                            setSignup(false);
                        }}>
                            login
                        </span>
                        /
                        <span onClick={()=>{
                            setSignup(true);
                            setLogin(false);
                        }}>
                            signup    
                        </span>
                    </div>
                }
                {
                    user &&  <div> &nbsp; &nbsp; <span>logged in as {user.role}</span></div>
                }
            </Navbar.Text>
        </Navbar>
    </div>
}

export default Header;