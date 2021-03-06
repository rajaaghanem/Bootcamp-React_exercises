import "./App.css";
import React from "react";
import axios from "axios";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends React.Component {
  state = { joke: "", Categories: [], categoryJok: "", currCategory: "", searchJokes:[], errorMassege:""};

  componentDidMount=()=>{
    this.getCategories();
  }

  getRandomJoke = async () => {
    try{
      const response = await axios.get("https://api.chucknorris.io/jokes/random");
    const theJoke = response.data.value;
    this.setState({ joke: theJoke });
    }catch(e){
      this.setState({errorMassege: e.response.data.massege});
    }
    
  };

  getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ Categories: response.data });
  };

  creatCategoriesButtons = () => {
    return this.state.Categories.map((category,i) => {
      return <Button key={i} onclick={this.handleClick} name ={`${category}`} title={`${category}`}></Button>;
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
   return this.state.searchJokes.map((joke)=>{ return <div key={joke.id}>{joke.value}</div>});
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
        <div>{this.state.errorMassege}</div>
      </>
    );
  }
}

export default App;
