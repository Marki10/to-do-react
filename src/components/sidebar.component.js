import React, { Component } from 'react'
import { connect } from 'react-redux'

import './sidebar.component.scss'

import { deleteItem, setCurrentItem, changeToEdit, archiveItem, changeToAdd } from '../actions/listAction'

class Header extends Component {
  setCurrentItem(id) {
    this.props.setCurrentItem(id)
  }

  deleteItem(id) {
    this.props.deleteItem(id);
  }

  changeToEdit() {
    this.props.changeToEdit();
  }

  setItemArchive(id) {
    this.props.archiveItem(id);
  }

  changeToAdd() {
    this.props.changeToAdd()
  }

  render() {
    return (
      <section className="side-bar col-md-3">
        <header className="header">
          <div className="header__user">Greg</div>
          <div className="header__search">
            <input type="text" class="header__search-input" placeholder="Search for..." />
            <button class="header__search-button" type="button">O</button>
          </div>
        </header>
        <nav className="nav-menu">
          <h2 className="nav-menu__title">To do's</h2>

          <ul className="nav-menu__list">
            {this.props.list.map((item, index) =>
              <li key={index} onClick={ () => this.setCurrentItem(item.id) } className="nav-menu__list-item">
                {item.title}
                <div className="nav-menu__button-group">
                  <button onClick={ () => this.deleteItem(item.id) } className="nav-menu__buttons nav-menu__buttons--danger">X</button>
                  <button onClick={ () => this.changeToEdit() } className="nav-menu__buttons nav-menu__buttons--success">E</button>
                  <button onClick={ () => this.setItemArchive(item.id) } className="nav-menu__buttons nav-menu__buttons--info">A</button>
                </div>
                <div className="clearfix"></div>
              </li>
            )}
          </ul>
          <button onClick={ () => this.changeToAdd() }>Add</button>
        </nav>
      </section>

    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem : (itemId) => dispatch(deleteItem(itemId)),
    archiveItem : (itemId) => dispatch(archiveItem(itemId)),
    changeToEdit : () => dispatch(changeToEdit()),
    setCurrentItem : (itemId) => dispatch(setCurrentItem(itemId)),
    changeToAdd : () => dispatch(changeToAdd())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

