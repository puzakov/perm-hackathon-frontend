import React, { Component } from "react";
import { connect } from "react-redux";
import { getIsAuthorized } from "../../modules/Auth";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Map from "../Map";
import Login from "../Login";
import TripWizard from "../TripWizard";
import Child from "../Child";
import Admin, {
  // Login as AdminLogin,
  Check as AdminCheck,
  Map as AdminMap
} from "../Admin";

class App extends Component {
  render() {
    const { isAuthorized } = this.props;
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Redirect exact path="/" to="/map" />
          {!isAuthorized && <Route path="/login" component={Login} />}
          {isAuthorized && <Redirect path="/login" to="/map" />}
          <PrivateRoute path="/map" component={Map} />
          {/* <Route path="/admin/login" component={AdminLogin} /> */}
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute path="/admin/wizard" component={TripWizard} />
          <PrivateRoute path="/admin/check" component={AdminCheck} />
          <PrivateRoute path="/admin/map" component={AdminMap} />
          <Route exact path="/child" component={Child} />
          <Redirect to="/map" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => ({ isAuthorized: getIsAuthorized(state) }))(
  App
);
