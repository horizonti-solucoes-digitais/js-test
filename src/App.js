import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Details from './Pages/Details';

function App() {
  return (
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/home/:id" component={ Details } />
          <Route exact path="/" component={ Login } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
  );
}

export default App;
