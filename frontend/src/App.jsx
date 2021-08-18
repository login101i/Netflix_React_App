import "./app.scss";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>

          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

          {user && (
            <>
              <Route path="/movies">
                <Home type={"movies"} />
              </Route>
              <Route path="/series">
                <Home type={"series"} />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
