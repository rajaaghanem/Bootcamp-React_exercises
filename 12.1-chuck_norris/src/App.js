import "./App.css";
import React from "react";
import axios from "axios";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends React.Component {
  state = { joke: "", Categories: [], categoryJok: "", currCategory: "", searchJokes:[] };

  getRandomJoke = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    const theJoke = response.data.value;
    this.setState({ joke: theJoke });
  };

  getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ Categories: response.data });
  };

  creatCategoriesButtons = () => {
    this.getCategories();
    return this.state.Categories.map((category) => {
      return <Button onclick={this.handleClick} name ={`${category}`} title={`${category}`}></Button>;
    });
  };

  handleClick = async (e) => {
    const category = e.target.name;
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({categoryJok: response.data.value})
  };

  handleInput= async (inputText)=>{
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${inputText}`
    );
    this.setState({searchJokes: response.data.result});

  }

  printSearchJokes=()=>{
    console.log(this.state.searchJokes);
   return this.state.searchJokes.map((joke)=>{ return <div>{joke.value}</div>});
  }

  render() {
    return (
      <>
        <Button onclick={this.getRandomJoke} title="Random Joke" />
        <div>{this.state.joke}</div>
        <div>{this.creatCategoriesButtons()}</div>
        {this.state.categoryJok}
        <Input labelName="Search" saveInput={this.handleInput}/>
        {this.printSearchJokes()}
      </>
    );
  }
}

export default App;
