import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editListItem } from '../actions/listAction'

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: {
        id: this.props.current.id,
        title: this.props.current.title,
        description: this.props.current.description,
        author: this.props.current.author,
        createDate: this.props.current.createDate,
        deadLine: this.props.current.deadLine,
        status: this.props.current.status
      }
    }
  }

  handleUpdate(propertyName, event) {
    const listItem = this.state.listItem
    listItem[propertyName] = event.target.value;
    this.setState({ listItem: listItem });
  }

  save() {
    this.props.editListItem(this.state.listItem)
  }

  render() {
    return (
      <span>
        <h2 className="content__title">Edit task</h2>
        <div className="form-group">
          <label className="form-group__label" htmlFor="title">Title: </label>
          <input className="form-group__input" id="title" type="text" onChange={this.handleUpdate.bind(this, 'title')} value={this.state.listItem.title}/>
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="description">Description: </label>
          <textarea className="form-group__textarea" id="description" onChange={this.handleUpdate.bind(this, 'description')} value={this.state.listItem.description}></textarea>
        </div>
        <div className="form-group">
          <label className="form-group__label" htmlFor="deadline">Dead line: </label>
          <input className="form-group__input-datepicker" id="deadline" type="date" onChange={this.handleUpdate.bind(this, 'deadLine')} value={this.state.listItem.deadLine}/>
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
    editListItem : (item) => dispatch(editListItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
