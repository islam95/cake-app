import React from "react";

class Cake extends React.Component {
  render() {
    const { title, desc, image } = this.props.cake;
    return (
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <img src={image} alt={title} width="200" />
      </div>
    );
  }
}

export default Cake;
