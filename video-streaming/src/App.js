import React from "react";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from "./components/Streams/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete";
import StreamEdit from "./components/Streams/StreamEdit";
import StreamList from "./components/Streams/StreamList";
import StreamShow from "./components/Streams/StreamShow";
import Header from "./components/Streams/Header/Header";

const App =()=>{

    return (
      <div className="ui container">
       
        <BrowserRouter>
            <div>
              <Header/>
              <Route path="/" exact component={StreamList}/>
              <Route path="/streams/new" exact component={StreamCreate}/>
              <Route path="/streams/edit" exact component={StreamEdit}/>
              <Route path="/streams/delete" exact component={StreamDelete}/>
              <Route path="/streams/show" exact component={StreamShow}/>
            </div>
        </BrowserRouter>

      </div>
    );
  }

export default App;
