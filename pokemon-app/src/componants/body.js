import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./body.css";
import { Link } from "react-router-dom";
import axios from "axios";
export const Body = (props) => {
  const { mons } = props;

  return mons.map((mons) => {
    console.log(mons);
    return (
      <div key={mons._id}>
        <h3>{mons.name}</h3>
        <p>
          {mons.type1}
          {mons.type2}
        </p>
        <p>{mons.description}</p>
      </div>
    );
  });

  // return (
  //   <div>
  //     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  //       <DropdownToggle caret>Dropdown</DropdownToggle>
  //       <DropdownMenu>
  //         {items.map((item) => (
  //           <DropdownItem className="items" key={item.id}>
  //             {item.name}
  //           </DropdownItem>
  //         ))}
  //       </DropdownMenu>
  //     </Dropdown>

  //   </div>
  // );
};

export default Body;
