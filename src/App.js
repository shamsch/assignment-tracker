import { BrowserRouter, Route, Switch} from 'react-router-dom'

//styles 

import './App.css'

//pages 
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Assignment from './pages/assignment/Assignment'

//components 
import NavBar from './components/Navbar'

//hooks
import { useMode } from './hooks/useMode'

function App() {
  const {mode} = useMode();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path={"/"}>
          <Home></Home>
        </Route>
        <Route path={"/assignments/:id"}>
          <Assignment/>
        </Route>
        <Route path={"/search"}>
          <Search></Search>
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
