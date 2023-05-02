import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
       <Link to="/home">Home</Link>
    &nbsp; | &nbsp;
      <Link to="/trainingplan">Training Plan</Link>
      &nbsp; | &nbsp;
      <Link to="/workout">Workouts</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
