import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameVar, setNameVar] = useState('');

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                user.displayName = nameVar;
                dispatch({ type: 'addName', payload: nameVar })
                console.log(user.email, user.displayName);
                navigate('/Login');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == "auth/email-already-in-use") {
                    alert("USER EXISTS , please login");
                }
                console.log(errorCode, "HELLO World", errorMessage);
            });
    }

    return (
        <main>
            <section>
                <div>
                    <div>
                        <h1>Example App</h1>
                        <form>
                            <div>
                                <label htmlFor="Name">
                                    Name
                                </label>
                                <input type="text" label="Name" value={nameVar} onChange={(e) => setNameVar(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="email-address">
                                    Email Address
                                </label>
                                <input type="email" label='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter Email" />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" label="Create password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter Password" />
                            </div>

                            <button type="submit" onClick={onSubmit}>Sign Up</button>
                        </form>

                        <p>
                            Already Have an account ? {' '}
                            <NavLink to="/login">Sign In</NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup;




// import { useSelector, useDispatch } from 'react-redux';
// import './App.css';

// function App() {
// 	const counter = useSelector((state) => state.counter);
// 	const dispatch = useDispatch()

// 	const increment = () => {
// 		dispatch({ type: 'INCREMENT' });
// 	}

// 	const decrement = () => {
// 		dispatch({ type: 'DECREMENT' });
// 	}

// 	return (
// 		<div>
// 			<h1>Counter</h1>
// 			<h2>{counter}</h2>
// 			<button onClick={increment}>Increment</button>
// 			<button onClick={decrement}>Decrement</button>
// 		</div>
// 	);
// }

// export default App;