import React, { Component } from 'react';

import './styles/style.css';
import robot from 'assets/brand/spaxi_apology.png';

export default class PageNotFound extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="page-not-found">
        <div className="four-o-four">
          <p className="four">4</p>
          <img src={robot} />
          <p className="four">4</p>
        </div>
        <p>
          PAGE NOT FOUND
        </p>
      </div>
    );
  }
}
