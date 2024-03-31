import { createContext, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
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
