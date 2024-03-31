import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user to firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin user to firebase
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user observer auth state change
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "observing current user inside useEffect of AuthProvider",
        currentUser
      );
      setUser(currentUser);

      return () => {
        unSubscriber();
      };
    });
  }, []);

  // signout from firebase
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
/**
 * 1. Create context
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the AuthProvider component and use it in the middle of the provider
 *
 *
 */
