
import { Link} from 'react-router-dom';
import './App.css';



function App() {
 
  return (
      <div className="container hotel_container">
      <h1>Hotels</h1>
      <h4>Welcome to our hotel chain, if you want to know more, please <Link to="/home">click here!</Link> </h4>
    </div>
  );
}

export default App;