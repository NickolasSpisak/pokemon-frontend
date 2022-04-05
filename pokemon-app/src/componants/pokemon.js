import { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mons: [],
      DataisLoaded: false,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>{items.name}</h1>
        <h1>
          {items.type1}
          {items.type2}
        </h1>
        <h1>{items.number}</h1>
      </div>
    );
  }
}
export default Pokemon;
