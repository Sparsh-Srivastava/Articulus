import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/privateRoute";

// Screens
import PrivateScreen from "./components/screens/privateScreen";
import LoginScreen from "./components/screens/loginScreen";
import RegisterScreen from "./components/screens/registerScreen";
import ForgotPasswordScreen from "./components/screens/forgotPassword"
import ResetPasswordScreen from "./components/screens/resetPassword"
import LandingScreen from "./components/screens/landingScreen"
import all from "./components/screens/articles"
import Create from "./components/screens/create"
import UserArticles from "./components/screens/userArticles"
import Profile from "./components/screens/profile"
import Update from "./components/screens/update"
import View from "./components/screens/viewArticles"
import Social from "./components/screens/followers"
import NotFoundPage from './components/screens/404';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/dashboard/:id" component={PrivateScreen} />
          <PrivateRoute exact path="/create/:id" component={Create} />
          <PrivateRoute exact path="/myarticles/:id" component={UserArticles} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/myarticles/item/:id" component={Update} />
          <Route exact path="/item/:id" component={View} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/" component={LandingScreen} />
          <PrivateRoute exact path="/all" component={all}/>
          <PrivateRoute exact path="/followers/:id" component={Social}/>
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
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
