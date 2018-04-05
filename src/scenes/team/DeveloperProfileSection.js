import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import GitHubButton from 'commons/components/buttons/GitHubButton';
import LinkedInButton from 'commons/components/buttons/LinkedInButton';

export default class DeveloperProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <img src={this.props.image} style={{height:'35em', width:'35em'}} />
          { this.props.github && <GitHubButton url={this.props.github} /> }
          { this.props.linkedin && <LinkedInButton url={this.props.linkedin} /> }
        </div>
        <div className="col">
          <h1>{this.props.name}</h1>
          <h3>{this.props.role}</h3>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}
