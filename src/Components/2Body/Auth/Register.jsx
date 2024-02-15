import React, { useEffect, useState } from "react";
import axios from "../../API/axios";
import { Link, useNavigate } from "react-router-dom";

//regex valid
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*?/]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const Register = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [MPassword, setMPassword] = useState("");
  const [validMPassword, setValidMPassword] = useState(false);
  const [focusMPassword, setFocusMPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    const match = password === MPassword;
    setValidMPassword(match);
  }, [MPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check regex
    const V1 = USER_REGEX.test(username);
    const V2 = PWD_REGEX.test(password);
    const V3 = EMAIL_REGEX.test(email);

    if (!V1 || !V2 || !V3) {
      setErrorMsg("Invalid Entry");
    } else {
      try {
        await axios
          .post(
            "/register",
            {
              email,
              username,
              password,
            },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          )
          .then((response) => {
            if (response?.data?.message) {
              return setErrorMsg(`${response?.data?.message}`);
            } else {
              navigate("/login");
            }
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  /* useEffect(() => {
    console.log(email, username, password);
  }, [email, username, password]);*/

  return (
    <main className="d-flex justify-content-center w-100 h-100">
      <img
        className="w-100 h-100 position-absolute object-fit-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/c214d48d-ad5a-498c-af77-3976ff344e1b/FR-fr-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="back-gradient position-absolute w-100 h-100"></div>
      <section className="section-signup mx-auto text-white position-absolute px-5 py-5">
        <p className={errorMsg ? "err-msg" : "err-msg-hidden"}>{errorMsg}</p>
        <h2 className="mb-4 text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="w-100 d-flex flex-column">
          <input
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="email"
            placeholder="Email"
            autoComplete="email"
            aria-invalid={validEmail ? "true" : "false"}
          />

          <input
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setFocusUsername(true)}
            onBlur={() => setFocusUsername(false)}
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="name"
            placeholder="Username"
            aria-invalid={validUsername ? "true" : "false"}
            //autoComplete="email"
          />
          <p
            className={
              focusUsername && !validUsername
                ? "instructions"
                : "instructions-hidden"
            }
          >
            4 to 24 characters <br />
            Must begin with a letter ( Letter, numbers, underscores, hyphens
            allowed)
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => setFocusPassword(false)}
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            aria-invalid={validPassword ? "true" : "false"}
          />
          <p
            id="uidnote"
            className={
              focusPassword && !validPassword
                ? "instructions"
                : "instructions-hidden"
            }
          >
            8 to 24 characters <br />
            Must include uppercase and lowercase letters, a numbre and special
            character. <br />
          </p>
          <input
            onChange={(e) => setMPassword(e.target.value)}
            onFocus={() => setFocusMPassword(true)}
            onBlur={() => setFocusMPassword(false)}
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="password"
            placeholder="Confirm password"
            aria-invalid={validMPassword ? "true" : "false"}
          />
          <button className="btn-up rounded py-3 my-5 text-white ">
            Sign Up
          </button>
          <div className="d-flex justify-content-evenly align-items-center text-secondary">
            <span className="text-secondary">
              Already subscribed to Netflix ?
            </span>
            <Link to="/login" className="text-white">
              Sign In
            </Link>
          </div>
          <p className="py-4"> </p>
        </form>
      </section>
    </main>
  );
};
