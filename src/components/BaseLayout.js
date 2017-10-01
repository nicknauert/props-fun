import React, { Component } from 'react'
import Header from './Header'
import ParentComponent from './ParentComponent'
import Footer from './Footer'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
          <ParentComponent/>
        <Footer/>
      </div>
    );
  }
}
