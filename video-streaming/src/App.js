import React from "react";
import "./App.css";
import {BrowserRouter, Router, Link} from 'react-router-dom';
import StreamCreate from "./components/Streams/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete";
import StreamEdit from "./components/Streams/StreamEdit";
import StreamList from "./components/Streams/StreamList";
import StreamShow from "./components/Streams/StreamShow";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
              <Router path="/" exact Component={StreamList}/>
              <Router path="/streams/new" exact Component={StreamCreate}/>
              <Router path="/streams/edit" exact Component={StreamEdit}/>
              <Router path="/streams/delete" exact Component={StreamDelete}/>
              <Router path="/streams/show" exact Component={StreamShow}/>
            </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
