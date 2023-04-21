import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import store from '../store';
import { useSelector } from 'react-redux';


const Home = () => {
    const navigate = useNavigate();
    
    const displayName = useSelector((state) => state.userName);
    console.log(displayName);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/Signup");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <>
            <nav>
                <p>
                    Welcome Home {displayName}
                </p>

                <div>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Home;