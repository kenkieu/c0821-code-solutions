import React from 'react';

const menuItems = ['Lost Ark', 'Minecraft', 'New World', 'Valheim', 'Valorant'];

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: 'false' };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  render() {
    if (this.state.menuOpen === 'true') {
      return (
        <>
          <i onClick={this.openMenu} className="fas fa-bars hamburger-icon"></i>
          <div className="container menu-bg">
            <div className="row">
              <div className="menu menu-open">
                <h2 className="menu-title">Select A Game</h2>
                {this.createMenuItems()}
              </div>
              <div onClick={this.closeMenu} className="site"></div>
            </div>
          </div>
        </>
      );
    } else {
      return (
          <>
            <i onClick={this.openMenu} className="fas fa-bars hamburger-icon"></i>
          <div className="container">
              <div className="row">
              <div className="menu">
                <h2 className="menu-title">Menu</h2>
                {this.createMenuItems()}
              </div>
              <div onClick={this.closeMenu} className="site"></div>
              </div>
            </div>
          </>
      );
    }
  }

  createMenuItems() {
    const list = menuItems.map(item =>
      <li onClick={this.closeMenu} key={item}>{item}</li>
    );
    return <ul>{list}</ul>;
  }

  openMenu() {
    this.setState({ menuOpen: 'true' });
  }

  closeMenu() {
    this.setState({ menuOpen: 'false' });
  }
}

export default AppDrawer;
