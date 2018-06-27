import React, { Component } from 'react'
import { connect } from 'react-redux'

import './app.scss'

import Sidebar from './components/sidebar.component'
import Content from './components/content.component'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillReceiveProps(props) {
    this.state = props
  }

  render() {
    return (
      <main className="app container">
        <div className="row">
          <Sidebar list={ this.props.list }></Sidebar>
          <section className="content col-md-9">
            <Content data={ { current: this.props.currentItem, status: this.state.contentStatus} }></Content>
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    list : state.list.list,
    currentItem: state.list.currentItem,
    contentStatus: state.list.contentStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)