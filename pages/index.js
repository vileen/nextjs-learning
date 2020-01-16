import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  // next js lifecycle function, executed on the server, not on a browser
  // which means it would be great to consume without a server?
  static getInitialProps() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App'});
      }, 1000)
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Main page of {this.props.appName}</h1>
        <p>Go to <Link href="/auth" ><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    )
  }
};

export default IndexPage;

