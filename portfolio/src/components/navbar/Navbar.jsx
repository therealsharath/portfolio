import React, { Component } from 'react'
import NavbarHelper from './NavbarHelper.jsx';

import GlobalStyle from './styles/Global.js';

class Navbar extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <NavbarHelper 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    )
  }
}
export default Navbar;
