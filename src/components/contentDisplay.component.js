import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <section className="content">
        <h2 className="content__title">
          {this.props.current.title}
          <span className="content__dead-line">{this.props.current.deadLine}</span>
        </h2>
        <p className="content__description">{this.props.current.description}</p>
        <p className={[this.props.current.status, "content__status"].join(' ')}>{this.props.current.status}</p>
      </section>
    );
  }
}

export default Display
