import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Mentoring from './components/Mentoring';
//import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={"/home"} exact component={Home} /> */}
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/mentoring"} >
          <Mentoring />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
