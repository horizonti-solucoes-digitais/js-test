import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/" component={ Login } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
  );
}

export default App;
