import React from 'react';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
  
        <BrowserRouter>
                
          <Header />

                  <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About}  />
                    <Route path="/works" component={Works}  />
                    <Route path="/contact" component={Contact}  />
                  </Switch>
              
        </BrowserRouter>
      

  );
}

export default App;
