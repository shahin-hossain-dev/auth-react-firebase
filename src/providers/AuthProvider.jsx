import { createContext } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Shahin Hossain",
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
