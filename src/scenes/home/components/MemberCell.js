import React, { Component } from 'react';

export default class MemberCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="member-cell">
        <img src={this.props.image} />
      </div>
    );
  }
}
