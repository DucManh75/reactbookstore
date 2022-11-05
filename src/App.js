import Header from './component/header/Header';
import SignupForm from './component/signup/SignupForm';
import {Route, Switch} from "react-router-dom"






function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/signup" component={SignupForm}/>
    </Switch>
    </>
  );
}

export default App;
