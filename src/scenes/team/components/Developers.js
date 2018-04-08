import React, { Component } from 'react';

import 'scenes/team/styles/style.css';
import { DeveloperDisplayPic } from 'commons/image_objects/DeveloperDisplayPic';

export default class Developers extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1 className="theme__section-header">Developers</h1>
        <img src={DeveloperDisplayPic.AKANKSHITA} />
        <img src={DeveloperDisplayPic.MARCUS} />
        <img src={DeveloperDisplayPic.PING_CHAN} />
        <img src={DeveloperDisplayPic.WEN_HAO} />
        <img src={DeveloperDisplayPic.ZHANG_YING} />
        <img src={DeveloperDisplayPic.ZHUANG_LEI} />
      </div>
    );
  }
}
