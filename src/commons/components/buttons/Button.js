import React, { Component } from 'react';

import { Theme } from 'commons/theme/Theme';



export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> {/*Testing only*/}
        {this.props.imgSrc ? <img src={this.props.imgSrc} /> : <div style={{backgroundColor:"#ffa500", height:'100px', width:'50px'}}>No img found</div>}
      </div>
    );
  }
}

// Button.propTypes = {
//   hasImage: PropTypes.bool.isRequired
// };
