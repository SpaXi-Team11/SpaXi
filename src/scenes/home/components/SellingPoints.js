import React, { Component } from 'react';

import clock from 'assets/icons/clock.png';
import archery from 'assets/icons/archery.png';
import docs from 'assets/icons/docs.png';

export default class SellingPoints extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="selling-points">
        <div>
          <img src={clock} />
          <h2>Fast Processing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis lorem mauris, et mollis urna dignissim at. Fusce convallis ultricies mi, et scelerisque ex. Morbi gravida a sapien a varius. Quisque luctus massa placerat felis ultricies, a ultricies mauris finibus. Duis quis elit nec lorem volutpat ultrices. In pellentesque leo.</p>
        </div>
        <div>
          <img src={archery} />
          <h2>Accurate Results</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis lorem mauris, et mollis urna dignissim at. Fusce convallis ultricies mi, et scelerisque ex. Morbi gravida a sapien a varius. Quisque luctus massa placerat felis ultricies, a ultricies mauris finibus. Duis quis elit nec lorem volutpat ultrices. In pellentesque leo.</p>
        </div>
        <div>
          <img src={docs} />
          <h2>Summarised Report</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis lorem mauris, et mollis urna dignissim at. Fusce convallis ultricies mi, et scelerisque ex. Morbi gravida a sapien a varius. Quisque luctus massa placerat felis ultricies, a ultricies mauris finibus. Duis quis elit nec lorem volutpat ultrices. In pellentesque leo.</p>
        </div>
      </div>
    );
  }
}
