import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addListItem } from '../actions/listAction'

import './form.component.scss'

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: {
        id: 3,
        title: '',
        description: '',
        author: 'Admin',
        createDate: new Date(),
        deadLine: '',
        status: 'active'
      }
    }
  }

  handleUpdate(propertyName, event) {
    const listItem = this.state.listItem
    listItem[propertyName] = event.target.value;
    this.setState({ listItem: listItem });
  }

  save() {
    this.props.addListItem(this.state.listItem)
  }

  render() {
    return (
      <span>
        <h2 className="content__title">Add new task</h2>
        <div className="form-group">
          <label className="form-group__label">Title: </label>
          <input className="form-group__input" type="text" onChange={this.handleUpdate.bind(this, 'title')} value={this.state.listItem.title}/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Description: </label>
          <input className="form-group__input" type="text" onChange={this.handleUpdate.bind(this, 'description')} value={this.state.listItem.description}/>
        </div>
        <div className="form-group">
          <label className="form-group__label">Dead line: </label>
          <input className="form-group__input" type="text" onChange={this.handleUpdate.bind(this, 'deadLine')} value={this.state.listItem.deadLine}/>
        </div>
        <button className="form-group__button-save" onClick={ () => this.save() }>Save</button>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addListItem : (item) => dispatch(addListItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)
