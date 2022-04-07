import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route><Sidebar></Sidebar></Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
