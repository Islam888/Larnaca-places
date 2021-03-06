import React, { Component } from "react";
import PropTypes from "prop-types";

class Burger extends Component {
  //To open or close side menu with enter key when in focus
  handleKeyDown = evt => {
    this.props.openCloseDrawerByKeyDown(evt.keyCode);
  };
  render() {
    return (
      <div id="burger">
        <span
          id="burger-btn"
          role="button"
          aria-label={this.props.BurgerBtnLabel}
          tabIndex="0"
          onClick={this.props.handleClick}
          onKeyDown={this.handleKeyDown}
        >
          &#9776;
        </span>
        <header
          id="burger-header"
          className="burger-header-disappear"
          tabIndex="0"
        >
          LARNACA Places
        </header>
      </div>
    );
  }
}

Burger.propTypes = {
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default Burger;
