import React from 'react';

const menuItems = ['About', 'Get Started', 'Sign In'];

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: 'false' };
    this.createMenuItems = this.createMenuItems.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    if (!this.state.menuOpen) {
      return (
        <div className="menu-container">
          <h2 className="menu-header">Menu</h2>
          {this.createMenuItems()}
        </div>
      );
    } else {
      return <i onClick={this.toggleMenu} className="fas fa-bars"></i>;
    }
  }

  createMenuItems() {
    const list = menuItems.map(item =>
    <li onClick={this.toggleMenu} key={item}>{item}</li>
    );
    return <ul>{list}</ul>;
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
}

export default AppDrawer;
