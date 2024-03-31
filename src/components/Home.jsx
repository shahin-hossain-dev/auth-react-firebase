import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <div>
      <h2>This is Home of {name}</h2>
    </div>
  );
};

export default Home;
