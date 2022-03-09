import './App.css'
import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

import { BrowserRouter as Router,
         Routes,
         Route,
         Link,
         Navigate,
         Outlet,
         useParams,
         NavLink,
         useLocation,
         useNavigate
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

            {/* Login  */}
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Navigate replace to="/home" />} />

            {/* Home  */}
            <Route path="/home" element={<Home />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

