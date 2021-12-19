import React from "react";
import "./App.css";
import axios from "axios";
import Avatar from "./components/Avatar/Avatar";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

class App extends React.Component {
  state = { avatars: [], avatarsCreate: [], searchRes: null };

  componentDidMount = () => {
    this.avatars();
  };

  avatars = async () => {
    const arrAvatars = [];
    for (let i = 0; i < 10; i++) {
      const response = await axios.get("https://randomuser.me/api/");
      arrAvatars.push(response.data.results);
    }
    this.setState({ avatars: arrAvatars });
    this.creatAvatars();
  };

  creatAvatars = () => {
    const AvatarEl = this.state.avatars.map((avatarEl) => {
      return avatarEl.map((el, i) => {
        console.log(el);
        return this.creatSingleAvatar(el, i);
      });
    });
    this.setState({ avatarsCreate: AvatarEl });
  };

  creatSingleAvatar = (data, idx) => {
    return (
      <Avatar
        keyEl={idx}
        srcImg={`${data.picture.medium}`}
        namefirst={`${data.name.first}`}
        nameLast={`${data.name.last}`}
        email={`${data.email}`}
        phone={`${data.phone} `}
      />
    );
  };

  handleInputSearch = (searchInput) => {
    let matchEl = [];
    for (let i = 0; i < this.state.avatars.length; i++) {
      if (this.state.avatars[i][0].name.first === searchInput) {
        matchEl = this.state.avatars[i][0];
      }
    }
    console.log(matchEl);
    this.setState({ searchRes: matchEl });
  };

  render() {
    console.log(this.state.searchRes);

    return (
      <>
        <Input saveInput={this.handleInputSearch} />
        {this.state.searchRes
          ? this.creatSingleAvatar(this.state.searchRes, 13)
          : null}
        <Button title="Filter" />
        <div className="cards-container">{this.state.avatarsCreate}</div>
      </>
    );
  }
}

export default App;
