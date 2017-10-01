import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="innerNav">
          <li><a href="#">Hey</a></li>
          <li><a href="#">Lets</a></li>
          <li><a href="#">React</a></li>
        </ul>
      </nav>
    );
  }
}
