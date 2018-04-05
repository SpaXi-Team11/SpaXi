import React, { Component } from 'react';

import Developers from './Developers';
import Advisors from './Advisors';

import Acknowledgement from './Acknowledgement';

import DeveloperProfileSection from './DeveloperProfileSection';
import { DeveloperDisplayPic } from 'commons/image_objects/DeveloperDisplayPic'; {/*temp, shld import profile pic instead*/}

export default class TeamScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Developers />
        <Advisors />
        <Acknowledgement />
        <DeveloperProfileSection name="Akankshita Dash" role="Documentation • Query Validator • Result Formatter" image={DeveloperDisplayPic.AKANKSHITA} github="https://github.com/akd13" linkedin="https://www.linkedin.com/in/akankshita-dash-b0a0b1115">
          I am lovely
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Marcus Ng Wen Jian" role="Query Validator • Quality Assurer" image={DeveloperDisplayPic.MARCUS} github="https://github.com/marcusngwj" linkedin="https://www.linkedin.com/in/marcusngwenjian">
          Hellow world
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Chua Ping Chan" role="Parser • Query Optimiser" image={DeveloperDisplayPic.PING_CHAN} github="https://github.com/ChuaPingChan" linkedin="https://www.linkedin.com/in/ping-chan-chua">
          I am God
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Lau Wen Hao" role="Query Evaluator • Software Architect" image={DeveloperDisplayPic.WEN_HAO} github="https://github.com/wenhaohaoo">
          I stay in King Edward
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Zhang Ying" role="Design Extractor • Knowledge Base" image={DeveloperDisplayPic.ZHANG_YING} github="https://github.com/Zing1996">
          Knowledge is key
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Zhuang Lei" role="Documentation" image={DeveloperDisplayPic.ZHUANG_LEI} github="https://github.com/zl1993" linkedin="https://www.linkedin.com/in/lei-zhuang-1033a211b">
          I love Japan
        </DeveloperProfileSection>
      </div>
    );
  }
}
