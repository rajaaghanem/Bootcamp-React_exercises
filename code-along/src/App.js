import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList/VideoList";

class App extends React.Component {
  state = { videos: [] };

  handleTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({videos: res.data.items});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.handleTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
