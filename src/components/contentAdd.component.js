import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addListItem } from '../actions/listAction'

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
        Add
        <label>Title: </label> <input type="text" onChange={this.handleUpdate.bind(this, 'title')} value={this.state.listItem.title}/>
        <label>Description: </label><input type="text" onChange={this.handleUpdate.bind(this, 'description')} value={this.state.listItem.description}/>
        <label>Deadline: </label><input type="text" onChange={this.handleUpdate.bind(this, 'deadLine')} value={this.state.listItem.deadLine}/>
        <button onClick={ () => this.save() }>Save</button>
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
