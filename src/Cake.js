import React from 'react';

class Cake extends React.Component {
  render() { 
    const {title, desc, image} = this.props.cake;
    return ( 
      <div>
        <p>{title}</p>
        <img src={image} alt={title} width="200" />
        <p>{desc}</p>
      </div>
    )
  }
}
 
export default Cake;