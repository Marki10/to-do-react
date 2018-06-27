import React, { Component } from 'react';

import Empty from './contentEmpty.component'
import Add from './contentAdd.component'
import Edit from './contentEdit.component'
import Display from './contentDisplay.component'

import { connect } from 'react-redux'

import { archiveItem } from '../actions/listAction'

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillReceiveProps(props) {
    this.state = props.data
  }

  archiveItem(id) {
    this.props.archiveItem(id);
  }

  render() {
    if(this.state.status === "empty") {
      return ( 
        <Empty></Empty>
      );
    }

    if(this.state.status === "add") {
      return ( 
        <Add></Add>
      );
    }

    if(this.state.status === "edit") {
      return ( 
        <Edit></Edit>
      );
    }
    
    if(this.state.status === "display") {
      return ( 
        <Display current={ this.state.current }></Display>
      );
    } else {
      return (
        <div></div>
      );
      
    }
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    archiveItem : (itemId) => dispatch(archiveItem(itemId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
