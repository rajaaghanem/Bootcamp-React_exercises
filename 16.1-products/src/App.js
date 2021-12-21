import React from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
