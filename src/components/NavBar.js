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
      <Link to="/create">Workout</Link>
      &nbsp; | &nbsp;
      <Link to="/saved">Training Plan</Link> 
      &nbsp; | &nbsp;
      <span> Welcome, {user.name}</span>
      {" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
