import { Route, Switch } from 'react-router'
import Home from './components/home/Home';
import Login from './components/login'
import Register from './components/register'
import './styles/App.scss'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={Register} />
     </Switch>
    </div>
  );
}

export default App;
