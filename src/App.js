import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from './components/content.component'
import Sidebar from './components/sidebar.component'

import './app.scss'

class App extends Component {
  render() {
    return (
      <main className="app container">
        <div className="row">
          <Sidebar list={ this.props.list }></Sidebar>
          <section className="content col-md-8">
            <Content data={ { current: this.props.currentItem, status: this.props.contentStatus} }></Content>
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