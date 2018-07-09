import React, { Component } from 'react';

import Empty from './contentEmpty.component'
import Add from './contentAdd.component'
import Edit from './contentEdit.component'
import Display from './contentDisplay.component'

import './content.component.scss'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(props) {
    this.setState(props.data)
  }

  render() {
    switch(this.state.status) {
      case "empty": return ( <Empty></Empty> );
      case "add": return ( <Add></Add> );
      case "display": return ( <Display current={ this.state.current }></Display> );
      case "edit": return ( <Edit current={ this.state.current }></Edit> );
      default: return ( <Empty></Empty> );
    }
  }
}

export default Content
