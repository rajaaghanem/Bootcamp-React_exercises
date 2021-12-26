import React, { Component } from "react";
import Text from "./components/Text/Text";

export default class App extends Component {
  text =
    "This page shares my best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems";
  maxLength = 41;

  render() {
    return <Text text={this.text} maxLength={this.maxLength} />;
  }
}
