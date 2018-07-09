import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteItem, setCurrentItem, changeToEdit, archiveItem, changeToAdd } from '../actions/listAction'

import './sidebar.component.scss'

class Header extends Component {
  setCurrentItem(index) {
    this.props.setCurrentItem(index)
  }

  deleteItem(index) {
    this.props.deleteItem(index);
  }

  changeToEdit(index) {
    this.props.changeToEdit(index);
  }

  setItemArchive(index) {
    this.props.archiveItem(index);
  }

  changeToAdd() {
    this.props.changeToAdd()
  }

  render() {
    return (
      <section className="side-bar col-md-4">
        <header className="header">
        </header>
        <nav className="nav-menu">
          <ul className="nav-menu__list">
            {this.props.list.map((item, index) =>
              <li key={index} className="nav-menu__list-item">
                <span onClick={ () => this.setCurrentItem(index) }>{item.title}</span>
                <div className="nav-menu__button-group">
                  <button onClick={ () => this.deleteItem(index) } className="nav-menu__buttons nav-menu__button-action nav-menu__button-action--danger"><i className="fa fa-minus-square"></i></button>
                  <button onClick={ () => this.changeToEdit(index) } className="nav-menu__buttons nav-menu__button-action nav-menu__button-action--success"><i className="fa fa-edit"></i></button>
                  <button onClick={ () => this.setItemArchive(index) } className="nav-menu__buttons nav-menu__button-action nav-menu__button-action--info"><i className="fa fa-hashtag"></i></button>
                </div>
                <div className="clearfix"></div>
              </li>
            )}
          </ul>
          <button className="nav-menu__button nav-menu__button-add" onClick={ () => this.changeToAdd() }>Add</button>
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
    deleteItem : (index) => dispatch(deleteItem(index)),
    archiveItem : (index) => dispatch(archiveItem(index)),
    setCurrentItem : (index) => dispatch(setCurrentItem(index)),
    changeToEdit : (index) => dispatch(changeToEdit(index)),
    changeToAdd : () => dispatch(changeToAdd())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

