import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
          <input type="submit" onClick={this.props.onClick}/>
    );
  }
}
