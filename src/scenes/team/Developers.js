import React, { Component } from 'react';

import { Theme } from 'commons/Theme';
import { DeveloperDisplayPic } from 'assets/members/DeveloperDisplayPic';

const styleTitle = {
  fontSize: Theme.FONTSIZE_SECTION_HEADER
}

export default class Developers extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1 style={styleTitle}>Developers</h1>
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
