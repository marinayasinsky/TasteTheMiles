import { Link } from 'react-router-dom';
import RunnerImg from "../assets/zombie.jpeg";

      function Homepage() {
        return (
          <div>
            <h1>Taste The Miles</h1>
            <br/>
           
            <h3>Life is short, Taste the Miles! </h3>
            <h3>Run because zombies will eat the untrained ones first.   </h3>
            <Link to="/create">
        <button>Create Your Training Plan</button>
             </Link>
             <br/>
             <img src={RunnerImg} alt="Run" className="img-fluid custom-img-size" style={{ width: '50%', height: 'auto' }} />
            </div>
           
         
        );
      }
      
      export default Homepage;
