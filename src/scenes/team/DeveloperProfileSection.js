import React, { Component } from 'react';

import GitHubButton from 'commons/components/buttons/GitHubButton';
import LinkedInButton from 'commons/components/buttons/LinkedInButton';

export default class DeveloperProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.image} style={{height:'40em', width:'40em'}} />
        { this.props.github && <GitHubButton url={this.props.github} /> }
        { this.props.linkedin && <LinkedInButton url={this.props.linkedin} /> }
        <h1>{this.props.name}</h1>
        <h3>{this.props.role}</h3>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
