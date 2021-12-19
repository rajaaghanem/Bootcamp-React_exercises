import React from "react";
import {namesExtract, filter1990} from "../src/utility_functions/array_functions"
import Card from "./components/Card";
import Name from "./components/Name/Name";


class App extends React.Component {
  state = {allNames:[], allBefore1990:[]};

  data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Johnny",
      birthday: "1-10-1992",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];

  componentDidMount=()=>{
    this.updtaeNames();
    this.filterBirthday();
  }

  filterBirthday=()=>{
    const result = filter1990(this.data);
    this.setState({allBefore1990:result});

  }
  //extract all the names from an arry
  updtaeNames=()=>{
    const names= namesExtract(this.data);
    this.setState({allNames:names});
  }

  render() {
    console.log(this.state.allNames);
    console.log(this.state.allBefore1990);

    return (
      <>
        <Name names={this.state.allNames}/>
        <Card objs={this.state.allBefore1990}/>
      </>
    );
  }
}

export default App;
