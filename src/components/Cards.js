import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    const { id, type, setup, punchline } = this.props.list;
    return (
      <div className="col-md-4 p-3">
        <div className="card rounded text-center bg-dark card-design">
          <div className="font text-warning mt-2">Id : {id}</div><hr/>
          <div className="text-primary">Type : {type}</div><hr/>
          <div className="text-light">Setup : {setup}</div><hr/>
          <div className="text-success mb-2">Punchline : {punchline}</div>
        </div>
      </div>
    );
  }
}
