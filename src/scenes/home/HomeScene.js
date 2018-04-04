import React, { Component } from 'react';

import MemberSection from './MemberSection';
import Button from 'commons/components/buttons/Button'

import brandLogo from 'assets/brand/spaxi_brand_logo.svg';

export default class HomeScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <MemberSection />
        <div style={{backgroundColor:'#ffff00', height:'1000px'}}>For testing. To remove later</div>
        <Button imgSrc={brandLogo}/>  {/*Testing Remove import brandlogo too*/}
      </div>
    );
  }
}
