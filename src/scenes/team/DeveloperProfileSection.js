import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import GitHubButton from 'commons/components/buttons/GitHubButton';
import LinkedInButton from 'commons/components/buttons/LinkedInButton';

export default class DeveloperProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{paddingTop: '5em', paddingBottom: '5em'}}>
        <div className="col 1g-6">
          <img src={this.props.image} style={{height:'100%', width:'100%'}} />
          { this.props.github && <GitHubButton url={this.props.github} /> }
          { this.props.linkedin && <LinkedInButton url={this.props.linkedin} /> }
        </div>
        <div className="col 1g-6">
          <h1>{this.props.name}</h1>
          <h3>{this.props.role}</h3>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

DeveloperProfileSection.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string,
  linkedin: PropTypes.string
};
