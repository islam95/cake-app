import React from "react";
import Cake from "./Cake";
import AddCake from "./AddCake";

class CakesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: [],
      input: ""
    };
    fetch(
      "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json"
    )
      .then(data => {
        return data.json();
      })
      .then(serverCakes => {
        this.setState({
          cakes: serverCakes
        });
      });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  filterCakes = () => {
    const filteredCakes = this.state.cakes.filter(cake => {
      return cake.title.includes(this.state.input);
    });
    return filteredCakes;
  };

  addCake = (title, desc) => {
    const cakes = this.state.cakes;
    cakes.push({
      title,
      desc
    });
    this.setState({
      cakes
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search a cake..."
          onChange={this.handleChange}
        />
        <AddCake addCake={this.addCake} />
        {this.filterCakes().map((cake, index) => {
          return <Cake key={index} cake={cake} />;
        })}
      </div>
    );
  }
}

export default CakesList;
