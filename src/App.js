import Header from './component/header/Header';
import SignupForm from './component/signup/SignupForm';
import {Route, Switch} from "react-router-dom"
import Login from './component/login/Login';
import Home from './component/home/Home';







function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/signup" component={SignupForm}/>
    </Switch>
    <Switch>
      <Route exact path="/login" component={Login}/>
    </Switch>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
