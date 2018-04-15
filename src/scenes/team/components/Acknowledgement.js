import React, { Component } from 'react';

import 'scenes/team/styles/style.css';
export default class Acknowledgement extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="acknowledgement">
        <h1 className="theme__section-header">Acknowledgement</h1>
        <p>We would like to express our deepest gratitude to Dr. Zhao Jin and Dr. Cristina Carbunaru for coaching us in this module. Their enthusiasm and creative way of teaching has given us a new perspective in learning software engineering and its practices.<br />
           We would also like to thank Mr. Thilina and Ms. Parvathy for their valuable and constructive suggestions throughout the whole duration of this project. Their patience, support and encouragement pulled us through this tough module.<br />
           We would also like to extend our thanks to Mr. Ang Ray Yan for his valuable technical advices and assistance. His unconditional help and willingness to stay till late night despite being busy has been very much appreciated.<br />
           Finally, we wish to thank NUS School of Computing for giving us a chance to enrol in this module.
        </p>
      </div>
    );
  }
}
