import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Signup(props) {
  const [role, setRole] = useState("user");
  // const []
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  const signupFunction = async () => {
    if (email) {
      if (pattern.test(email)) {
        if (password) {
          if (confirmPassword === password) {
            console.log("Sign up ");
            const user = {
              role: role,
              email: email,
              password: password,
            };
            props.setUser(user);
            props.setShowLogin(false);
            props.setShowSignup(false);
          }else{
              console.log("confirm password does not match");
              setConfirmPassword("");
          }
        } else {
          console.log("password not enterd");
        }
      } else {
        console.log("email is not valid");
      }
    } else {
      console.log("enter email");
    }
  };
  const options = [
    { value: "user", label: "user" },
    { value: "moderator", label: "moderator" },
    { value: "admin", label: "admin" },
  ];

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      Signup Page
      <Form
        style={{
          width: "50%",
          minWidth: "350px",
          border: "1px solid grey",
          maxWidth: "600px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Your Role</Form.Label>
          <br />
          <select
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>
        <span
          onClick={signupFunction}
          style={{ border: "1px solid grey", padding: "5px" }}
        >
          Signup
        </span>
      </Form>
    </div>
  );
}

export default Signup;
