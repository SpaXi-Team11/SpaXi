import React, { Component } from 'react';

import MemberCell from './MemberCell';
import { DeveloperDisplayPic } from 'commons/image_objects/DeveloperDisplayPic';

export default class MemberSection extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="member-section">
        <h1>The SpaXians</h1>
        <MemberCell image={DeveloperDisplayPic.AKANKSHITA}/>
        <MemberCell image={DeveloperDisplayPic.MARCUS}/>
        <MemberCell image={DeveloperDisplayPic.PING_CHAN}/>
        <MemberCell image={DeveloperDisplayPic.WEN_HAO}/>
        <MemberCell image={DeveloperDisplayPic.ZHANG_YING}/>
        <MemberCell image={DeveloperDisplayPic.ZHUANG_LEI}/>
      </div>
    );
  }
}
