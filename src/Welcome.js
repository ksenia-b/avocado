import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name === 'Oksana' || this.props.signedIn === true) {
      return (
      	<h5>
      	  hello sir {this.props.name} it is truly great to meet you here!!!
      	</h5>
      );
    } else {
      return (
      	<h5>
      	  WELCOME {this.props.name }!
            <br/>
          Are you allowed to reach to the site???!!!!!
      	</h5>
      );
    }
  }
}