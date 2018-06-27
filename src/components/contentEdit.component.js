import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editListItem } from '../actions/listAction'

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: {
        id: 0,
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
    this.props.editListItem(this.state.listItem)
  }

  render() {
    return (
      <section className="content">
        Edit
        <label>Title: </label> <input type="text" onChange={this.handleUpdate.bind(this, 'title')} value={this.state.listItem.title}/>
        <label>Description: </label><input type="text" onChange={this.handleUpdate.bind(this, 'description')} value={this.state.listItem.description}/>
        <label>Deadline: </label><input type="text" onChange={this.handleUpdate.bind(this, 'deadLine')} value={this.state.listItem.deadLine}/>
        <button onClick={ () => this.save() }>Save</button>
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
    editListItem : (item) => dispatch(editListItem(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
