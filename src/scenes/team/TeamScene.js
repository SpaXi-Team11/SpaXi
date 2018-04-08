import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Acknowledgement from './components/Acknowledgement';
import Advisors from './components/Advisors';
import TooltipBanner from 'commons/components/tooltip_banner/TooltipBanner';

import DeveloperProfileSection from './components/DeveloperProfileSection';
import { DeveloperDisplayPic } from 'commons/image_objects/DeveloperDisplayPic'; {/*temp, shld import profile pic instead*/}

export default class TeamScene extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Acknowledgement />
        <Advisors />
        <TooltipBanner>Meet our developers</TooltipBanner>
        <DeveloperProfileSection name="Akankshita Dash" role="Documentation • Query Validator • Result Formatter" image={DeveloperDisplayPic.AKANKSHITA} github="https://github.com/akd13" linkedin="https://www.linkedin.com/in/akankshita-dash-b0a0b1115">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo eros, sollicitudin non aliquam eu, facilisis ac purus. Etiam id blandit augue. Proin consectetur, ante nec posuere sagittis, felis turpis ornare magna, in maximus enim ex nec lorem. Nunc sollicitudin purus felis, ac dignissim nisi iaculis quis. Sed molestie pulvinar quam a fringilla. Curabitur magna odio, dictum sed ultricies ut, finibus eu dui. Vivamus laoreet tristique ex, quis blandit velit fermentum et. Proin quis dolor non nisl maximus sollicitudin. Mauris ex nulla, pretium eget dui sit amet, pharetra viverra sem. Donec dignissim, arcu non varius consequat, magna velit posuere ipsum, id viverra ante felis blandit tortor. Sed in nunc ultricies, malesuada lorem eu, condimentum augue. Etiam sollicitudin facilisis dignissim. Phasellus quis orci condimentum, consequat arcu sit amet, laoreet quam. Donec a pretium lacus, et auctor ex. Nullam egestas tempor dolor, sit amet aliquam turpis bibendum sit amet. Donec non cursus.
        </DeveloperProfileSection>
        <DeveloperProfileSection name="Marcus Ng Wen Jian" role="Query Validator • Quality Assurer" image={DeveloperDisplayPic.MARCUS} github="https://github.com/marcusngwj" linkedin="https://www.linkedin.com/in/marcusngwenjian">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod lorem quam, sed molestie dolor fringilla in. Vestibulum id magna aliquet, maximus tellus ut, cursus purus. Donec elementum nulla in metus tempor pharetra. In vitae arcu quis elit iaculis posuere. Phasellus efficitur accumsan auctor. Mauris volutpat varius ligula, at fringilla metus vulputate vitae. Integer feugiat risus sit amet dolor cursus tempor. Phasellus fermentum libero vitae consequat suscipit. Mauris fringilla tristique.
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
