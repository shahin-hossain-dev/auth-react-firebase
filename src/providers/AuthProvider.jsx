import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user to firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin user to firebase
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login in

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  // signout from firebase
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   user observer auth state change
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "observing current user inside useEffect of AuthProvider",
        currentUser
      );
      setUser(currentUser);
      setLoading(false);

      return () => {
        unSubscriber();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    signInWithGoogle,
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
