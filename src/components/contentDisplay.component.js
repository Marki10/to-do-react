import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <section className="content">
        <section className="content">
          Content
          <h2>{this.props.current.title}</h2>
          <p>{this.props.current.description}</p>
          <p>{this.props.current.id}</p>
          <p>{this.props.current.status}</p>
        </section>
      </section>
    );
  }
}

export default Display
