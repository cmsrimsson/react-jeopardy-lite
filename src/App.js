  import './App.css';
  import Welcome from './component/welcome/Welcome';
  // import Clock from './component/clock/Clock';
  // import Contact from './component/contact/Contact';
  import Navigation from './component/nav/Nagivation';
  import NotFound from './component/404/PageNotFound';
  import { Route, Switch } from 'react-router-dom';
  import Jeopardy from './component/jeopardy/Jeopardy';


function App() {
  return(
      <div className="App">
          
        <Navigation />
        <Switch>
          <Route
            exact path="/" component={Jeopardy} />
          
          {/* <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/welcome" component={Welcome} /> */}
          <Route path="/welcome/:name" component={Welcome} />
          <Route> <NotFound /> </Route>
       </Switch>
       
       </div>
        );
      }
    
    export default App;