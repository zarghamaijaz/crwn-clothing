import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
