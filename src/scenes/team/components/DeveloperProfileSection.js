import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'scenes/team/styles/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// <div className="row" style={{paddingTop: '5em', paddingBottom: '5em'}}>

import GitHubButton from 'commons/components/buttons/GitHubButton';
import LinkedInButton from 'commons/components/buttons/LinkedInButton';

export default class DeveloperProfileSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="developer-profile-section">
        <div className="left">
          <img src={this.props.image} />
          <div className="social-media">
            { this.props.github && <GitHubButton url={this.props.github} className="button" /> }
            { this.props.linkedin && <LinkedInButton url={this.props.linkedin} className="button" /> }
          </div>
        </div>
        <div className="right">
          <h1>{this.props.name}</h1>
          <h4>{this.props.role}</h4>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

DeveloperProfileSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string,
  linkedin: PropTypes.string
};
