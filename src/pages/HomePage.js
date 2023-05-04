import { Link } from 'react-router-dom';
      
      function Homepage() {
        return (
          <div>
            <h1>Taste The Miles</h1>
            <br/>
           
            <h3>Running is a great way to get in shape and stay in shape.  </h3>
            <Link to="/create">
        <button>Create Your Training Plan</button>
             </Link>
            </div>
           
         
        );
      }
      
      export default Homepage;
