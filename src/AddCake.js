import React, { Component } from "react";

class AddCake extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: ""
    };
  }

  handleInput = (type, e) => {
    e.preventDefault();
    const newState = {};
    newState[type] = e.target.value;
    this.setState(newState);
  };

  onClick = e => {
    e.preventDefault();
    this.props.addCake(this.state.title, this.state.desc);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="New title"
            onChange={this.handleInput.bind(this, "title")}
          />
          <textarea
            type="text"
            name="desc"
            placeholder="Description"
            onChange={this.handleInput.bind(this, "desc")}
          />
          <button onClick={this.onClick} type="submit">
            Add Cake
          </button>
        </form>
      </div>
    );
  }
}

export default AddCake;
