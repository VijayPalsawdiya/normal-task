import { Component } from "react";
import React from 'react';
import RefCom from "./components/RefCom";
// import EState from "./components/EState";
// import Eprops from "./components/Eprops";
// import Ecounter from "./components/Ecounter";
// import Ebind from "./components/Ebind";
// import Pcomponent from "./components/Pcomponent";
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
// import HoverCounter from "./components/counter/HoverCounter";
// import ClickedCounter from "./components/counter/ClickedCounter";

class App extends Component{
  render(){
    return(
      <div className="App">
        <RefCom />
        {/* <ClickedCounter />
        <HoverCounter /> */}

        {/* <ErrorBoundary>
        <Hero heroname="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname="Joker"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname="Thor"/>
        </ErrorBoundary> */}
        
        {/* <Pcomponent /> */}
        {/* <EState /> */}
        {/* <Eprops name="Rahul" city="indore"/> */}
        {/* <Ecounter /> */}
        {/* <Ebind /> */}
      </div>
    )
  }
}

export default App;
