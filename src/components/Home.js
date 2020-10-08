import Axios from "axios";
import React, { Component } from "react";
import Cards from "./Cards";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokesList: [],
    };
  }

  componentDidMount() {
    this.funJokesList();
  }

  funJokesList = () => {
    Axios.get("https://official-joke-api.appspot.com/random_ten")
      .then((res) => {
        console.log(res.data);
        this.setState({ jokesList: res.data.reverse() });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="row m-0 p-0">
        {this.state.jokesList.map((list) => (
          <Cards key={list.id} list={list} />
        ))}
      </div>
    );
  }
}
