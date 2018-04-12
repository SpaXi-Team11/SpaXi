import React, { Component } from 'react';

import 'scenes/home/styles/style.css';
import softwareBox from 'assets/brand/spaxi_box.png';
import ViewOnGitHubButton from 'commons/components/buttons/ViewOnGitHubButton';

export default class HomeBanner extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div class="home-banner">
        <div class="left">
          <img src={softwareBox} />
        </div>
        <div class="right">
          <div class="text">
            <p class="desc-top">A reliant companion</p>
            <p class="desc-middle">STATIC PROGRAM ANALYZER</p>
            <p class="desc-bottom">simple solution for <span>SIMPLE</span> program</p>
          </div>
          <div class="button-area">
            <ViewOnGitHubButton />{/*to put a dl button instead*/}
          </div>
        </div>
      </div>
    );
  }
}
