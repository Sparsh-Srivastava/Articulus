import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/privateRoute";

// Screens
import PrivateScreen from "./components/screens/privateScreen";
import LoginScreen from "./components/screens/loginScreen";
import RegisterScreen from "./components/screens/registerScreen";
import ForgotPasswordScreen from "./components/screens/forgotPassword"
import ResetPasswordScreen from "./components/screens/resetPassword"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/dashboard" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
