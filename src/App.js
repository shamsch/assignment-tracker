import { BrowserRouter, Route, Switch} from 'react-router-dom'

//styles 

import './App.css'

//pages 
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Assignment from './pages/assignment/Assignment'

//components 
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path={"/"}>
          <Home></Home>
        </Route>
        <Route path={"/assignments/:id"}>
          <Assignment/>
        </Route>
        <Route path={"/create"}>
          <Create></Create>
        </Route>
        <Route path={"/home"}>
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
