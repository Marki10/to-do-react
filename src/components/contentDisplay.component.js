import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <section className="content">
        <h2 className="content__title">{this.props.current.title}</h2>
        <p>{this.props.current.description}</p>
        <p>{this.props.current.id}</p>
        <p>{this.props.current.status}</p>
      </section>
    );
  }
}

export default Display
