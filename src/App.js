import './App.css'
import Header from './Header'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Login  */}
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>

          {/* Home  */}
          <Route exact path="/home" component={() => {
            <Home authorized={true} />
          }
          }>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

