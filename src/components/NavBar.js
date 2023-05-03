import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/training-plan">Training Plan</Link>
      {" "} | {" "}
      <Link to="/workout">Workouts</Link> 
      {" "} | {" "}
      <span>Welcome, {user.name}</span>
      {" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
