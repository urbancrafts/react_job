import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookDetails from "./BookDetails";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/book/:name">
            <BookDetails />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
